import type { Metadata } from "next";

import { PageHero } from "../components/PageHero";
import { SiteShell } from "../components/SiteShell";
import { WallpaperGrid } from "../components/WallpaperGrid";
import {
  aboutValues,
  launchSignals,
  legal,
  wallpapers,
} from "../lib/site-content";

export const metadata: Metadata = {
  title: "WildAes 官网",
  description:
    "WildAes 官网面向 Apple 审核、用户支持和首款产品 Pyria Wallpaper，当前已完成中文化。",
};

export default function HomePage() {
  return (
    <SiteShell activeHref="/">
      <PageHero
        actions={[
          { href: "/pyria-wallpaper", label: "查看 Pyria Wallpaper" },
          { href: "/support", label: "联系支持", variant: "secondary" },
        ]}
        badges={[legal.reviewStatus, legal.launchStatus]}
        eyebrow="WildAes 官方网站"
        image={wallpapers[0]}
        lead={
          <>
            WildAes 围绕视觉质量、版权清晰和简洁支持来打造 Mac 软件。
            <strong> {legal.productName}</strong> 是我们的首款产品，目前正在 Apple 审核中。
          </>
        }
        pills={["仅限 Mac App Store", "仅限 App Store 内购", `支持：${legal.supportEmail}`]}
        title="WildAes 官网"
      />

      <section className="section-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">品牌价值</p>
            <h2 className="section-title">产品目录背后的工作室</h2>
          </div>
          <p>
            WildAes 不是一个带结账按钮的商城，而是一个小型产品工作室。我们把官网、应用本体、合规页面和支持路径都收拢到同一个入口。
          </p>
        </div>
        <div className="feature-grid">
          {aboutValues.map((value) => (
            <article className="feature-card" key={value.title}>
              <strong>{value.title}</strong>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel section-band">
        <div className="section-head">
          <div>
            <p className="eyebrow">发布路径</p>
            <h2 className="section-title">Apple 和用户需要的公开页面</h2>
          </div>
          <p>
            现在官网已经覆盖了发布所需的基础信息：产品介绍、支持、隐私政策和使用条款都能从稳定导航中直接找到。
          </p>
        </div>
        <div className="trust-grid">
          {launchSignals.map((signal) => (
            <article className="trust-card" key={signal.title}>
              <strong>{signal.title}</strong>
              <p>{signal.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">精选壁纸</p>
            <h2 className="section-title">先看一眼视觉方向</h2>
          </div>
          <p>
            官网直接使用真实壁纸素材，让 Apple 审核和用户看到的内容与产品本身保持一致，而不是临时拼出来的营销示意图。
          </p>
        </div>
        <WallpaperGrid items={wallpapers} variant="featured" />
      </section>
    </SiteShell>
  );
}
