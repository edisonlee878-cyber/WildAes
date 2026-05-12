import type { Metadata } from "next";
import type { ReactNode } from "react";

import { legal } from "../lib/site-content";
import { withSiteBasePath } from "../lib/site-paths";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(legal.siteUrl),
  title: {
    default: "WildAes 官网",
    template: "%s | WildAes",
  },
  description:
    "WildAes 是 Pyria Wallpaper 背后的公司官网，面向 Apple 审核、支持与发布信息展示。",
  applicationName: "WildAes",
  authors: [{ name: legal.companyNameEn }],
  creator: legal.companyNameEn,
  keywords: [
    "WildAes",
    "Pyria Wallpaper",
    "macOS 壁纸",
    "桌面壁纸",
    "Mac App Store",
  ],
  publisher: legal.companyNameEn,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: withSiteBasePath("/icon.svg"),
    apple: withSiteBasePath("/apple-icon.svg"),
  },
  openGraph: {
    title: "WildAes 官网",
    description:
      "WildAes 是 Pyria Wallpaper 背后的公司官网，面向 Apple 审核、支持与发布信息展示。",
    type: "website",
    url: "/",
    locale: "zh_CN",
    siteName: "WildAes",
    images: [
      {
        url: "/wallpapers/wallpaper-astronaut.jpg",
        width: 3840,
        height: 2160,
        alt: "Pyria Wallpaper 壁纸目录预览",
      },
    ],
  },
  robots: {
    follow: true,
    index: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "WildAes 官网",
    description:
      "WildAes 是 Pyria Wallpaper 背后的公司官网，面向 Apple 审核、支持与发布信息展示。",
    images: ["/wallpapers/wallpaper-astronaut.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      email: legal.supportEmail,
      legalName: legal.companyNameEn,
      name: legal.brandName,
      url: legal.siteUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      applicationCategory: "MultimediaApplication",
      name: legal.productName,
      operatingSystem: "macOS",
      url: `${legal.siteUrl}/pyria-wallpaper/`,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        url: `${legal.siteUrl}/pyria-wallpaper/`,
      },
      publisher: {
        "@type": "Organization",
        name: legal.brandName,
      },
    },
  ];

  return (
    <html lang="zh-CN">
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
