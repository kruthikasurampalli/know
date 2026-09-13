import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Home.css";

function Home({ members, membersData }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleStartLearning = () => {
    navigate("/members");
  };

  const handleViewGitHub = () => {
    window.open("https://github.com/sidduganeshm/portfolio-website", "_blank");
  };

  const handleViewContributing = () => {
    window.open("https://github.com/sidduganeshm/portfolio-website/blob/main/CONTRIBUTING.md", "_blank");
  };

  return (
    <>
      {/* Header */}
      <header className="home-header">
        <div className="header-container">
          <div className="header-logo">
            <span className="logo-text" onClick={() => window.scrollTo(0, 0)}>Portfolio</span>
          </div>
          <div className="header-actions">
            <button 
              className="header-btn"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Dynamic Portfolio Platform
          </h1>
          <p className="hero-subtitle">
            An open-source project built for developers and learners
          </p>
          <p className="hero-description">
            Learn modern React patterns, design systems, and full-stack development by exploring real-world code
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleStartLearning}>
              Explore Portfolios
            </button>
            <button className="btn btn-secondary" onClick={handleViewGitHub}>
              View on GitHub
            </button>
          </div>
        </div>
        <div className="hero-badges">
          <span className="badge">React 18</span>
          <span className="badge">Vite 8.3</span>
          <span className="badge">React Router</span>
          <span className="badge">Open Source</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">What is This?</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">📚</div>
              <h3>Learning Resource</h3>
              <p>Study production-grade React patterns, component architecture, and modern web development best practices through real, working code.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">🚀</div>
              <h3>Fully Featured</h3>
              <p>Complete with routing, theme switching, responsive design, GitHub API integration, and a comprehensive design system using CSS variables.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">👥</div>
              <h3>Multi-Member</h3>
              <p>View multiple portfolios dynamically loaded from GitHub repositories. Each profile is shareable with clean, bookmarkable URLs like /username.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">♿</div>
              <h3>Accessible</h3>
              <p>Built with semantic HTML, keyboard navigation, ARIA labels, and proper contrast ratios following WCAG guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Modern Design System</h4>
                <p>Comprehensive CSS variable-based design tokens with light/dark mode</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Fully Responsive</h4>
                <p>Perfect experience across TV (1920px+), desktop, tablet, and mobile</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>URL-Based Routing</h4>
                <p>Shareable, bookmarkable member portfolios with React Router</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>GitHub Integration</h4>
                <p>Dynamically fetch portfolio data from GitHub repositories</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Component Architecture</h4>
                <p>Modular, reusable React components following best practices</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-check">✓</span>
              <div>
                <h4>Production Optimized</h4>
                <p>Fast builds with Vite, hot module replacement, and performance tuning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Section */}
      <section className="learn-section">
        <div className="section-container">
          <h2 className="section-title">What You'll Learn</h2>
          <div className="learn-grid">
            <div className="learn-card">
              <h3>React Patterns</h3>
              <ul>
                <li>Functional components & hooks</li>
                <li>Context API for state management</li>
                <li>Custom hooks</li>
                <li>Component composition</li>
              </ul>
            </div>
            <div className="learn-card">
              <h3>Frontend Development</h3>
              <ul>
                <li>CSS variables & design tokens</li>
                <li>Responsive design patterns</li>
                <li>Theme switching</li>
                <li>Accessibility best practices</li>
              </ul>
            </div>
            <div className="learn-card">
              <h3>API Integration</h3>
              <ul>
                <li>Fetching data from APIs</li>
                <li>Error handling</li>
                <li>Loading states</li>
                <li>Data transformation</li>
              </ul>
            </div>
            <div className="learn-card">
              <h3>Developer Tools</h3>
              <ul>
                <li>Vite & module bundling</li>
                <li>React Router</li>
                <li>Code organization</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {members.length > 0 && (
        <section className="team-section">
          <div className="section-container">
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">
              Explore the portfolios of our team members and see their projects, skills, and experience
            </p>
            <div className="team-grid">
              {members.map((member) => {
                const data = membersData[member];
                const firstName = data?.FirstName || '';
                const lastName = data?.LastName || '';
                const name = firstName && lastName ? `${firstName} ${lastName}` : data?.FullName || member;
                const profilePicture = data?.ProfilePicture || `https://avatars.githubusercontent.com/${member}?size=160`;
                const about = data?.About || 'Team member';

                return (
                  <div 
                    key={member}
                    className="team-card"
                    onClick={() => navigate(`/${member}`)}
                    role="button"
                    tabIndex={0}
                    title={`View ${name}'s portfolio`}
                  >
                    <div className="team-card-image">
                      <img src={profilePicture} alt={name} />
                    </div>
                    <div className="team-card-content">
                      <h3>{name}</h3>
                      <p className="team-card-handle">@{member}</p>
                      <p className="team-card-bio">{about}</p>
                    </div>
                    <div className="team-card-action">
                      <span>View Profile →</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Contribute Section */}
      <section className="contribute-section">
        <div className="section-container">
          <h2 className="section-title">Contribute & Learn</h2>
          <p className="section-subtitle">
            This is an open-source project welcoming contributions from developers of all levels
          </p>
          <div className="contribute-content">
            <div className="contribute-left">
              <h3>How Can You Help?</h3>
              <ul className="contribute-list">
                <li>
                  <strong>Fix Bugs</strong>
                  <p>Found an issue? Submit a PR to fix it and help improve the project.</p>
                </li>
                <li>
                  <strong>Add Features</strong>
                  <p>Have an idea? Discuss it in issues and submit a PR with your implementation.</p>
                </li>
                <li>
                  <strong>Improve Documentation</strong>
                  <p>Help beginners by improving README, comments, and contribution guides.</p>
                </li>
                <li>
                  <strong>Optimize Performance</strong>
                  <p>Identify and implement performance improvements.</p>
                </li>
              </ul>
            </div>
            <div className="contribute-right">
              <div className="contribute-box">
                <h3>Getting Started</h3>
                <ol className="contribute-steps">
                  <li>Fork the repository</li>
                  <li>Clone to your local machine</li>
                  <li>Install dependencies: <code>npm install</code></li>
                  <li>Start development: <code>npm run dev</code></li>
                  <li>Create a branch for your changes</li>
                  <li>Make your contribution</li>
                  <li>Submit a pull request</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="contribute-actions">
            <button className="btn btn-primary" onClick={handleViewContributing}>
              Read Contributing Guide
            </button>
            <button className="btn btn-secondary" onClick={handleViewGitHub}>
              Browse Issues
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Ready to Learn?</h2>
          <p>Explore the code, build something amazing, and grow as a developer.</p>
          <div className="cta-actions">
            <button className="btn btn-primary btn-large" onClick={handleStartLearning}>
              Start Exploring Now
            </button>
            <button className="btn btn-secondary btn-large" onClick={handleViewGitHub}>
              Star on GitHub
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
