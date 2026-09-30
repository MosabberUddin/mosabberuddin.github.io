import type { ReactNode } from "react";

import { Carousel } from "@/components/portfolio/carousel";
import { CountUp } from "@/components/portfolio/count-up";
import {
  certifications,
  contact,
  experience,
  experiencePhotos,
  experienceProjects,
  projects,
  skillGroups,
  stats,
  type Project,
} from "@/portfolio-data";


/** Render **bold** markers inside copy as <b> segments. */
function rich(text: string): ReactNode[] {
  return text.split("**").map((part, index) =>
    index % 2 === 1 ? <b key={index}>{part}</b> : <span key={index}>{part}</span>,
  );
}

function slug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const GLYPHS = [
  "M12 21s-7-4.4-9.5-8.6C.7 9.2 2.4 5 6.3 5c2.1 0 3.4 1.1 4.2 2.3h1c.8-1.2 2.1-2.3 4.2-2.3 3.9 0 5.6 4.2 3.8 7.4C19 16.6 12 21 12 21z",
  "M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  "M8 5v14l11-7z",
  "M9 3 7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10z",
  "M2 21h4V9H2v12zm20-11a2 2 0 0 0-2-2h-6.3l1-4.6v-.3a1.5 1.5 0 0 0-.4-1L13.2 1 6.6 7.6A2 2 0 0 0 6 9v10a2 2 0 0 0 2 2h9a2 2 0 0 0 1.8-1.2l3-7.1c.1-.2.2-.5.2-.7v-2z",
  "M18 8a3 3 0 1 0-2.9-2.2L8.8 9.4a3 3 0 1 0 0 5.2l6.3 3.6A3 3 0 1 0 16 16.5l-6.2-3.6a3 3 0 0 0 0-1.8L16 7.5A3 3 0 0 0 18 8z",
  "M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm6-6v-5a6 6 0 0 0-5-5.9V4a1 1 0 0 0-2 0v1.1A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z",
];

function SocialIcons() {
  return (
    <div className="pf-social-float" aria-hidden="true">
      {GLYPHS.map((glyph, k) => (
        <svg key={glyph} viewBox="0 0 24 24" className={`pf-sg pf-sg-${k}`}>
          <path d={glyph} />
        </svg>
      ))}
    </div>
  );
}

const STAR: ["s" | "t" | "a" | "r", string, string][] = [
  ["s", "S", "Situation"],
  ["t", "T", "Task"],
  ["a", "A", "Action"],
  ["r", "R", "Result"],
];

function ProjectCard({ project }: { project: Project }) {
  const hasMedia = Boolean(project.image || project.photoSlot);
  return (
    <article
      className={`pf-card${hasMedia ? " pf-card-has-media" : ""}`}
      id={`proj-${slug(project.name)}`}
    >
      {project.image ? (
        <div
          className="pf-card-media"
          role="img"
          aria-label={`${project.name} preview`}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          {project.social ? <SocialIcons /> : null}
        </div>
      ) : project.photoSlot ? (
        <div className="pf-card-media pf-card-media-ph">
          <span className="pf-ph-label">Photo coming soon</span>
          <span className="pf-ph-caption">{project.photoSlot}</span>
        </div>
      ) : null}
      <div className="pf-card-body">
        <div className="pf-proj-head">
          <h4 className="pf-proj-name">{project.name}</h4>
          <span className={`pf-tag${project.tag !== "Solo build" ? " pf-tag-plain" : ""}`}>
            {project.tag}
          </span>
        </div>
        <p className="pf-proj-meta">{project.meta}</p>
        <p className="pf-oneliner">{project.oneliner}</p>
        <div className="pf-star">
          {STAR.map(([key, letter, word]) => (
            <div className="pf-star-block" key={letter}>
              <div className="pf-star-k">
                <span className="pf-star-letter">{letter}</span>
                <span className="pf-star-word">{word}</span>
              </div>
              <p>{key === "r" ? rich(project.r) : project[key]}</p>
            </div>
          ))}
        </div>
        {project.href ? (
          <a className="pf-visit" href={project.href} target="_blank" rel="noopener noreferrer">
            Visit site
            <span className="pf-arrow">&rarr;</span>
          </a>
        ) : project.tag === "Program led" ? (
          <span className="pf-conf">Enterprise project, confidential, no public link</span>
        ) : null}
      </div>
    </article>
  );
}

