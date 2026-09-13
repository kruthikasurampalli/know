import { useState, useEffect, useRef } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import "./App.css";
import { fetchUserData, fetchMembers } from "./utils/api";
import { scrollToSection, scrollToTop, SECTION_IDS } from "./utils/navigation";
import { useTheme } from "./context/ThemeContext";
import Home from "./components/Home";
import Members from "./components/Members";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import MembersGrid from "./components/MembersGrid";

// Portfolio Content Component
function PortfolioContent({ members, membersData }) {
  const { member } = useParams();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMembersView, setShowMembersView] = useState(false);

  useEffect(() => {
    if (member) {
      if (membersData[member]) {
        // Safe: only setting state when member data is available
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUserData(membersData[member]);
        setError(null);
      } else {
        setError(`Member ${member} not found`);
        setUserData(null);
      }
      setLoading(false);
    }
  }, [member, membersData]);

  const handleMemberSelect = (username) => {
    navigate(`/${username}`);
    setShowMembersView(false);
    scrollToTop();
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfileClick = () => {
    scrollToTop();
  };

  const handleBottomNavClick = (section) => {
    const sectionMap = {
      "Experience": SECTION_IDS.experience,
      "Projects": SECTION_IDS.projects,
      "Skills": SECTION_IDS.skills,
      "Education": SECTION_IDS.education,
    };
    scrollToSection(sectionMap[section]);
  };

  return (
    <>
      <header className="portfolio-header">
        <div className="header-wrapper">
          <div className="header-container">
            <div className="header-left">
              <span 
                id="menuIcon" 
                onClick={handleMenuClick}
                title="Toggle Menu"
                className={menuOpen ? "active" : ""}
              >
                |||
              </span>
              <span id="userName">
                {userData?.FirstName ? `${userData.FirstName} ${userData.LastName}` : userData?.Profile?.[0]?.Name || member}
              </span>
            </div>
            <div className="header-actions">
              <button 
                className="header-btn home-btn"
                onClick={() => navigate("/")}
                title="Back to Home"
              >
                🏠 Home
              </button>
              <button 
                id="themeToggle"
                onClick={toggleTheme}
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                className="header-btn"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button 
                id="membersBtn"
                onClick={() => setShowMembersView(!showMembersView)}
                title={showMembersView ? "Back to Portfolio" : "View All Members"}
                className={showMembersView ? "active" : ""}
              >
                👥
              </button>
              <span 
                id="profilePic"
                onClick={handleProfileClick}
                title="Scroll to Profile"
              >
                <img 
                  src={
                    userData?.ProfilePicture || 
                    userData?.Profile?.[0]?.ProfileImage || 
                    `https://avatars.githubusercontent.com/${member}?size=40` ||
                    "./assets/hero.png"
                  } 
                  alt="Profile" 
                />
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="portfolio-content">
        {showMembersView ? (
          <MembersGrid 
            members={members}
            membersData={membersData}
            onMemberSelect={handleMemberSelect}
          />
        ) : (
          <>
            {loading && (
              <div className="loading">
                <p>Loading portfolio...</p>
              </div>
            )}

            {error && (
              <div className="error">
                <p>⚠️ {error}</p>
              </div>
            )}

            {userData && !loading && (
              <>
                <Profile user={userData} />
                <section id={SECTION_IDS.experience}>
                  <Experience experience={userData.Experience} />
                </section>
                <section id={SECTION_IDS.projects}>
                  <Projects projects={userData.Projects} />
                </section>
                <section id={SECTION_IDS.skills}>
                  <Skills skills={userData.Skills} />
                </section>
                <section id={SECTION_IDS.education}>
                  <Education education={userData.Education} />
                </section>
                <Certifications 
                  certifications={userData.Certifications} 
                  awards={userData.Awards}
                />
              </>
            )}
          </>
        )}
      </main>

      {!showMembersView && (
        <div id="bottomNav">
        <span
          onClick={() => handleBottomNavClick("Experience")}
          title="Go to Experience"
          className="nav-item"
        >
          <span className="full-text">Experience</span>
          <span className="short-text">💼</span>
        </span>
        <span
          onClick={() => handleBottomNavClick("Projects")}
          title="Go to Projects"
          className="nav-item"
        >
          <span className="full-text">Projects</span>
          <span className="short-text">🚀</span>
        </span>
        <span
          onClick={() => handleBottomNavClick("Skills")}
          title="Go to Skills"
          className="nav-item"
        >
          <span className="full-text">Skills</span>
          <span className="short-text">⚡</span>
        </span>
        <span
          onClick={() => handleBottomNavClick("Education")}
          title="Go to Education"
          className="nav-item"
        >
          <span className="full-text">Education</span>
          <span className="short-text">🎓</span>
        </span>
      </div>
      )}
    </>
  );
}

// Main App Component
function App() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [membersData, setMembersData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const initialLoadRef = useRef(false);

  useEffect(() => {
    const loadMembers = async () => {
      try {
        setLoading(true);
        const membersList = await fetchMembers();
        setMembers(membersList);
        
        const allMembersData = {};
        for (const member of membersList) {
          const data = await fetchUserData(member);
          if (data) {
            allMembersData[member] = data;
          }
        }
        setMembersData(allMembersData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!initialLoadRef.current) {
      initialLoadRef.current = true;
      loadMembers();
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>⚠️ {error}</p>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home members={members} membersData={membersData} />} />
      <Route path="/members" element={<Members members={members} membersData={membersData} />} />
      <Route path="/:member" element={<PortfolioContent members={members} membersData={membersData} />} />
    </Routes>
  );
}

export default App;
