import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiến độ Việt hóa | Vietnam Key FanClub",
  description: "Trang tiến độ dịch thuật visual novel của Vietnam Key FanClub.",
  openGraph: {
    title: "Tiến độ Việt hóa | Vietnam Key FanClub",
    description:
      "Trang tiến độ dịch thuật visual novel của Vietnam Key FanClub.",
    url: "vnkeyfc.github.io",
    siteName: "Vietnam Key FanClub",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "https://key.visualarts.gr.jp/summer_rb/common/image/gallery_cg_sprb_05_l.jpg",
        width: 1920,
        height: 1080,
        alt: "Vietnam Key FanClub",
      },
    ],
  },
  verification: { google: "Cfikmknimz64R12LtyKF34sU9TkuMwt_F-azdYq44NM" },
  alternates: {
    canonical: "https://vnkeyfc.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
