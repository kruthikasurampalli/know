import "./Certifications.css";

export default function Certifications({ certifications, awards }) {
  return (
    <>
      {certifications && certifications.length > 0 && (
        <section className="certifications-section">
          <h2>🏆 Certifications</h2>
          <div className="certifications-container">
            {certifications.map((cert, idx) => (
              <div key={idx} className="certification-card">
                <h3>{cert.Name}</h3>
                <p className="issuing-org">{cert.IssuingOrganization}</p>
                <div className="cert-dates">
                  <span>Issued: {cert.IssueDate}</span>
                  {cert.ExpirationDate && <span>Expires: {cert.ExpirationDate}</span>}
                </div>
                {cert.CredentialID && (
                  <p className="credential-id">ID: {cert.CredentialID}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {awards && awards.length > 0 && (
        <section className="awards-section">
          <h2>🎖️ Awards</h2>
          <div className="awards-container">
            {awards.map((award, idx) => (
              <div key={idx} className="award-card">
                <h3>{award.Name}</h3>
                <p className="award-org">{award.IssuingOrganization}</p>
                <p className="award-date">Issued: {award.IssueDate}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
