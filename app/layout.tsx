import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://funect.net"),
  title: "FUNECT | AIコンシェルジュ（美容サロン向け）",
  description:
    "問い合わせ対応や予約受付の流れを整え、事業者と利用者の双方にとって使いやすい体験を実現するAIコンシェルジュ。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://funect.net",
    siteName: "FUNECT",
    title: "FUNECT | AIコンシェルジュ（美容サロン向け）",
    description:
      "問い合わせ対応や予約受付の流れを整え、事業者と利用者の双方にとって使いやすい体験を実現するAIコンシェルジュ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans`}>{children}</body>
    </html>
  );
}
