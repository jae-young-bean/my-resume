'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = '인공지능 모델 실습 경험과 다양한 도구 활용 역량을 갖춘 예비 개발자'
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 프로필 이미지 */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">이</span>
              </div>
            </div>
          </div>

          {/* 이름 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">이재영</span>
          </h1>

          {/* 타이핑 효과 */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium min-h-[2rem]">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* 소개 */}
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            YOLOv9, 엑셀, 리눅스, 아두이노 등 다양한 기술을 활용한 프로젝트 경험을 바탕으로 
            실무에서 즉시 활용 가능한 개발자로 성장하고 있습니다.
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              자세히 보기
            </button>
            <a
              href="tel:010-4547-9201"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              연락하기
            </a>
          </div>
        </div>

        {/* 스크롤 다운 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-primary-600 transition-colors duration-200"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
} 