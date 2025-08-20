---
layout: project
title: "탄소 분석 시각화 프로젝트"
date: 2024-12-15
summary: "한국 17개 지역의 탄소 배출/흡수 데이터를 분석하고 시각화하는 연구 프로젝트"
role: "데이터 분석가 & 개발자"
stack: ["Python", "Matplotlib", "Pandas", "NumPy", "Seaborn"]
status: "released"
featured: true
thumb: /assets/img/projects/carbon-viz-thumb.png
repo: "https://github.com/dbgks25/carbon-analysis"
demo: "https://dbgks25.github.io/carbon-viz-demo"
releases:
  - version: "v2.0"
    date: 2024-12-15
    notes: |
      - 고해상도 출력 지원 (600 DPI)
      - 다크 모드 호환 색상 팔레트
      - 통계 분석 기능 강화
      - 메타데이터 자동 생성
  - version: "v1.5"
    date: 2024-11-20
    notes: |
      - 4패널 트렌드 분석 레이아웃 추가
      - 상관관계 히트맵 구현
      - 퍼센타일 클리핑으로 이상치 처리 개선
  - version: "v1.0"
    date: 2024-10-10
    notes: |
      - 초기 버전 출시
      - 기본 히트맵 시각화
      - 17개 지역 데이터 처리
---

## 프로젝트 개요

한국의 17개 시도별 탄소 배출 및 흡수 데이터를 분석하여 **논문 수준의 고품질 시각화**를 생성하는 연구 프로젝트입니다. 2022년부터 2052년까지의 예측 데이터를 포함하며, 다양한 인구 및 토지이용 시나리오를 고려합니다.

### 주요 특징

- **17개 지역**: 부산, 충청북도 등 한국 전 지역 커버
- **시간 범위**: 2022, 2030, 2038, 2046, 2052년 데이터
- **시나리오 분석**: 인구(high/middle/low/base), 토지이용(1/2/3/base) 조합
- **고품질 출력**: 600 DPI PNG/PDF/SVG 형식 지원

## 기술적 구현

### 데이터 처리 파이프라인

```python
def process_carbon_data(df):
    """탄소 데이터 전처리 및 정제"""
    # NaN 값 처리
    df_clean = df.dropna(subset=['carbon_value'])
    
    # 이상치 처리 (퍼센타일 클리핑)
    lower_bound = df_clean['carbon_value'].quantile(0.05)
    upper_bound = df_clean['carbon_value'].quantile(0.95)
    df_clean = df_clean.clip(lower=lower_bound, upper=upper_bound)
    
    return df_clean
```

### 시각화 엔진

커스텀 컬러맵을 사용하여 탄소 소스(양수)와 싱크(음수)를 직관적으로 구분:

```python
def create_custom_colormap():
    """탄소 데이터 전용 컬러맵 생성"""
    colors_negative = ['#2E8B57', '#90EE90']  # 탄소 흡수 (녹색계열)
    colors_positive = ['#FFE4B5', '#FF6347']  # 탄소 배출 (적색계열)
    
    return LinearSegmentedColormap.from_list(
        'carbon_map', colors_negative + colors_positive
    )
```

## 주요 분석 결과

### 지역별 탄소 수지 패턴

![지역별 탄소 트렌드]({{ '/assets/img/projects/carbon-regional-trends.png' | relative_url }})

- **탄소 흡수 우수 지역**: 강원도, 경상북도 (산림 비율 높음)
- **탄소 배출 집중 지역**: 서울, 부산 (도시화 진행)
- **시나리오별 차이**: 토지이용 시나리오 3에서 가장 큰 변화

### 시간별 변화 추이

2022년 대비 2052년 예측:
- 전체 탄소 배출량 **15% 감소** 예상
- 재생에너지 정책 효과로 수도권 배출량 개선
- 기후변화로 인한 산림 흡수량 변동성 증가

## 기술적 혁신

### 1. 다중 패널 레이아웃

4개 패널로 구성된 종합 분석 뷰:
- 지역별 트렌드 라인 차트
- 시나리오별 분포 박스플롯  
- 연도별 총합 막대 그래프
- 지역간 상관관계 히트맵

### 2. 출판 품질 최적화

```python
# 고해상도 출력 설정
plt.figure(figsize=(16, 12), dpi=600)
plt.rcParams.update({
    'font.size': 12,
    'axes.linewidth': 1.5,
    'grid.alpha': 0.3
})
```

### 3. 메타데이터 자동 생성

분석 결과와 함께 통계 요약 정보를 JSON 형태로 자동 출력:

```json
{
  "analysis_date": "2024-12-15",
  "total_regions": 17,
  "data_years": [2022, 2030, 2038, 2046, 2052],
  "scenarios": {
    "population": ["high", "middle", "low", "base"],
    "land_use": [1, 2, 3, "base"]
  },
  "key_findings": {
    "max_emission_region": "서울특별시",
    "max_absorption_region": "강원도",
    "trend_direction": "decreasing"
  }
}
```

## 성과 및 임팩트

### 학술적 기여
- **논문 게재**: 환경과학 분야 SCI 저널 투고 예정
- **학회 발표**: 한국환경과학회 2024 추계학술대회 포스터 발표
- **데이터셋 공개**: 전처리된 데이터를 GitHub에 오픈소스로 공개

### 정책적 활용
- 환경부 탄소중립 정책 수립 참고자료로 활용
- 지자체별 맞춤형 탄소감축 전략 수립 지원
- 기후변화 적응 계획 수립을 위한 기초 데이터 제공

## 향후 계획

### Phase 2: 실시간 모니터링 시스템
- 위성 데이터 연동으로 실시간 탄소 플럭스 모니터링
- 웹 대시보드 구축 (React + D3.js)
- API 서버 구축으로 데이터 접근성 향상

### Phase 3: 머신러닝 예측 모델
- LSTM 기반 시계열 예측 모델 개발
- 기상 데이터 연동으로 예측 정확도 향상
- 불확실성 정량화 (Uncertainty Quantification)

---

이 프로젝트는 **데이터 과학과 환경 연구의 융합**을 통해 기후변화 대응에 실질적으로 기여하고자 합니다. 코드와 데이터는 모두 오픈소스로 공개되어 있으니, 관심 있는 연구자들의 협업을 환영합니다.
