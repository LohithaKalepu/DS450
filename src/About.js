import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    const skills = [
      "React",
      "JavaScript",
      "CSS3",
      "HTML5",
      "Node.js",
      "Git"
    ];
    return (
      <div className="about-page">
        <div className="about-card">
          <h2 className="about-title">About Me</h2>
          <div className="about-title-underline" />

          <div className="about-content">
            {/* Photo Placeholder */}
            <div className="about-photo">
              <div className="about-photo-inner">Your Photo</div>
            </div>

            {/* Text + Skills */}
            <div className="about-info">
              <p className="about-intro">
                Hello! I’m a passionate developer who enjoys building clean, modern
                interfaces and bringing ideas to life with code. I like working with
                web technologies and continuously learning new skills.
              </p>

              <p className="about-intro">
                I’m interested in creating projects that balance functionality and
                design—focusing on performance, accessibility, and a great user
                experience.
              </p>

              <h3 className="about-subtitle">Skills &amp; Technologies</h3>

              <div className="about-skills">
                {skills.map((skill) => (
                  <span className="about-skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;