import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      year: "2020-2024",
      gpa: "3.8/4.0"
    },
    {
      degree: "High School Diploma",
      school: "High School Name",
      year: "2016-2020",
      gpa: "3.9/4.0"
    }
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Company Inc.",
      period: "Summer 2023",
      responsibilities: [
        "Developed responsive web applications using React and CSS",
        "Collaborated with design team to implement user interfaces",
        "Optimized application performance and accessibility"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "University CS Department",
      period: "2022-2023",
      responsibilities: [
        "Assisted students with programming assignments and projects",
        "Conducted lab sessions for introductory programming courses",
        "Graded assignments and provided constructive feedback"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Bootstrap", "jQuery"],
    "Tools & Technologies": ["Git", "VS Code", "MongoDB", "PostgreSQL", "Figma", "Adobe XD"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;