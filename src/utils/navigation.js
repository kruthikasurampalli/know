/**
 * Navigation utilities for scroll-to-section functionality
 */

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // Calculate offset to account for fixed top nav (57px) + filter nav (55px) + padding (16px)
    const TOP_NAV_HEIGHT = 57;
    const PADDING_OFFSET = 20;
    const totalOffset = TOP_NAV_HEIGHT + PADDING_OFFSET;
    
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - totalOffset;
    
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Section ID mapping for bottom navigation
 */
export const SECTION_IDS = {
  experience: 'experience-section',
  projects: 'projects-section',
  skills: 'skills-section',
  education: 'education-section',
};

/**
 * Top navigation actions
 */
export const TOP_NAV_ACTIONS = {
  menu: 'menu',
  profile: 'profile',
};

/**
 * Below top navigation filter actions
 */
export const FILTER_ACTIONS = {
  all: 'all',
  blogs: 'blogs',
  certification: 'certification',
  contact: 'contact',
};
