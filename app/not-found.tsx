import { SiteShell } from "../components/SiteShell";
import { withSiteBasePath } from "../lib/site-paths";

export default function NotFound() {
  return (
    <SiteShell activeHref="/">
      <section className="section-panel">
        <p className="eyebrow">页面未找到</p>
        <h1 className="section-title">这个页面不存在。</h1>
        <p className="section-lead">你可以使用导航返回 WildAes 首页。</p>
        <div className="cta-row">
          <a className="button primary" href={withSiteBasePath("/")}>
            返回首页
          </a>
        </div>
      </section>
    </SiteShell>
  );
}
