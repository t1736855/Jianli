import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "张云阶 - 云计算工程师 | Cloud Computing Portfolio",
  description: "重庆商务职业学院云计算技术应用专业学生，深耕云原生领域，擅长 Kubernetes、Docker、Serverless 架构",
  keywords: ["云计算", "Cloud Computing", "Kubernetes", "DevOps", "张云阶"],
  authors: [{ name: "Zhang Yunjie" }],
  openGraph: {
    title: "张云阶 - 云计算工程师",
    description: "深耕云原生领域的准工程师",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
