import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: '汪泓涛 · Hongtao Wang',
  description:
    '汪泓涛，中国科学院地球环境研究所副研究员，研究方向为人工智能驱动的地球环境与地质灾害预测。',
  keywords: [
    '汪泓涛',
    'Hongtao Wang',
    'AI for Geoscience',
    '地质灾害预测',
    '中国科学院地球环境研究所',
  ],
  authors: [{ name: 'Hongtao Wang' }],
  icons: { icon: `${basePath}/profile.jpg` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
