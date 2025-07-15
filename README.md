# 이재영 이력서 웹사이트

인공지능 모델 실습 경험과 다양한 도구 활용 역량을 갖춘 예비 개발자 이재영의 포트폴리오 웹사이트입니다.

## 🚀 주요 기능

- **반응형 디자인**: PC, 태블릿, 모바일 모든 기기에서 최적화된 경험
- **다크모드 지원**: 라이트/다크 테마 전환 기능
- **프로젝트 중심**: YOLOv9, 엑셀, 리눅스, 아두이노 등 다양한 프로젝트 경험 소개
- **PDF 다운로드**: 이력서를 PDF 형태로 다운로드 가능
- **모던 UI/UX**: Tailwind CSS와 Framer Motion을 활용한 현대적인 디자인

## 🛠️ 기술 스택

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **PDF**: html2pdf.js
- **Deployment**: Vercel

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🎯 프로젝트 구조

```
src/
├── app/
│   ├── globals.css          # 전역 스타일
│   ├── layout.tsx           # 루트 레이아웃
│   └── page.tsx             # 메인 페이지
├── components/
│   ├── Header.tsx           # 네비게이션 헤더
│   ├── Hero.tsx             # 히어로 섹션
│   ├── About.tsx            # 소개 섹션
│   ├── Projects.tsx         # 프로젝트 섹션
│   ├── Skills.tsx           # 기술 스택 섹션
│   ├── Contact.tsx          # 연락처 섹션
│   ├── ThemeToggle.tsx      # 테마 토글
│   └── DownloadButton.tsx   # PDF 다운로드 버튼
```

## 📄 섹션별 내용

### 1. Hero Section
- 타이핑 효과가 있는 소개 문구
- 프로필 이미지 및 기본 정보
- CTA 버튼 (자세히 보기, 연락하기)

### 2. About Section
- 개인 소개 및 핵심 역량
- 통계 정보 (프로젝트 수, 기술 분야 등)
- 연락처 정보

### 3. Projects Section
- YOLOv9 인공지능 모델 학습
- Colab + 엑셀 연동 데이터 분석
- 리눅스 + 인공지능 모델 활용
- 논문 분석 및 발표
- 아두이노 실습 프로젝트

### 4. Skills Section
- 프로그래밍 언어 (Python, C++)
- AI/ML (YOLOv9, Computer Vision, Image Classification)
- 데이터 분석 (Google Colab, Excel, Data Visualization)
- 시스템 & 도구 (Linux, Arduino, PowerPoint)

### 5. Contact Section
- 연락처 정보 (전화, 이메일, 위치)
- 소셜 미디어 링크
- 연락 폼
- CTA 섹션

## 🎨 디자인 특징

- **그라데이션 텍스트**: 주요 제목에 그라데이션 효과 적용
- **카드 호버 효과**: 프로젝트 카드에 호버 시 애니메이션
- **스킬 바**: 기술 숙련도를 시각적으로 표현
- **반응형 그리드**: 화면 크기에 따른 레이아웃 조정
- **스무스 스크롤**: 섹션 간 부드러운 이동

## 📱 반응형 디자인

- **모바일**: 320px - 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: 1024px 이상

## 🌙 다크모드

- 시스템 설정 자동 감지
- 수동 토글 버튼
- 로컬 스토리지에 설정 저장

## 📄 PDF 다운로드

- 현재 페이지를 PDF로 변환
- html2pdf.js 라이브러리 사용
- 다운로드 버튼은 우하단에 고정

## 🚀 배포

### Vercel 배포
1. GitHub 저장소 연결
2. 자동 배포 설정
3. 커스텀 도메인 설정 (leejaeyoung-resume.vercel.app)

### 환경 변수
```env
NEXT_PUBLIC_SITE_URL=https://leejaeyoung-resume.vercel.app
```

## 📈 성능 최적화

- Next.js App Router 사용
- 이미지 최적화
- 코드 스플리팅
- CSS 최적화

## 🔧 커스터마이징

### 색상 변경
`tailwind.config.js`에서 primary 색상 수정:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ...
  }
}
```

### 콘텐츠 수정
각 컴포넌트 파일에서 텍스트 및 데이터 수정

## 📞 연락처

- **전화**: 010-4547-9201
- **이메일**: contact@leejaeyoung.com
- **위치**: 대한민국

## 📄 라이선스

MIT License

---

© 2024 이재영. All rights reserved. 