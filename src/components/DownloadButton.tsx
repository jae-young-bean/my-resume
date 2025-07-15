'use client'

import { Download } from 'lucide-react'

export default function DownloadButton() {
  const handleDownload = () => {
    // PDF 다운로드 로직
    const link = document.createElement('a')
    link.href = '/resume.pdf' // 실제 PDF 파일 경로
    link.download = '이재영_이력서.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-4 right-4 z-50 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
      aria-label="이력서 PDF 다운로드"
    >
      <Download className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-medium">PDF</span>
    </button>
  )
} 