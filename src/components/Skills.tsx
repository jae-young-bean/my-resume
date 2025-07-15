'use client'

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'C++', level: 70, icon: '⚡' },
    ]
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'YOLOv9', level: 85, icon: '🤖' },
      { name: 'Computer Vision', level: 80, icon: '👁️' },
      { name: 'Image Classification', level: 75, icon: '🖼️' },
    ]
  },
  {
    category: 'Data Analysis',
    items: [
      { name: 'Google Colab', level: 90, icon: '📊' },
      { name: 'Excel', level: 85, icon: '📈' },
      { name: 'Data Visualization', level: 80, icon: '📉' },
    ]
  },
  {
    category: 'Systems & Tools',
    items: [
      { name: 'Linux', level: 75, icon: '🐧' },
      { name: 'Arduino', level: 70, icon: '⚙️' },
      { name: 'PowerPoint', level: 85, icon: '📋' },
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            다양한 기술 스택을 활용하여 실무에서 즉시 활용 가능한 역량을 보유하고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 기술 카테고리별 */}
          <div className="space-y-8">
            {skills.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 기술 요약 */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                핵심 역량 요약
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>AI/ML 개발:</strong> YOLOv9, 이미지 분류 모델 개발
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>데이터 분석:</strong> Colab + 엑셀 연동 데이터 처리
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>시스템 운영:</strong> 리눅스 환경 AI 모델 배포
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>하드웨어 제어:</strong> 아두이노 IoT 프로젝트
                  </span>
                </div>
              </div>
            </div>

            {/* 학습 중인 기술 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                학습 중인 기술
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Colab</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🖱️</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Cursor</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">C언어</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🗄️</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">SQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 