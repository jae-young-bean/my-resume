export default function Yolov9Project() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 gradient-text">YOLOv9 인공지능 모델 학습</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧠 프로젝트 개요</h2>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li><b>목적:</b> 부러진 우산과 멀쩡한 우산을 이미지로 구분하여, 해당 우산이 <b>사용 가능한지/불가능한지</b> 판단하는 인공지능 모델 개발</li>
          <li><b>모델:</b> YOLOv9 (You Only Look Once version 9) 객체 탐지 모델 사용</li>
          <li><b>결과:</b> 우산 이미지에서 바운딩 박스를 기준으로 객체를 탐지하고, 우산이 부러졌는지 여부를 자동으로 분류</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">⚙️ 프로젝트 수행 세부 과정</h2>
        <ol className="list-decimal pl-6 space-y-6">
          <li>
            <b>📸 데이터 수집 및 전처리</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>다양한 상태의 우산 이미지 수집 (멀쩡한 우산 / 부러진 우산)</li>
              <li>클래스: <code>정상</code>, <code>부러짐</code></li>
              <li><b>Roboflow</b> 웹 플랫폼을 이용하여 직접 바운딩 박스 라벨링</li>
              <li>각 이미지에 대해 객체의 위치를 바운딩 박스로 지정, 클래스(label) 직접 지정</li>
              <li>라벨 형식: YOLO format (<code>.txt</code>)</li>
            </ul>
          </li>
          <li>
            <b>🏗 데이터셋 구성</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Roboflow 내에서 자동으로 train / validation / test 데이터셋 분할</li>
              <li>최종적으로 YOLO 학습에 적합한 데이터셋 포맷 (YOLOv9 형식)으로 다운로드</li>
            </ul>
          </li>
          <li>
            <b>🤖 모델 학습</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><b>Google Colab</b> 환경에서 학습 수행</li>
              <li>사용한 모델: <b>YOLOv9</b> (<code>ultralytics</code> 라이브러리 기반)</li>
              <li>하이퍼파라미터 조정 (epoch 수, batch size 등)</li>
            </ul>
            <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mt-2 text-sm overflow-x-auto"><code>{`!pip install ultralytics
from ultralytics import YOLO

model = YOLO("yolov9.pt")
model.train(data="dataset.yaml", epochs=50)`}</code></pre>
          </li>
          <li>
            <b>🔬 모델 테스트 및 성능 확인</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>학습이 완료된 모델을 Colab에서 불러와 테스트 이미지로 성능 확인</li>
              <li>실제 우산 이미지(부러짐 포함)를 입력해 결과 시각화</li>
            </ul>
            <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mt-2 text-sm overflow-x-auto"><code>{`results = model("test_image.jpg", save=True)
results.show()`}</code></pre>
          </li>
        </ol>
      </section>
    </main>
  )
} 