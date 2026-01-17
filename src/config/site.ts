export const siteConfig = {
  name: "Company Name",
  description: "あなたのビジネスを加速させる、次世代のソリューション。",
  url: process.env["NEXT_PUBLIC_APP_URL"] ?? "http://localhost:3000",
  ogImage: "/og.png",
  mainNav: [
    { title: "サービス", href: "/services" },
    { title: "料金", href: "/pricing" },
    { title: "会社概要", href: "/about" },
    { title: "お問い合わせ", href: "/contact" },
  ],
  cta: {
    label: "無料で始める",
    href: "/signup",
  },
  hero: {
    title: "ビジネスを次のレベルへ",
    description:
      "最先端のテクノロジーで、あなたのビジネスをサポートします。シンプルで使いやすく、効果的なソリューションを提供します。",
  },
  links: {
    twitter: "https://twitter.com/yourcompany",
    github: "https://github.com/yourcompany",
  },
};

export type SiteConfig = typeof siteConfig;
