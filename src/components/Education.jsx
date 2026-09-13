import "./Education.css";

export default function Education({ education }) {
  if (!education || education.length === 0) {
    return null;
  }

  return (
    <section className="education-section">
      <h2>🎓 Education</h2>
      <div className="education-container">
        {education.map((edu, idx) => (
          <div key={idx} className="education-card">
            <div className="education-header">
              <h3>{edu.Degree || edu.title}</h3>
              <span className="year-range">
                {edu.StartYear} - {edu.EndYear}
              </span>
            </div>
            <p className="institute">{edu.Institute}</p>
            <p className="field">
              {Array.isArray(edu.FieldOfStudy) 
                ? edu.FieldOfStudy.join(", ") 
                : edu.FieldOfStudy}
            </p>
            <p className="location">{edu.Location}</p>
            {edu.Score && <p className="score">Score: {edu.Score}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
