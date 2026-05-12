import type { Metadata } from "next";

import { PageHero } from "../../components/PageHero";
import { SiteShell } from "../../components/SiteShell";
import { aboutValues, companyFacts, legal, wallpapers } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解 WildAes 以及首款产品 Pyria Wallpaper 背后的公司信息。",
};

export default function AboutPage() {
  return (
    <SiteShell activeHref="/about">
      <PageHero
        badges={["WildAes", legal.productName]}
        eyebrow="关于 WildAes"
        image={wallpapers[1]}
        lead={
          <>
            WildAes 是我们的品牌和产品工作室名称。Pyria Wallpaper 是首款产品，官网用于统一展示 Apple 审核、用户支持和隐私合规所需的信息。
          </>
        }
        pills={[legal.companyNameZh, legal.supportEmail]}
        title={legal.companyNameZh}
      />

      <section className="section-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">公司信息</p>
            <h2 className="section-title">一个目标清晰的小型产品工作室</h2>
          </div>
          <p>
            公司身份、产品名称和支持邮箱在官网中保持一致，方便 App Store 审核和用户获得同一个可信信息来源。
          </p>
        </div>
        <div className="fact-grid">
          {companyFacts.map((fact) => (
            <article className="fact-card" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">我们重视什么</p>
            <h2 className="section-title">做安静可靠的产品，而不是喧闹的品牌包装</h2>
          </div>
          <p>
            官网刻意保持克制，让产品介绍、合规页面和支持地址都清楚可见，减少误解。
          </p>
        </div>
        <div className="feature-grid">
          <article className="feature-card">
            <strong>视觉质量</strong>
            <p>每一张公开素材都应该像用户真的愿意长期放在桌面上的壁纸。</p>
          </article>
          <article className="feature-card">
            <strong>版权清晰</strong>
            <p>每张图片都需要与 App Store 审核和桌面使用场景兼容的授权说明。</p>
          </article>
          <article className="feature-card">
            <strong>支持简单</strong>
            <p>用户应该能快速知道去哪里求助、需要提供什么信息，以及应用如何销售。</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
