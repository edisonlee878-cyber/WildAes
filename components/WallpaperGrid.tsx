import type { WallpaperItem } from "../lib/site-content";
import { withSiteBasePath } from "../lib/site-paths";

export function WallpaperGrid({
  items,
  variant = "featured",
}: {
  items: WallpaperItem[];
  variant?: "featured" | "grid";
}) {
  if (variant === "grid") {
    return (
      <div className="wallpaper-grid wallpaper-grid-four">
        {items.map((item) => (
          <figure className="wallpaper-card" key={item.src}>
            <img
              alt={item.alt}
              className="wallpaper-image"
              decoding="async"
              height={item.height}
              loading="lazy"
              src={withSiteBasePath(item.src)}
              width={item.width}
            />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  const [featured, ...rest] = items;

  return (
    <div className="wallpaper-grid wallpaper-grid-featured">
      <figure className="wallpaper-card wallpaper-card-featured">
        <img
          alt={featured.alt}
          className="wallpaper-image"
          decoding="async"
          height={featured.height}
          loading="eager"
          src={withSiteBasePath(featured.src)}
          width={featured.width}
        />
        <figcaption>
          <strong>{featured.title}</strong>
          <span>{featured.label}</span>
        </figcaption>
      </figure>
      <div className="wallpaper-stack">
        {rest.map((item) => (
          <figure className="wallpaper-card wallpaper-card-compact" key={item.src}>
            <img
              alt={item.alt}
              className="wallpaper-image"
              decoding="async"
              height={item.height}
              loading="lazy"
              src={withSiteBasePath(item.src)}
              width={item.width}
            />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
