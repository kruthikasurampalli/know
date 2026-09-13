import "./Profile.css";

export default function Profile({ user }) {
  if (!user) return null;

  const firstName = user.FirstName || user.FullName?.split(' ')[0] || '';
  const lastName = user.LastName || '';
  const fullName = user.FullName || `${firstName} ${lastName}`.trim();
  const title = user.Title || '';
  const about = user.About || '';
  const profilePicture = user.ProfilePicture || '';
  const email = user.Email || '';
  const location = user.Location || user.City || '';

  return (
    <section className="profile-section">
      <div className="profile-container">
        {profilePicture && (
          <img 
            src={profilePicture} 
            alt={fullName}
            className="profile-picture"
          />
        )}
        <div className="profile-info">
          <h1>{fullName}</h1>
          {title && <p className="profile-title">{title}</p>}
          {location && <p className="profile-location">📍 {location}</p>}
          {email && (
            <a href={`mailto:${email}`} className="profile-email">
              📧 {email}
            </a>
          )}
          {about && <p className="profile-about">{about}</p>}
        </div>
      </div>
    </section>
  );
}
