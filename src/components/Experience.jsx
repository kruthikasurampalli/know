import "./Experience.css";

export default function Experience({ experience }) {
  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <section className="experience-section">
      <h2>💼 Experience</h2>
      <div className="experience-timeline">
        {experience.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="experience-timeline-dot"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.Role}</h3>
                <span className="experience-period">
                  {exp.StartYear || exp.StartDate} - {exp.EndYear || exp.EndDate || 'Present'}
                </span>
              </div>
              <p className="company">{exp.Company}</p>
              <p className="location">{exp.Location}</p>
              <p className="description">{exp.Description}</p>
              {exp.Technologies && (
                <div className="exp-technologies">
                  {exp.Technologies.map((tech, tidx) => (
                    <span key={tidx} className="exp-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
