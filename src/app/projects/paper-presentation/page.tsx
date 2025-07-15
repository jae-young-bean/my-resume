export default function PaperPresentationProject() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 gradient-text">논문 분석 및 발표</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📘 1. 논문 분석 및 발표</h2>
        <div className="mb-2"><b>논문 제목:</b> <i>Deep Metric Learning via Lifted Structured Feature Embedding</i></div>
        <div className="mb-4"><b>주제:</b> 이미지 간의 유사도를 학습하는 딥 메트릭 러닝 기법에 대한 연구</div>
        <h3 className="text-xl font-semibold mb-2">🔍 논문 개요</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>기존 Triplet Loss의 한계를 보완하여, 더 많은 관계(pairwise relationships)를 한 번에 학습할 수 있는 <b>Lifted Structured Feature Embedding</b> 기법 제안</li>
          <li>이미지 임베딩 공간 상에서 서로 다른 클래스는 멀어지고, 같은 클래스는 가까워지도록 학습</li>
          <li><b>실험 데이터셋</b>: CUB-200-2011, Cars196 등</li>
          <li><b>활용 분야</b>: 이미지 검색, 얼굴 인식, 패션 추천 시스템 등</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">📌 발표 준비 과정</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>논문 전체를 직접 분석하여 <b>핵심 알고리즘과 수식, 실험 결과</b>를 요약</li>
          <li>Loss 함수의 동작 원리를 단계별로 그림과 예시를 통해 시각화</li>
          <li>실험 결과를 재구성하여 그래프로 표현</li>
          <li>PPT로 정리한 내용을 교내 발표에서 직접 설명하며 <b>기술 개념 전달 역량 강화</b></li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">🛠️ 사용 도구 및 기술</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>언어/기술</b>: 수학적 모델링 이해, 논문 해석 및 요약 능력</li>
          <li><b>도구</b>: Microsoft PowerPoint, Google Slides</li>
          <li><b>주요 개념</b>: Triplet Loss, Pairwise Loss, Embedding Space, CNN 기반 피처 추출</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">🧠 배운 점</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>복잡한 AI 논문을 요약·시각화하고, 청중에게 효과적으로 설명하는 능력 향상</li>
          <li>딥러닝에서의 유사도 학습 개념 및 벡터 공간 이해력 강화</li>
          <li>발표 및 커뮤니케이션 능력 향상</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🎮 2. AR/VR 기반 게임 개발 학습용 프로젝트 기획 및 발표</h2>
        <h3 className="text-xl font-semibold mb-2">🎯 프로젝트 개요</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>목표</b>: 게임 개발 입문자들이 AR/VR 환경에서 코딩을 학습하고, 점차적으로 3D 게임까지 개발할 수 있는 <b>단계형 교육용 게임</b> 설계</li>
          <li><b>구상 배경</b>: 게임 개발에 대한 흥미를 기반으로, 코딩 패턴과 개발 흐름을 효과적으로 익히는 방식 탐구</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">🧩 게임 시스템 및 구성</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>기반 기술</b>: AR/VR 기기를 활용하여 몰입감 있는 학습 환경 제공</li>
          <li><b>진행 방식</b>:
            <ul className="list-disc pl-6">
              <li>초반: 단순한 2D 게임 제작 → 기본적인 <b>게임 코딩 패턴</b> (Update loop, State pattern 등)을 실습</li>
              <li>중반: Unity나 Unreal 엔진을 활용한 간단한 3D 요소 구현</li>
              <li>최종: 완전한 3D 게임 제작 완료</li>
            </ul>
          </li>
          <li><b>게임 방식</b>:
            <ul className="list-disc pl-6">
              <li>각 코딩 단계를 완수하면 다음 단계로 진입</li>
              <li>보상을 통한 학습 동기 부여 (예: 캐릭터 스킨, 배경 변경권 등 리워드 시스템)</li>
            </ul>
          </li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">🧠 포함된 코딩 패턴 예시</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>Component Pattern</b>: Unity 기반 게임 개발에서의 오브젝트 구성 이해</li>
          <li><b>Finite State Machine (FSM)</b>: 게임 캐릭터나 UI의 상태 전이 구현</li>
          <li><b>Observer Pattern</b>: 이벤트 기반 UI 상호작용 처리</li>
          <li><b>Game Loop 패턴</b>: 게임의 핵심 실행 흐름 학습</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">📑 발표 및 시각자료 구성</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>직접 기획한 게임 콘셉트와 시스템 구조를 슬라이드로 정리</li>
          <li>게임 단계별 시나리오와 구현 예정 기능을 표와 도식으로 설명</li>
          <li>AR/VR 기기 이미지, 예상 UI/UX 시안 등을 포함한 <b>시각적 몰입력 있는 PPT 제작</b></li>
          <li>교내 학생들 앞에서 프레젠테이션 진행 및 피드백 수용</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">🛠️ 사용 도구 및 기술</h3>
        <ul className="list-disc pl-6 mb-4">
          <li><b>도구</b>: PowerPoint, Canva, Figma (UI 기획용)</li>
          <li><b>기술 기반</b>: Unity, C#, ARKit/ARCore (기획단계에서 참고)</li>
          <li><b>적용 개념</b>: 교육 게임 설계, 사용자 동기 이론, 학습형 게임 구조</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">🧠 배운 점</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>게임 시스템과 코딩 패턴을 구조적으로 학습하여 <b>실제 개발 흐름에 대한 이해도 향상</b></li>
          <li>AR/VR이라는 최신 기술을 활용한 기획으로 <b>창의력과 기술 융합 사고력 강화</b></li>
          <li>기획 내용을 명확히 전달하고 설득하는 <b>프레젠테이션 및 커뮤니케이션 역량</b> 향상</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">✨ 종합 정리</h2>
        <table className="w-full text-left border mt-2 mb-4">
          <tbody>
            <tr><th className="border px-2 py-1">항목</th><th className="border px-2 py-1">내용</th></tr>
            <tr><td className="border px-2 py-1">분석 능력</td><td className="border px-2 py-1">AI 논문 해석 및 요약, 시스템 구조 분석</td></tr>
            <tr><td className="border px-2 py-1">기획 및 설계</td><td className="border px-2 py-1">게임 구조 설계, 단계별 학습 콘텐츠 기획</td></tr>
            <tr><td className="border px-2 py-1">시각화 역량</td><td className="border px-2 py-1">핵심 내용을 PPT로 구조화, 시각 자료 제작 능력</td></tr>
            <tr><td className="border px-2 py-1">발표 역량</td><td className="border px-2 py-1">논리적인 흐름에 따른 발표 구성, 질문 응답 능력</td></tr>
            <tr><td className="border px-2 py-1">기술 응용력</td><td className="border px-2 py-1">AI/AR/VR/게임 개발 개념 융합</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  )
} 