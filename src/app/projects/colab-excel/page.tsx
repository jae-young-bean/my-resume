export default function ColabExcelProject() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Colab + 엑셀 연동 데이터 분석</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧠 활동 개요</h2>
        <p className="text-lg mb-4">
          Google Colab과 Python을 활용해 다양한 주제의 엑셀 데이터를 불러오고, 필요한 정보를 추출하여 시각화 및 비교 분석을 수행한 프로젝트입니다. 단순한 수치 해석을 넘어서 <b>실제 데이터를 기반으로 한 인사이트 도출</b>을 목표로 했습니다.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🔍 수행한 주요 분석 활동</h2>
        <ol className="list-decimal pl-6 space-y-8">
          <li>
            <b>📁 엑셀 파일 다루기 연습</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>다양한 형식의 엑셀(.xlsx, .csv) 데이터를 불러오고, 필요한 열(Column)과 행(Row)을 추출하는 방법을 연습</li>
              <li>결측치 처리, 열 이름 변경, 데이터 타입 변환 등의 기본 전처리 수행</li>
            </ul>
          </li>
          <li>
            <b>1️⃣ 암 환자 발병률 통계 분석</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><b>프로젝트 목적:</b> 국내 및 국제 보건 데이터를 분석하여 암 발병률의 연도별 변화 및 성별 차이 파악, 시각화를 통해 사회적 관심도 유도</li>
              <li>국가 통계 포털(KOSIS) 및 WHO에서 제공하는 엑셀 파일 다운로드</li>
              <li>pandas를 활용해 연도, 성별, 암 종류별로 데이터 분리 및 결측값 처리, 데이터 정제</li>
              <li>matplotlib, seaborn을 사용해 성별에 따른 발병률 차이, 연도별 추이 그래프 작성</li>
              <li>시각화 결과 해석 및 주요 특징 정리</li>
            </ul>
            <div className="mt-2">
              <b>🧰 사용 기술:</b> Python, Google Colab, pandas, numpy, matplotlib, seaborn, openpyxl, .xlsx, .csv
            </div>
          </li>
          <li>
            <b>2️⃣ 전염병 확진자 수 비교 분석</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><b>프로젝트 목적:</b> 감염병별 전염 추세와 확산 속도 차이 데이터 비교, 대표 질병: 코로나19, 독감, 수두, RSV 등</li>
              <li>질병관리청 및 Data.go.kr에서 전염병 관련 데이터 수집</li>
              <li>월별 확진자 수, 지역별 분포, 연령대별 차이 분석</li>
              <li>groupby로 월별 평균, 바 차트 시각화, 꺾은선그래프, 히트맵 등 다양한 시각화</li>
            </ul>
            <div className="mt-2">
              <b>🧰 사용 기술:</b> Python, Google Colab, pandas, matplotlib, seaborn, plotly, .csv, .xlsx
            </div>
          </li>
          <li>
            <b>3️⃣ 미국 주(State)별 거주지 현황 분석</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><b>프로젝트 목적:</b> 미국의 인구 이동 패턴 및 주별 거주 현황을 연도별로 분석</li>
              <li>미국 센서스 데이터에서 주별 거주 인구 통계 수집</li>
              <li>연도별 주별 데이터 정제 및 pivot_table로 재구성</li>
              <li>인구 증가율/감소율 계산, 막대 그래프 및 히트맵 시각화</li>
            </ul>
            <div className="mt-2">
              <b>🧰 사용 기술:</b> Python, Google Colab, pandas, matplotlib, seaborn, numpy
            </div>
          </li>
          <li>
            <b>4️⃣ 리그 오브 레전드(LOL) 대회 챔피언 데이터 분석</b>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><b>프로젝트 목적:</b> 전 세계 LoL e스포츠 대회 데이터를 기반으로 가장 많이 등장한 챔피언과 라인 별 평균 성능 지표(KDA, 골드 수급 등) 분석</li>
              <li>OP.GG, LoL Wiki, Kaggle에서 제공하는 챔피언별 경기 데이터셋 수집</li>
              <li>pandas로 각 라인별 데이터 분류, 챔피언 출현 빈도, 평균 골드, KDA, 승률 등 정리</li>
              <li>시각화: 라인별 TOP 5 챔피언 기준 막대그래프, 히트맵, 박스플롯 제작</li>
            </ul>
            <div className="mt-2">
              <b>🧰 사용 기술:</b> Python, Google Colab, pandas, matplotlib, seaborn, numpy, openpyxl, .csv, .xlsx
            </div>
          </li>
        </ol>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💻 사용 기술 스택</h2>
        <table className="w-full text-left border mt-2 mb-4">
          <tbody>
            <tr><th className="border px-2 py-1">항목</th><th className="border px-2 py-1">내용</th></tr>
            <tr><td className="border px-2 py-1">프로그래밍 언어</td><td className="border px-2 py-1">Python</td></tr>
            <tr><td className="border px-2 py-1">운영 환경</td><td className="border px-2 py-1">Google Colab (Ubuntu 기반 클라우드 환경)</td></tr>
            <tr><td className="border px-2 py-1">사용한 모듈/라이브러리</td><td className="border px-2 py-1">pandas, numpy, matplotlib, seaborn, openpyxl, csv, plotly</td></tr>
          </tbody>
        </table>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧰 코드 예시 (Colab 기반)</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 mt-2 text-sm overflow-x-auto"><code>{`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 엑셀 파일 불러오기
df = pd.read_excel("/content/암_발병률.xlsx")

# 필요한 열 선택 및 전처리
df = df[["연도", "성별", "발병률"]]
df_grouped = df.groupby(["연도", "성별"]).mean().reset_index()

# 시각화
plt.figure(figsize=(10,6))
sns.lineplot(x="연도", y="발병률", hue="성별", data=df_grouped)
plt.title("연도별 성별 암 발병률 변화")
plt.show()`}</code></pre>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧠 이 활동을 통해 키운 역량</h2>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>엑셀 파일을 프로그래밍으로 다루는 실전 능력 (불러오기, 정리, 분석)</li>
          <li>Python을 활용한 데이터 전처리 및 시각화 기술</li>
          <li>matplotlib/seaborn 기반의 고급 그래프 작성 능력</li>
          <li>필요한 정보를 선별하여 정리하는 데이터 추출 능력</li>
          <li>게임 데이터, 공공 보건 데이터, 인구 통계 데이터 등 다양한 주제의 실전 분석 경험</li>
          <li>수치 기반 인사이트 도출 및 결과 해석 능력</li>
        </ul>
      </section>
    </main>
  )
} 