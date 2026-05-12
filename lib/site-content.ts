const siteUrl =
  process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://wildaes.com";

export const legal = {
  brandName: "WildAes",
  productName: "Pyria Wallpaper",
  supportEmail: "support@wildaes.com",
  companyNameZh: "湖南野兽美学信息科技有限公司",
  companyNameEn: "Hunan Wild Aesthetics Information Technology Co., Ltd.",
  siteUrl,
  reviewStatus: "审核中",
  launchStatus: "即将上线",
  lastUpdated: "2026-05-12",
  lastUpdatedLabel: "2026年5月12日",
};

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/pyria-wallpaper", label: "Pyria Wallpaper" },
  { href: "/support", label: "支持" },
  { href: "/privacy", label: "隐私政策" },
  { href: "/terms", label: "使用条款" },
] as const;

export type ContentSection = {
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
};

export const trustPoints = [
  {
    title: "仅通过 App Store",
    description: "数字购买保留在 Apple 的审核、付款和恢复购买流程内。",
  },
  {
    title: "内容授权清晰",
    description: "公开壁纸均来自自制或明确授权，确保可用于既定产品场景。",
  },
  {
    title: "支持路径明确",
    description: `用户可以通过 ${legal.supportEmail} 联系我们获得帮助。`,
  },
  {
    title: "隐私优先",
    description: "网站和应用避免广告追踪，也不在网页上直接售卖数字内容。",
  },
] as const;

export type WallpaperItem = {
  src: string;
  alt: string;
  title: string;
  label: string;
  width: number;
  height: number;
};

export const wallpapers: WallpaperItem[] = [
  {
    src: "/wallpapers/wallpaper-astronaut.jpg",
    alt: "深色背景中，宇航员被粉蓝色烟雾环绕的壁纸预览图",
    title: "霓虹漂移",
    label: "精选",
    width: 3840,
    height: 2160,
  },
  {
    src: "/wallpapers/wallpaper-moon.jpg",
    alt: "月光下的静谧风景与树影剪影壁纸",
    title: "月夜静境",
    label: "夜景系列",
    width: 1920,
    height: 1080,
  },
  {
    src: "/wallpapers/wallpaper-city.jpg",
    alt: "夜色中的霓虹城市天际线壁纸",
    title: "城市脉冲",
    label: "城市系列",
    width: 4000,
    height: 3000,
  },
  {
    src: "/wallpapers/wallpaper-space.jpg",
    alt: "包含行星与明亮能量轨迹的宇宙风格壁纸",
    title: "太阳弧光",
    label: "太空系列",
    width: 1920,
    height: 1080,
  },
];

export const productFeatures = [
  {
    title: "精选壁纸套组",
    description: "图库围绕视觉系列整理，而不是把图片简单堆成信息流。",
  },
  {
    title: "全屏预览",
    description: "用户可以在设置桌面背景前，先完整查看壁纸效果。",
  },
  {
    title: "Mac 优先体验",
    description: "应用围绕 macOS 桌面使用场景和 Apple 审核流程设计。",
  },
  {
    title: "App Store 内购",
    description: "高级权限保留在 Apple 的应用内购买体系中处理。",
  },
  {
    title: "收藏与发现",
    description: "精选、分类和收藏帮助用户更快找回适合自己的桌面风格。",
  },
  {
    title: "版权路径清晰",
    description: "公开目录只使用具备明确授权或可控来源的内容。",
  },
] as const;

export const launchSignals = [
  {
    title: "官网入口",
    description: `${legal.siteUrl} 是 WildAes 对外展示公司、产品和发布信息的官方网站。`,
  },
  {
    title: "支持入口",
    description: "稳定的支持页面说明联系方式、恢复购买和账单问题处理方式。",
  },
  {
    title: "隐私政策",
    description: "隐私政策覆盖官网、macOS 应用、Apple 服务和支持邮箱等场景。",
  },
  {
    title: "使用条款 / EULA",
    description: "条款说明 Mac App Store 分发方式，以及壁纸内容的个人使用范围。",
  },
] as const;

export const companyFacts = [
  { label: "公司英文名", value: legal.companyNameEn },
  { label: "中文名称", value: legal.companyNameZh },
  { label: "首款产品", value: legal.productName },
  { label: "支持邮箱", value: legal.supportEmail },
] as const;

export const supportChecklist = [
  "App 版本和 macOS 版本",
  "遇到问题时正在执行的操作",
  "实际发生的现象",
  "如方便，请附截图或录屏",
  "如涉及账单，请说明 Apple 购买凭证或交易背景",
] as const;

