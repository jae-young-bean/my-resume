export default function LinuxAIProject() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 gradient-text">리눅스 + 인공지능 모델 활용</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧠 프로젝트 개요</h2>
        <p className="text-lg mb-4">
          직접 리눅스 환경을 설치하고, <b>커맨드라인 기반 서버 세팅부터 인공지능 모델 다운로드 및 테스트까지 전 과정</b>을 수행한 프로젝트입니다.<br/>
          <b>하리보 곰젤리의 색상 분류 AI 모델</b>을 구축하고, <b>실제 웹캠을 연결해 테스트까지 진행</b>한 실전 응용 프로젝트입니다.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">📦 프로젝트 내용</h2>
        <ol className="list-decimal pl-6 space-y-8">
          <li>
            <b>✅ 1. 리눅스 환경 구축 및 서버 세팅</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><b>우분투(Ubuntu Linux)</b> 배포판을 직접 ISO로 다운로드 받아 설치</li>
              <li>설치 후 기본 소프트웨어 패키지 업데이트 및 시스템 환경 설정:<br/>
                <code>sudo apt update</code>, <code>sudo apt upgrade</code><br/>
                <code>python</code>, <code>pip</code>, <code>git</code>, <code>opencv</code>, <code>ffmpeg</code>, <code>wget</code>, <code>curl</code> 등 필수 패키지 설치
              </li>
              <li>터미널 명령어를 이용한 디렉토리 구조 구성 및 프로젝트 환경 정리</li>
              <li>Python 가상환경(<code>venv</code>)을 설정하여 프로젝트마다 패키지 독립성 유지</li>
              <li>필요한 AI 모델 및 데이터셋을 <b>커맨드라인에서 직접 다운로드 및 압축 해제</b></li>
            </ul>
            <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mt-2 text-sm overflow-x-auto"><code>{`sudo apt install python3-pip
python3 -m venv ai_env
source ai_env/bin/activate
pip install opencv-python numpy torch torchvision`}</code></pre>
          </li>
          <li>
            <b>✅ 2. 인공지능 모델 학습 및 테스트</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>하리보 곰젤리 이미지 100장씩 (색상별: 빨강, 노랑, 초록 등) 수집 후 디렉토리 별로 정리 (총 300~400장)</li>
              <li>라벨링은 폴더 구조를 이용해 클래스 분류</li>
              <li>PyTorch 기반 분류 모델(CNN) 구성 후 학습 진행</li>
              <li>이미지 전처리, 데이터셋 로딩, 에폭 단위 학습 및 정확도 출력</li>
            </ul>
            <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mt-2 text-sm overflow-x-auto"><code>{`import torch
from torchvision import datasets, transforms, models
from torch.utils.data import DataLoader

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

train_dataset = datasets.ImageFolder('data/train', transform=transform)
train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)

model = models.resnet18(pretrained=False)
model.fc = torch.nn.Linear(model.fc.in_features, len(train_dataset.classes))`}</code></pre>
          </li>
          <li>
            <b>✅ 3. 실시간 테스트 환경 구축 (웹캠 연동)</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>OpenCV를 사용하여 <b>USB 웹캠을 실시간으로 연동</b></li>
              <li>학습된 모델을 사용하여 캠에 비춰진 하리보 젤리의 색상 분류</li>
              <li>다양한 조명, 거리, 배경 변화 상황에서도 <b>정확한 분류 성능 확인</b></li>
              <li>실시간 화면에 분류 결과(예: "빨강 젤리")를 텍스트로 출력</li>
            </ul>
            <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mt-2 text-sm overflow-x-auto"><code>{`import cv2

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    image_tensor = preprocess(frame).unsqueeze(0)
    output = model(image_tensor)
    pred = output.argmax().item()
    label = train_dataset.classes[pred]

    cv2.putText(frame, label, (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2)
    cv2.imshow('Haribo Classification', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break`}</code></pre>
          </li>
        </ol>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧰 사용 기술 스택</h2>
        <table className="w-full text-left border mt-2 mb-4">
          <tbody>
            <tr><th className="border px-2 py-1">항목</th><th className="border px-2 py-1">사용 내용</th></tr>
            <tr><td className="border px-2 py-1">운영체제 (OS)</td><td className="border px-2 py-1">Ubuntu Linux 22.04 (직접 설치 및 환경 세팅)</td></tr>
            <tr><td className="border px-2 py-1">프로그래밍 언어</td><td className="border px-2 py-1">Python 3.10</td></tr>
            <tr><td className="border px-2 py-1">프레임워크/라이브러리</td><td className="border px-2 py-1">PyTorch, OpenCV, Torchvision, numpy, os, glob</td></tr>
            <tr><td className="border px-2 py-1">하드웨어 연동</td><td className="border px-2 py-1">외부 웹캠 (USB), 실시간 테스트를 위한 OpenCV</td></tr>
            <tr><td className="border px-2 py-1">기타 도구</td><td className="border px-2 py-1">pip, venv, bash, ffmpeg</td></tr>
          </tbody>
        </table>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🚀 주요 성과</h2>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>리눅스 환경에서 AI 프로젝트 전체 사이클(설치 → 학습 → 실시간 테스트)을 <b>독립적으로 수행</b></li>
          <li>실시간 카메라 인식과 AI 모델을 <b>연결하는 응용능력 확보</b></li>
          <li>단순 학습이 아닌 <b>실제 응용 가능한 인공지능 모델 구현 경험</b> 축적</li>
          <li>다양한 조명/상황에서도 동작 가능한 <b>현장 실전 테스트</b>까지 진행</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💡 이 활동을 통해 얻은 역량</h2>
        <table className="w-full text-left border mt-2 mb-4">
          <tbody>
            <tr><th className="border px-2 py-1">역량</th><th className="border px-2 py-1">설명</th></tr>
            <tr><td className="border px-2 py-1">리눅스 환경 세팅 능력</td><td className="border px-2 py-1">운영체제 설치부터 터미널을 통한 AI 개발 환경 구축까지</td></tr>
            <tr><td className="border px-2 py-1">AI 모델 학습 및 활용 능력</td><td className="border px-2 py-1">직접 모델 구성, 학습, 테스트 과정을 설계하고 실행</td></tr>
            <tr><td className="border px-2 py-1">하드웨어 연동 능력</td><td className="border px-2 py-1">컴퓨터의 카메라 장치와 인공지능 모델을 실시간으로 연동</td></tr>
            <tr><td className="border px-2 py-1">문제 해결 능력</td><td className="border px-2 py-1">학습 오류, 환경 충돌, 카메라 드라이버 이슈 등 다양한 상황 대처 경험</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  )
} 