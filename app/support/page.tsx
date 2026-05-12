import type { Metadata } from "next";

import { PageHero } from "../../components/PageHero";
import { SiteShell } from "../../components/SiteShell";
import { faqItems, legal, supportChecklist, wallpapers } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "支持",
  description: "WildAes 与 Pyria Wallpaper 的支持、常见问题和联系方式。",
};

export default function SupportPage() {
  return (
    <SiteShell activeHref="/support">
      <PageHero
        actions={[
          {
            href: `mailto:${legal.supportEmail}?subject=${encodeURIComponent("WildAes 技术支持")}`,
            label: "发送邮件",
          },
          { href: "/privacy", label: "隐私政策", variant: "secondary" },
        ]}
        badges={[legal.supportEmail, "包含常见问题"]}
        eyebrow="技术支持"
        image={wallpapers[3]}
        lead={
          <>
            如果遇到购买、壁纸显示或应用反馈相关问题，请通过
            <strong> {legal.supportEmail}</strong> 联系我们。你提供的上下文越具体，我们越容易复现和处理。
          </>
        }
        pills={["恢复购买帮助", "账单跟进", "隐私请求"]}
        title="WildAes 支持"
      />

      <section className="section-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">联系前准备</p>
            <h2 className="section-title">帮助我们更快复现问题</h2>
          </div>
          <p>
            一封简短但具体的支持邮件，能帮助我们快速确认应用流程、购买状态和相关壁纸素材。
          </p>
        </div>
        <div className="contact-grid">
          <article className="contact-panel">
            <h2>建议包含的信息</h2>
            <ul>
              {supportChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="contact-panel">
            <h2>直接联系</h2>
            <p>
              <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>
            </p>
            <p>该邮箱用于产品问题、账单跟进和隐私相关请求。</p>
          </article>
        </div>
      </section>

      <section className="faq-panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">常见问题</p>
            <h2 className="section-title">快速了解常见支持问题</h2>
          </div>
          <p>这些回答与官网说明、应用流程和 App Store 购买模式保持一致。</p>
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
