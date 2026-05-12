import type { ReactNode } from "react";

import type { WallpaperItem } from "../lib/site-content";
import { withSiteBasePath } from "../lib/site-paths";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function PageHero({
  actions = [],
  badges = [],
  eyebrow,
  image,
  lead,
  pills = [],
  title,
}: {
  actions?: readonly HeroAction[];
  badges?: readonly string[];
  eyebrow: string;
  image: WallpaperItem;
  lead: ReactNode;
  pills?: readonly string[];
  title: ReactNode;
}) {
  return (
    <section className="page-hero">
      <img
        alt={image.alt}
        className="page-hero-image"
        decoding="async"
        height={image.height}
        loading="eager"
        src={withSiteBasePath(image.src)}
        width={image.width}
      />
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="page-hero-content">
        <p className="eyebrow hero-eyebrow">{eyebrow}</p>
        {badges.length > 0 ? (
          <div className="status-row">
            {badges.map((badge, index) => (
              <span className={index === 0 ? "status-pill" : "soft-pill"} key={badge}>
                {badge}
              </span>
            ))}
          </div>
        ) : null}
        <h1>{title}</h1>
        <p className="hero-lead">{lead}</p>
        {actions.length > 0 ? (
          <div className="cta-row">
            {actions.map((action) => (
              <a
                className={`button ${action.variant ?? "primary"}`}
                href={withSiteBasePath(action.href)}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : null}
        {pills.length > 0 ? (
          <div className="meta-row">
            {pills.map((pill) => (
              <span className="tiny-pill" key={pill}>
                {pill}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
