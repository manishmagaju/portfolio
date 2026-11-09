import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";
import { site } from "@/data/site";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.role}`,
  description: `${site.name}, ${site.role} from ${site.location}. ${site.tagline}`,
  openGraph: { title: `${site.name} | ${site.role}`, description: site.tagline, type: "website", locale: "en_US" },
  robots: { index: true, follow: true },
};
export const viewport = { themeColor: "#0a0a0f" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans"><Shell>{children}</Shell></body>
    </html>
  );
}
