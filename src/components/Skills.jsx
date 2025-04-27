import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Business",
      skills: ["Microsoft Excel", "Microsoft PowerPoint", "Microsoft Word", "Excel Power Query", "Power BI", "SAP SD"]
    },
    {
      category: "Marketing",
      skills: ["360° Marketing Strategies", "GTM", "Canva", "Adobe Photoshop"]
    },
    {
      category: "Tech",
      skills: ["SQL", "Python", "Data Analysis", "Data Visualization", "Kubernetes", "Linux", "Network Fundamentals", "Open source cloud technologies"]
    }
  ];

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillCategories.map((cat, index) => (
          <div className="skill-category" key={index}>
            <h3>{cat.category}</h3>
            <div className="skill-badges">
              {cat.skills.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
