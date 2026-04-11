import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
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
      <body className={`${dmSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
