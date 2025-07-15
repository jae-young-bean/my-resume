import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '이재영 - 이력서',
  description: '인공지능 모델 실습 경험과 다양한 도구 활용 역량을 갖춘 예비 개발자 이재영의 이력서',
  keywords: ['이재영', '이력서', '개발자', 'AI', 'YOLOv9', 'Python'],
  authors: [{ name: '이재영' }],
  openGraph: {
    title: '이재영 - 이력서',
    description: '인공지능 모델 실습 경험과 다양한 도구 활용 역량을 갖춘 예비 개발자',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 