import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "张云阶 - 云计算工程师 | Cloud Computing Portfolio",
  description: "重庆商务职业学院云计算技术应用专业学生，深耕云原生领域，擅长 Kubernetes、Docker、Serverless 架构",
  keywords: ["云计算", "Cloud Computing", "Kubernetes", "DevOps", "张云阶", "Zhang Yunjie"],
  authors: [{ name: "Zhang Yunjie" }],
  openGraph: {
    title: "张云阶 - 云计算工程师",
    description: "深耕云原生领域的准工程师，热衷于 Kubernetes 自动化运维与 Serverless 架构",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
