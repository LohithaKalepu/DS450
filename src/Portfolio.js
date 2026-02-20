import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "E-commerce Website",
          description:
            "A full-stack e-commerce platform with product browsing, cart, and checkout flow.",
          technologies: ["React", "Node.js", "MongoDB", "CSS3"],
          liveDemo: "https://example.com",
          viewCode: "https://github.com/your-username/ecommerce-project"
        },
        {
          title: "Task Management App",
          description:
            "A collaborative task manager with team boards, real-time updates, and user roles.",
          technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
          liveDemo: "https://example.com",
          viewCode: "https://github.com/your-username/task-manager"
        },
        {
          title: "Data Visualization Dashboard",
          description:
            "An interactive dashboard that explores trends using charts and filters.",
          technologies: ["React", "D3.js", "Tableau", "SVG"],
          liveDemo: "https://example.com",
          viewCode: "https://github.com/your-username/dataviz-dashboard"
        }
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-page">
        <div className="portfolio-card">
          <h2 className="portfolio-title">My Portfolio</h2>
          <div className="portfolio-title-underline" />

          <div className="project-grid">
            {this.state.projects.map((project, index) => (
              <div className="project-card" key={index}>
                {/* Image Placeholder */}
                <div className="project-image">
                  <span className="project-image-text">Project Image</span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="tech-list">
                    {project.technologies.map((tech, i) => (
                      <span className="tech-pill" key={i}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a
                      className="btn btn-primary"
                      href={project.viewCode}
                      target="_blank"
                      rel="noreferrer"
                    >
                    View More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;