export const faqItems = [
  {
    question: "如何购买 Pyria Wallpaper？",
    answer:
      "数字购买会在 Mac 应用内通过 Apple 的应用内购买流程完成。官网只用于产品介绍、支持和合规信息展示，不提供网页直接购买。",
  },
  {
    question: "如何恢复购买？",
    answer:
      "打开应用后，在付费页面底部使用“恢复购买”操作。恢复完成后，应用会根据 Apple 返回的当前权益状态更新访问权限。",
  },
  {
    question: "这些壁纸可以用于商业用途吗？",
    answer:
      "默认不可以。公开壁纸目录主要面向应用内的个人桌面使用，除非某个素材另有明确书面授权说明。",
  },
  {
    question: "目前优先支持哪个平台？",
    answer:
      "Pyria Wallpaper 首先面向 macOS。官网保持轻量，是为了让产品介绍、审核资料、隐私政策和支持入口更清楚。",
  },
  {
    question: "为什么页面显示“审核中”？",
    answer:
      "因为首个公开版本仍处在 Apple 审核和上线准备流程中。正式发布后，我们会同步更新官网状态。",
  },
] as const;

export const privacySections = [
  {
    title: "适用范围",
    paragraphs: [
      `本隐私政策适用于 ${legal.brandName} 官网以及 ${legal.productName} macOS 应用。`,
      "本政策说明我们可能收集的信息、使用目的，以及你如何联系我们处理访问、更正或删除请求。",
    ],
  },
  {
    title: "我们可能收集的信息",
    bullets: [
      "你主动发送给支持邮箱的联系方式、邮件内容和问题描述。",
      "通过 StoreKit、Apple 收据或 Apple 服务器通知返回的账户与交易相关元数据。",
      "设备、应用和诊断信息，例如崩溃日志、错误轨迹和基础使用事件。",
      "你在请求支持时主动提供的附件，例如截图或录屏。",
    ],
  },
  {
    title: "信息用途",
    bullets: [
      "提供应用访问权限和已授权内容。",
      "处理购买、订阅和恢复购买。",
      "回复支持请求并排查应用问题。",
      "保障服务安全、识别滥用，并满足必要的法律或财务合规要求。",
    ],
  },
  {
    title: "第三方服务",
    bullets: [
      "Apple 服务用于身份、购买、收据和权益状态处理。",
      "托管、存储和 CDN 服务用于提供官网和应用内容。",
      "如后续启用错误或性能工具，将仅用于排查故障和改善稳定性。",
    ],
  },
  {
    title: "保存和删除",
    paragraphs: [
      "我们仅在服务、合规和问题排查所需的期限内保存支持记录和运营日志。",
      `如需请求删除我们控制范围内的个人数据，请联系 ${legal.supportEmail}。`,
    ],
  },
  {
    title: "你的选择",
    bullets: [
      "不要在支持邮件中发送你不希望被记录的信息。",
      "使用 Apple 账户工具管理购买、订阅和退款相关事项。",
      "如需查看、更正或删除我们持有的信息，可以通过支持邮箱联系我们。",
    ],
  },
] as const satisfies readonly ContentSection[];

export const termsSections = [
  {
    title: "接受条款",
    paragraphs: [
      `使用 ${legal.productName} 官网或应用，即表示你同意本使用条款，以及 Apple App Store 分发和应用内购买相关条款。`,
    ],
  },
  {
    title: "购买和订阅",
    bullets: [
      "所有数字购买均通过 Apple 的应用内购买系统处理。",
      "价格、续订、取消和退款规则由 Apple 展示和处理。",
      "符合条件的购买可以在应用内使用恢复购买功能。",
    ],
  },
  {
    title: "内容授权",
    bullets: [
      "除非某个素材另有说明，壁纸仅授权用于个人桌面背景。",
      "未经许可，不得重新分发、转售、抓取、打包或二次销售壁纸目录及其素材。",
      "不得移除版权信息，也不得以违反相应授权的方式使用内容。",
    ],
  },
  {
    title: "可接受使用",
    bullets: [
      "不得滥用服务、尝试未授权访问，或干扰应用和支持系统运行。",
      "不得通过逆向工程或绕过保护机制的方式破坏产品的正常授权模型。",
    ],
  },
  {
    title: "免责声明",
    bullets: [
      "在法律允许的范围内，服务按现状提供。",
      "我们不承诺服务永远不中断，但会保持支持渠道可用，并在能力范围内修复问题。",
    ],
  },
  {
    title: "联系我们",
    paragraphs: [`如对本条款有疑问，请发送邮件至 ${legal.supportEmail}。`],
  },
] as const satisfies readonly ContentSection[];

export const aboutValues = [
  {
    title: "视觉质量",
    description: "我们希望产品像被认真策展过，而不是批量拼装出来。",
  },
  {
    title: "版权清晰",
    description: "每张公开壁纸都需要明确的授权来源和可追溯的使用边界。",
  },
  {
    title: "支持简单",
    description: "用户应该很容易知道如何联系我们，以及反馈问题时需要提供什么信息。",
  },
] as const;
