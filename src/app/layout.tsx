import type { Metadata } from "next";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Omair Waleed — Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years experience building scalable web and mobile applications. Expert in React, Next.js, React Native, Node.js, and cloud deployments.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "Omair Waleed",
  ],
  authors: [{ name: "Omair Waleed" }],
  openGraph: {
    title: "Omair Waleed — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, React Native, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AntdRegistry>
          {children}
          <Analytics />
          <SpeedInsights />
        </AntdRegistry>
      </body>
    </html>
  );
}
