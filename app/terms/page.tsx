import type { Metadata } from "next";

import { LegalContent } from "../../components/LegalContent";
import { PageHero } from "../../components/PageHero";
import { SiteShell } from "../../components/SiteShell";
import { legal, termsSections, wallpapers } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "使用条款 / EULA",
  description: "WildAes 与 Pyria Wallpaper 的服务条款和最终用户许可信息。",
};

export default function TermsPage() {
  return (
    <SiteShell activeHref="/terms">
      <PageHero
        badges={[legal.lastUpdatedLabel, "与 App Store 保持一致"]}
        eyebrow="使用条款 / EULA"
        image={wallpapers[2]}
        lead={
          <>
            官网不直接售卖数字内容。购买、续订和恢复购买均保留在 Apple 账单流程内，本条款说明应用内容的使用方式。
          </>
        }
        pills={["Mac App Store", "Apple 内购", "个人桌面使用", legal.supportEmail]}
        title="使用条款 / EULA"
      />

      <LegalContent sections={termsSections} />
    </SiteShell>
  );
}
