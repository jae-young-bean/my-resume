'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            인공지능과 다양한 기술을 활용한 실습 경험을 통해 실무 역량을 키워가고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 소개 내용 */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                안녕하세요, 이재영입니다 👋
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                인공지능 모델 실습 경험과 다양한 도구 활용 역량을 갖춘 예비 개발자입니다. 
                YOLOv9, 엑셀, 리눅스, 아두이노 등 다양한 기술을 활용한 프로젝트를 통해 
                실무에서 즉시 활용 가능한 실력을 쌓아왔습니다.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                특히 인공지능 분야에 깊은 관심을 가지고 있으며, 
                이미지 분류, 객체 탐지, 데이터 분석 등 다양한 AI 프로젝트를 수행했습니다.
              </p>
            </div>

            {/* 핵심 역량 */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                핵심 역량
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    AI/ML 개발
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    YOLOv9, 이미지 분류 모델 개발 및 학습
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    데이터 분석
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Colab + 엑셀 연동 데이터 처리 및 시각화
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    시스템 운영
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    리눅스 환경에서 AI 모델 배포 및 운영
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    하드웨어 제어
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    아두이노를 활용한 IoT 프로젝트 개발
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 프로필 사진 및 정보 */}
          <div className="flex flex-col justify-center items-center h-full">
            <img
              src="/profile.jpg"
              alt="프로필 사진"
              className="w-60 h-60 object-cover rounded-full shadow-xl border-4 border-primary-200 dark:border-primary-800 bg-white mb-6"
            />
            <div className="text-center space-y-1">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">이재영</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">010-4547-9201</div>
              <div className="text-lg text-gray-700 dark:text-gray-300">서울시 노원구 거주</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 