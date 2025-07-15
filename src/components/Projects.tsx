'use client'

import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'YOLOv9 인공지능 모델 학습',
    description: '이미지 선택 및 라벨링(바운딩 박스)을 통한 학습 데이터셋 구축 및 모델 학습 전체 과정 참여',
    technologies: ['Python', 'YOLOv9', 'Computer Vision'],
    category: 'AI/ML',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500',
    detailUrl: '/projects/yolov9',
  },
  {
    id: 2,
    title: 'Colab + 엑셀 연동 데이터 분석',
    description: 'Colab에서 엑셀 파일 로드 후 필요한 데이터 추출, 시각화(그래프 생성) 및 정제',
    technologies: ['Python', 'Google Colab', 'Excel', 'Data Visualization'],
    category: 'Data Analysis',
    icon: '📊',
    color: 'from-green-500 to-emerald-500',
    detailUrl: '/projects/colab-excel',
  },
  {
    id: 3,
    title: '리눅스 + 인공지능 모델 활용',
    description: '리눅스 환경에서 AI 모델 실행, 하리보 젤리 이미지 분류 모델 구현',
    technologies: ['Linux', 'Python', 'AI Models', 'Image Classification'],
    category: 'System',
    icon: '🐧',
    color: 'from-orange-500 to-red-500',
    detailUrl: '/projects/linux-ai',
  },
  {
    id: 4,
    title: '논문 분석 및 발표',
    description: '논문 검색 → 요약 → PPT 제작 및 발표를 통한 발표 역량 및 문서화 능력 강화',
    technologies: ['Research', 'PowerPoint', 'Presentation'],
    category: 'Research',
    icon: '📚',
    color: 'from-purple-500 to-pink-500',
    detailUrl: '/projects/paper-presentation',
  },
  {
    id: 5,
    title: '아두이노 실습 프로젝트',
    description: '빵판을 이용해 LED, 선풍기 회로 구성 및 제어를 통한 아두이노 하드웨어 제어 기본 이해',
    technologies: ['Arduino', 'C++', 'Hardware Control', 'IoT'],
    category: 'Hardware',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
    detailUrl: '/projects/arduino',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            다양한 기술을 활용한 프로젝트 경험을 통해 실무 역량을 키워왔습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden"
            >
              {/* 프로젝트 헤더 */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              </div>

              {/* 프로젝트 내용 */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* 기술 스택 */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    사용 기술
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="skill-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 액션 버튼 */}
                <div className="flex space-x-3">
                  <a
                    href={project.detailUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>자세히 보기</span>
                  </a>
                  <button className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 