export default function Index() {
  const year = new Date().getFullYear();

  return (
    <main>
      {/* Sticky nav */}
      <header className="pf-nav">
        <div className="pf-nav-inner">
          <a className="pf-brand" href="#top">
            Mosabber Ahmed Bapon
          </a>
          <nav className="pf-nav-links" aria-label="Sections">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className="pf-nav-cta"
            href="/Mosabber-Ahmed-Bapon-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pf-hero" id="top">
        <div>
          <h1 className="pf-hero-name">
            Mosabber Ahmed
            <br />
            Bapon
          </h1>
          <p className="pf-hero-sub">
            Technical Program &amp; SaaS Delivery Manager | AI Product Builder
          </p>
          <p className="pf-hero-lead">
            15+ years leading enterprise SaaS delivery across fintech and health-tech, and
            shipping AI-built digital products solo.
          </p>
          <div className="pf-hero-ctas">
            <a className="btn-ink" href="#projects">
              View projects
              <span className="btn-arrow">&rarr;</span>
            </a>
            <a className="btn-ghost" href="#contact">
              Get in touch
              <span className="btn-arrow">&rarr;</span>
            </a>
          </div>
          <div className="pf-stats">
            {stats.map((stat) => (
              <div className="pf-stat" key={stat.label}>
                <CountUp value={stat.value} suffix={stat.suffix} />
                <span className="pf-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <figure className="pf-hero-art-frame">
          <img
            className="pf-hero-art"
            src="/assets/hero-diorama.jpg"
            alt="The delivery skyline: dark glass towers at night, thin lines of light connecting their windows"
            width={1600}
            height={1067}
          />
          <img
            className="pf-headshot"
            src="/assets/portrait.jpg"
            alt="Mosabber Ahmed Bapon"
            width={960}
            height={1200}
          />
        </figure>
      </section>

      {/* About */}
      <section className="pf-section anchor" id="about">
        <h2 className="pf-h2">What I Do</h2>
        <div className="pf-h2-bar" />
        <div className="pf-prose">
          <p>
            I own complex, multi-stakeholder SaaS and technology programs end-to-end: from
            executive stakeholder alignment through engineering delivery to go-live, across
            fintech, health-tech, and enterprise software. Over 15+ years I've directed release
            delivery for platforms serving millions of users, led QA and analytics teams of 40+,
            and translated technical complexity into clear, outcome-focused executive
            communication.
          </p>
          <p>
            More recently, I've started building my own products. Using AI-assisted ('vibe
            coding') development tools, I've independently designed, built, and shipped three
            live digital products: from a bilingual driver's-guide ebook platform to a
            multi-language social media automation SaaS, all without a traditional engineering
            team. I bring the same delivery discipline I use running enterprise programs to
            building products myself.
          </p>
        </div>
        <div className="pf-rules">
          <div className="pf-rule">
            <strong>Delivery Owner</strong>
            <span>I run programs end-to-end, not just tickets.</span>
          </div>
          <div className="pf-rule">
            <strong>Executive Communicator</strong>
            <span>I translate technical risk into business language for leadership.</span>
          </div>
          <div className="pf-rule">
            <strong>Builder</strong>
            <span>I now ship real products myself using AI-assisted development.</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="pf-section pf-section-tight anchor" id="skills">
        <h2 className="pf-h2">Skills</h2>
        <div className="pf-h2-bar" />
        <div className="pf-skills-grid">
          {skillGroups.map((group) => (
            <div className="pf-skills-col" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span className="pf-chip" key={item}>
                    {rich(item)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="pf-section anchor" id="experience">
        <h2 className="pf-h2">Companies I've Represented</h2>
        <div className="pf-h2-bar" />
        <div className="pf-timeline">
          {experience.map((entry) => {
            const chips = experienceProjects[entry.company];
            return (
              <article className="pf-tl-item pf-tl-rich" key={entry.company}>
                <div className="pf-tl-text">
                  <h3 className="pf-tl-company">{entry.company}</h3>
                  {entry.roles.length > 1 ? (
                    <div className="pf-promo">
                      <span className="pf-promo-badge">Promoted {entry.roles.length - 1}x</span>
                      <ol className="pf-promo-path">
                        {[...entry.roles].reverse().map((role, k, all) => (
                          <li key={role}>
                            <span className="pf-promo-role">{role}</span>
                            {k < all.length - 1 ? (
                              <span className="pf-promo-arrow" aria-hidden="true">&rarr;</span>
                            ) : null}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ) : (
                    <p className="pf-tl-role">{entry.roles[0]}</p>
                  )}
                  <p className="pf-tl-dates">{entry.dates}</p>
                  <p className="pf-tl-summary">{rich(entry.summary)}</p>
                  {chips ? (
                    <div className="pf-tl-projects">
                      <span className="pf-tl-projects-label">{chips.length} concurrent projects</span>
                      <div className="pf-tl-chips">
                        {chips.map((chip) => (
                          <a className="pf-proj-chip" href={chip.href} key={chip.label}>
                            {chip.label}
                            <span aria-hidden="true"> &darr;</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                <Carousel
                  slides={experiencePhotos[entry.company] ?? []}
                  label={`${entry.company} photos`}
                />
              </article>
            );
          })}
        </div>
      </section>

      {/* Projects */}
      <section className="pf-section anchor" id="projects">
        <h2 className="pf-h2">Projects I delivered</h2>
        <div className="pf-h2-bar" />
        <p className="pf-sub" style={{ marginBottom: 44 }}>
          Products I've built myself, enterprise programs I've led, and the hands-on QA and engineering work that built my foundation.
        </p>
        {projects.map((group, groupIndex) => (
          <div key={group.label}>
            <div className="pf-group-label">
              <h3>{group.label}</h3>
              <p>{group.note}</p>
            </div>
            <div className={`pf-proj-grid${groupIndex === projects.length - 1 ? " pf-proj-older" : ""}`}>
              {group.items.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="pf-section pf-section-tight anchor" id="certifications">
        <h2 className="pf-h2">Certifications</h2>
        <div className="pf-h2-bar" />
        <div className="pf-cert-row">
          {certifications.map((cert) => (
            <div className="pf-cert" key={cert.name}>
              {cert.mark ? <span className="pf-cert-mark">{cert.mark}</span> : null}
              <b>{cert.name}</b>
              {cert.note ? <span>{cert.note}</span> : null}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="pf-section anchor" id="contact">
        <div className="pf-contact">
          <div>
            <h2 className="pf-h2">{contact.headline}</h2>
            <div className="pf-h2-bar" />
            <p className="pf-contact-line">{contact.line}</p>
          </div>
          <div>
            <div className="pf-crow">
              <span className="pf-crow-label">Email</span>
              <a href={contact.email.href}>{contact.email.label}</a>
            </div>
            <div className="pf-crow">
              <span className="pf-crow-label">WhatsApp</span>
              <a href={contact.phone.href} target="_blank" rel="noopener noreferrer">
                {contact.phone.label}
              </a>
            </div>
            <div className="pf-crow">
              <span className="pf-crow-label">LinkedIn</span>
              <a href={contact.linkedin.href} target="_blank" rel="noopener noreferrer">
                mosabber-ahmed
              </a>
            </div>
            <div className="pf-crow">
              <span className="pf-crow-label">GitHub</span>
              <a href={contact.github.href} target="_blank" rel="noopener noreferrer">
                MosabberUddin
              </a>
            </div>
            <div className="pf-crow">
              <span className="pf-crow-label">Location</span>
              <span>{contact.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pf-footer">
        <p>&copy; {year} Mosabber Ahmed Bapon.</p>
        <nav className="pf-footer-links" aria-label="Contact links">
          <a href={contact.email.href}>Email</a>
          <a href={contact.phone.href} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={contact.linkedin.href} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={contact.github.href} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </footer>
    </main>
  );
}