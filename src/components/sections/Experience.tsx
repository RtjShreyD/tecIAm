import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="content-section experience-section">
      <div className="section-shell">
        <div className="section-intro">
          <span className="section-eyebrow">
            <span className="eyebrow-line" />
            THE JOURNEY
          </span>

          <h2 className="section-title">
            Experience that
            <br />
            <span className="gradient-text">builds systems.</span>
          </h2>

          <p className="section-description">
            From embedded devices and backend platforms to cybersecurity
            research and Agentic AI — a journey across layers of engineering.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-marker">
                <span className="experience-dot" />
                {index !== experience.length - 1 && (
                  <span className="experience-line" />
                )}
              </div>

              <div className="experience-card">
                <div className="experience-card-top">
                  <div>
                    <div className="experience-period">
                      {item.period}
                      {item.current && (
                        <span className="current-label">
                          <span />
                          CURRENT
                        </span>
                      )}
                    </div>

                    <h3 className="experience-company">{item.company}</h3>
                    <p className="experience-role">{item.role}</p>
                  </div>

                  <span className="experience-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="experience-summary">{item.summary}</p>

                <div className="experience-projects">
                  <span className="detail-label">PROJECTS</span>
                  <div className="experience-project-list">
                    {item.projects.map((project) => (
                      <span className="experience-project-tag" key={project}>
                        {project}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="experience-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="experience-tech">
                  {item.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-footer">
          <span className="footer-line" />
          <p>
            <strong>2019 — Present</strong>
            <span>7+ years of building, researching, and shipping software.</span>
          </p>
          <span className="footer-line" />
        </div>
      </div>
    </section>
  );
}