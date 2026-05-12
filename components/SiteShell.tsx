import type { ReactNode } from "react";

import { legal, navItems } from "../lib/site-content";
import { withSiteBasePath } from "../lib/site-paths";

export function SiteShell({
  activeHref,
  children,
}: {
  activeHref: string;
  children: ReactNode;
}) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">
        跳到正文
      </a>
      <header className="site-header">
        <a className="brand" href={withSiteBasePath("/")} aria-label={`返回 ${legal.brandName} 首页`}>
          <span className="brand-mark" aria-hidden="true">
            W
          </span>
          <span className="brand-copy">
            <strong>{legal.brandName}</strong>
            <span>{legal.productName} 官方网站</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="主导航">
          {navItems.map((item) => (
            <a
              aria-current={activeHref === item.href ? "page" : undefined}
              href={withSiteBasePath(item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="content" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="site-footer-grid">
          <div className="site-footer-block">
            <p className="eyebrow">WildAes</p>
            <p>
              {legal.companyNameEn}
              <br />
              {legal.companyNameZh}
            </p>
          </div>
          <div className="site-footer-block">
            <p className="eyebrow">联系方式</p>
            <p>
              <a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a>
              <br />
              <a href={withSiteBasePath("/support")}>支持 / 常见问题</a>
            </p>
          </div>
          <div className="site-footer-block">
            <p className="eyebrow">合规信息</p>
            <p>
              <a href={withSiteBasePath("/privacy")}>隐私政策</a>
              <br />
              <a href={withSiteBasePath("/terms")}>使用条款 / EULA</a>
            </p>
          </div>
        </div>
        <p className="site-footer-note">
          {legal.brandName} 保持官网信息简洁统一，让 Apple 审核、用户支持和产品介绍都指向同一个可信来源。
        </p>
      </footer>
    </div>
  );
}
