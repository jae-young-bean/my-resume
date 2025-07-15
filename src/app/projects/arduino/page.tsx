export default function ArduinoProject() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 gradient-text">아두이노 실습 프로젝트</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🌱 프로젝트 개요: 친환경 기술 탐구 및 간단한 IoT 제어 실습</h2>
        <h3 className="text-xl font-semibold mb-2">💡 목적</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>환경 보호와 관련된 문제를 학습하고, 이를 실천하거나 알릴 수 있는 <b>친환경 기술 아이디어</b>를 직접 실현해보는 하드웨어 제어 프로젝트 수행</li>
          <li>아두이노와 브레드보드를 활용해 간단한 전자회로를 구성하고, <b>센서와 모터 제어</b>, <b>자동화 동작 구현</b> 등의 기초적인 하드웨어 제어 능력 습득</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🛠️ 프로젝트 상세</h2>
        <ol className="list-decimal pl-6 space-y-8">
          <li>
            <b>1️⃣ 자동 점멸 LED 회로 제작</b>
            <ul className="list-disc pl-6 mt-2 mb-2">
              <li>브레드보드 위에 LED와 저항을 연결</li>
              <li>어썸코드(Awesome Code, 블록코딩 기반)와 아두이노 IDE를 이용해 <b>시간이 지나면 자동으로 LED가 켜지고 꺼지도록</b> 타이머 제어 로직 구현</li>
              <li>아두이노의 <code>delay()</code>, <code>digitalWrite()</code>, <code>millis()</code> 함수 이해</li>
              <li>LED 회로 구성 방법 및 전류 흐름 원리 습득</li>
            </ul>
            <div className="mb-2">
              <b>사용 도구 및 기술:</b> C/C++ (Arduino 문법), Arduino Uno, 저항, LED, 브레드보드, 점퍼선, Arduino IDE, Windows 10 / macOS
            </div>
          </li>
          <li>
            <b>2️⃣ 미니 선풍기 제작 (모터 제어)</b>
            <ul className="list-disc pl-6 mt-2 mb-2">
              <li>브레드보드에 <b>DC 모터</b>를 연결하고 아두이노로 <b>전원 제어 및 회전속도 제어</b></li>
              <li>모터 팬 블레이드를 고정하여 <b>작동 가능한 미니 선풍기</b> 제작</li>
              <li>모터 회로 보호를 위한 다이오드, 트랜지스터 사용 이해</li>
              <li>PWM 제어 (<code>analogWrite()</code> 함수)를 활용한 <b>속도 조절 실습</b></li>
            </ul>
            <div className="mb-2">
              <b>사용 도구 및 기술:</b> DC Motor, 트랜지스터(NPN), 다이오드, 브레드보드, 점퍼선, C++ (Arduino), Arduino IDE, Windows 10, 외부 전원 공급기
            </div>
          </li>
          <li>
            <b>3️⃣ 블록코딩 기반 미니카 제작</b>
            <ul className="list-disc pl-6 mt-2 mb-2">
              <li>기본적인 미니카 키트를 조립한 후, 어썸코드를 통해 <b>블록코딩으로 제어</b></li>
              <li>모터 제어, 주행 로직, 간단한 조건문(장애물 인식 시 정지 등) 구현</li>
              <li>블록코딩으로 제어 흐름 및 조건 분기 학습</li>
              <li>하드웨어 센서(초음파, 적외선 등)와의 인터페이스 이해</li>
            </ul>
            <div className="mb-2">
              <b>사용 도구 및 기술:</b> 블록코딩 (Awesome Code), 일부 C 기반 명령어, Windows 기반 브라우저, 초음파 센서, 적외선 센서, DC 모터, 미니카 프레임
            </div>
          </li>
        </ol>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📚 활동을 통해 배운 점</h2>
        <table className="w-full text-left border mt-2 mb-4">
          <tbody>
            <tr><th className="border px-2 py-1">영역</th><th className="border px-2 py-1">학습 내용</th></tr>
            <tr><td className="border px-2 py-1">전자회로 기초</td><td className="border px-2 py-1">LED 저항 연결, 브레드보드 배선, 전류 흐름 이해</td></tr>
            <tr><td className="border px-2 py-1">기본 코딩 역량</td><td className="border px-2 py-1">디지털/아날로그 출력, 조건문, 반복문, 타이머 활용</td></tr>
            <tr><td className="border px-2 py-1">하드웨어 제어 능력</td><td className="border px-2 py-1">센서와 모터 제어, PWM 제어, 실제 하드웨어 피드백 이해</td></tr>
            <tr><td className="border px-2 py-1">환경 문제 인식</td><td className="border px-2 py-1">친환경 기술을 구현하는 데 있어 전자공학의 역할 탐구</td></tr>
            <tr><td className="border px-2 py-1">도구 활용 능력</td><td className="border px-2 py-1">Arduino IDE 사용법, 어썸코드 블록코딩 구조 이해</td></tr>
          </tbody>
        </table>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧰 사용한 언어 · OS · 도구 정리</h2>
        <table className="w-full text-left border mt-2 mb-4">
          <tbody>
            <tr><th className="border px-2 py-1">항목</th><th className="border px-2 py-1">사용 내용</th></tr>
            <tr><td className="border px-2 py-1">운영체제 (OS)</td><td className="border px-2 py-1">Windows 10, macOS (아두이노 IDE 사용 시)</td></tr>
            <tr><td className="border px-2 py-1">개발 환경</td><td className="border px-2 py-1">Arduino IDE, Awesome Code (블록코딩 웹 기반 플랫폼)</td></tr>
            <tr><td className="border px-2 py-1">사용 언어</td><td className="border px-2 py-1">C/C++ (Arduino), 블록코딩</td></tr>
            <tr><td className="border px-2 py-1">사용 모듈</td><td className="border px-2 py-1">Arduino Uno, LED, 저항, DC Motor, 트랜지스터, 다이오드, 초음파 센서, IR 센서 등</td></tr>
            <tr><td className="border px-2 py-1">하드웨어 구성 도구</td><td className="border px-2 py-1">브레드보드, 점퍼선, 외부 전원 장치 등</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  )
} 