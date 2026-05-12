import type { Metadata } from "next";

import { PageHero } from "../../components/PageHero";
import { SiteShell } from "../../components/SiteShell";
import { WallpaperGrid } from "../../components/WallpaperGrid";
import { faqItems, legal, productFeatures, wallpapers } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "Pyria Wallpaper",
  description: "Pyria Wallpaper 是 WildAes 的首款 macOS 壁纸应用，当前正在为 Apple 审核和上线做准备。",
};

export default function PyriaWallpaperPage() {
  return (
    <SiteShell activeHref="/pyria-wallpaper">
      <PageHero
        actions={[
          { href: "/support", label: "支持 / 常见问题" },
          { href: "/privacy", label: "隐私政策", variant: "secondary" },
        ]}
        badges={[legal.reviewStatus, "Mac 优先"]}
        eyebrow={legal.productName}
        image={wallpapers[2]}
        lead={
          <>
            Pyria Wallpaper 是一款 macOS 壁纸应用，用于浏览精选壁纸、全屏预览、收藏允许保存的内容，并在不离开 App Store 购买体系的前提下设置桌面背景。
          </>
        }
        pills={["仅限 App Store 内购", "官网不提供直接结账", `支持：${legal.supportEmail}`]}
        title={legal.productName}
      />

      <section className="section-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">核心体验</p>
            <h2 className="section-title">应用应该把这些事情做好</h2>
          </div>
          <p>
            上线叙事保持简单：浏览、预览、恢复购买、设置桌面壁纸。官网跟随这个产品流程，而不是另造一套网页销售漏斗。
          </p>
        </div>
        <div className="feature-grid">
          {productFeatures.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <strong>{feature.title}</strong>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">壁纸图库</p>
            <h2 className="section-title">先展示几组目录中的视觉方向</h2>
          </div>
          <p>这些图片会在官网中展示，让 Apple 审核看到与应用一致的视觉语言。</p>
        </div>
        <WallpaperGrid items={wallpapers} variant="grid" />
      </section>

      <section className="faq-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">常见问题</p>
            <h2 className="section-title">用户和审核人员通常会关心的问题</h2>
          </div>
          <p>
            下面的回答与产品规则保持一致：官网不直接结账、应用内走 Apple 购买流程，并提供清晰的恢复购买路径。
          </p>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
