import type { ContentSection } from "../lib/site-content";

export function LegalContent({ sections }: { sections: readonly ContentSection[] }) {
  return (
    <section className="legal-panel">
      {sections.map((section) => (
        <article className="legal-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul>
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </section>
  );
}
