import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="content-section projects-section">
      <div className="section-shell">
        <div className="projects-heading-row">
          <div className="section-intro">
            <span className="section-eyebrow">
              <span className="eyebrow-line" />
              SELECTED WORK
            </span>

            <h2 className="section-title">
              Engineering in
              <br />
              <span className="gradient-text">the real world.</span>
            </h2>

            <p className="section-description">
              A selection of systems, products, and experiments across AI,
              backend engineering, cybersecurity, IoT, and hardware.
            </p>
          </div>

          <div className="projects-count">
            <span>06</span>
            <small>FEATURED PROJECTS</small>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-card-featured" : ""
              }`}
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>

                <h3 className="project-name">{project.name}</h3>

                <p className="project-description">{project.description}</p>

                <ul className="project-details">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card-bottom">
                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <span className="project-card-accent" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-note">
          <span className="projects-note-indicator" />
          <p>
            A curated selection of professional and product work. Some
            projects are proprietary or internal and therefore do not have
            public source-code links.
          </p>
        </div>
      </div>
    </section>
  );
}