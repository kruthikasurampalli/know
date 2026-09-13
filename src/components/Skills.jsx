import "./Skills.css";

export default function Skills({ skills }) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section className="skills-section">
      <h2>⚡ Skills</h2>
      <div className="skills-container">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="skill-category">
            <h3>{skillGroup.Category || skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.Skills ? (
                // Nested skills array
                skillGroup.Skills.map((skill, sidx) => (
                  <div key={sidx} className="skill-item">
                    <span className="skill-name">{skill.Name}</span>
                    {skill.Level && (
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.Level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                // Simple skills array
                skillGroup.skills && skillGroup.skills.map((skill, sidx) => (
                  <span key={sidx} className="skill-tag">
                    {skill}
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
