import { expertiseDomains, expertiseGroups } from "../../data/expertise";
import TechIcon from "../../components/ui/TechIcon";

export default function Expertise() {
  return (
    <section id="expertise" className="content-section expertise-section">
      <div className="section-shell">
        <div className="expertise-heading">
          <div className="section-intro">
            <span className="section-eyebrow">
              <span className="eyebrow-line" />
              TECHNICAL EXPERTISE
            </span>

            <h2 className="section-title">
              The tools behind
              <br />
              <span className="gradient-text">the architecture.</span>
            </h2>

            <p className="section-description">
              A broad engineering toolkit spanning backend systems, AI
              applications, cloud infrastructure, cybersecurity, and
              connected hardware.
            </p>
          </div>

          <div className="expertise-stat">
            <span className="expertise-stat-number">08</span>
            <span className="expertise-stat-label">TECH STACK GROUPS</span>
          </div>
        </div>

        <div className="expertise-groups">
          {expertiseGroups.map((group, index) => (
            <article className="expertise-group" key={group.title}>
              <div className="expertise-group-heading">
                <div className="expertise-group-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>

                <span className="expertise-group-count">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="expertise-skills">
                {group.skills.map((skill) => (
                  <div
                    className="expertise-skill"
                    key={`${group.title}-${skill.name}`}
                    title={skill.name}
                  >
                    <TechIcon name={skill.name} logo={skill.logo} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="expertise-domains">
          <span className="expertise-domains-label">CORE DOMAINS</span>

          <div className="expertise-domain-list">
            {expertiseDomains.map((domain) => (
              <span key={domain}>{domain}</span>
            ))}
          </div>
        </div>

        <div className="expertise-footer">
          <span className="expertise-footer-line" />
          <p>
            <span className="expertise-footer-dot" />
            ENGINEERING ACROSS SOFTWARE, INTELLIGENCE & HARDWARE
          </p>
          <span className="expertise-footer-line" />
        </div>
      </div>
    </section>
  );
}