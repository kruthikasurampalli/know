import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Members.css";

function Members({ members, membersData }) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleMemberClick = (username) => {
    navigate(`/${username}`);
  };

  const handleBackHome = () => {
    navigate("/");
  };

  const getProfilePictureUrl = (member) => {
    if (membersData[member]?.ProfilePicture) {
      return membersData[member].ProfilePicture;
    }
    return `https://avatars.githubusercontent.com/${member}?size=400`;
  };

  const getDisplayName = (member) => {
    const data = membersData[member];
    if (data?.FirstName && data?.LastName) {
      return `${data.FirstName} ${data.LastName}`;
    }
    return member;
  };

  const getAboutText = (member) => {
    return membersData[member]?.About || "Portfolio Contributor";
  };

  return (
    <>
      {/* Header */}
      <header className="members-header">
        <div className="header-wrapper">
          <div className="header-container">
            <div className="header-logo">
            <span className="logo-text" onClick={handleBackHome} style={{ cursor: "pointer" }}>
              Portfolio
            </span>
          </div>
          <div className="header-actions">
            <button className="header-btn" onClick={handleBackHome} title="Back to Home">
              ← Back to Home
            </button>
            <button 
              className="header-btn"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            </div>
          </div>
        </div>
      </header>

      <main className="members-main">
        {/* Members Section */}
        <section className="members-section">
          <div className="members-header-content">
            <h1 className="members-title">👥 Members</h1>
            <p className="members-subtitle">
              Click on a member to view their portfolio and learn from their projects
            </p>
          </div>

          <div className="members-grid">
            {members && members.length > 0 ? (
              members.map((member) => (
                <div
                  key={member}
                  className="member-card"
                  onClick={() => handleMemberClick(member)}
                >
                  <div className="member-image-wrapper">
                    <img
                      src={getProfilePictureUrl(member)}
                      alt={getDisplayName(member)}
                      className="member-image"
                      onError={(e) => {
                        e.target.src = "https://avatars.githubusercontent.com/default?size=400";
                      }}
                    />
                  </div>
                  <div className="member-content">
                    <h3 className="member-name">{getDisplayName(member)}</h3>
                    <p className="member-handle">@{member}</p>
                    <p className="member-about">{getAboutText(member)}</p>
                    <span className="view-profile-link">View Profile →</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-members">
                <p>No members found</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Members;
