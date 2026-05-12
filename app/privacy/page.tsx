import type { Metadata } from "next";

import { LegalContent } from "../../components/LegalContent";
import { PageHero } from "../../components/PageHero";
import { SiteShell } from "../../components/SiteShell";
import { legal, privacySections, wallpapers } from "../../lib/site-content";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "WildAes 与 Pyria Wallpaper 的隐私政策。",
};

export default function PrivacyPage() {
  return (
    <SiteShell activeHref="/privacy">
      <PageHero
        badges={[legal.lastUpdatedLabel, "适配 Apple 审核"]}
        eyebrow="隐私政策"
        image={wallpapers[1]}
        lead={
          <>
            本政策说明 WildAes 可能通过官网和应用收集哪些信息、为什么使用这些信息，以及如何联系我们处理访问或删除请求。
          </>
        }
        pills={["官网", "macOS 应用", "支持邮箱", "Apple 服务"]}
        title="隐私政策"
      />

      <LegalContent sections={privacySections} />
    </SiteShell>
  );
}
