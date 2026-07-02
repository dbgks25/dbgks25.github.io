---
title: "Impact of land use characteristics on air pollutant concentrations considering the spatial range of influence"
date: 2025-03-06
authors: ["Gunwon Lee", "Yuhan Han", "Geunhan Kim"]
venue: "Atmospheric Pollution Research, 16(6), 102498 (2025)"
tags: [대기오염, 토지피복, 다중회귀, XGBoost]
description: "약 443개 대기질측정소 자료와 식생지수·지형·토지피복 요인을 이용해 6종 대기오염물질 농도에 대한 토지이용의 영향을 공간 영향범위 관점에서 분석한 연구입니다."
pdf: /assets/papers/air-pollutant-land-use-spatial-range.pdf
link: https://doi.org/10.1016/j.apr.2025.102498
---

Atmospheric Pollution Research에 게재된 논문입니다.

### 배경
도시 대기오염은 주민 건강과 삶의 질에 큰 영향을 미치며, 토지이용·토지피복 특성은
대기질을 결정하는 주요 요인입니다.

### 필요성
대기질측정소(AQMS) 관측은 공간적으로 제한적이고, 각 토지 특성이 대기오염에 영향을
미치는 **공간적 범위(spatial range of influence)** 는 명확히 규명되지 않았습니다.
도시계획에 활용하려면 이 범위를 정량화할 필요가 있습니다.

### 목적
우리나라 약 **443개 AQMS** 의 6종 대기오염물질(SO₂, CO, O₃, NO₂, PM₁₀, PM₂.₅) 농도와
식생지수·지형·토지피복 요인의 관계를 공간 범위별로 분석하고, 토지이용 변화 시나리오에
따른 대기질 변화를 예측하는 것을 목적으로 합니다.

### 방법론
- **변수**: 식생지수(NDVI 등), 지형(고도·경사), Level-3 토지피복
- **공간 범위**: 측정소 주변 1,000 ~ 20,000 m 버퍼별 경관 특성 평균
- **모델**: 다중회귀분석(MLR) vs XGBoost 비교
- **시나리오**: 도로 녹화, 그린벨트 개발

### 주요 결과

![오염물질별 완충거리에 따른 MLR·XGBoost 설명력(R²)]({{ '/assets/img/papers/air-pollutant-land-use-spatial-range.png' | relative_url }})
*Fig. 6. 6종 대기오염물질에 대한 완충거리별 다중회귀(파랑)·XGBoost(초록) 설명력(R²)*

- 오염물질마다 설명력이 가장 높은 **최적 공간 범위가 상이** (예: NO₂는 18,000 m에서 R² 0.70)
- 표본이 크지 않아 다중회귀가 XGBoost보다 높은 설명력을 보임
- 대규모 개발은 오염 농도를 크게 높이는 반면, 소규모 녹지 복원의 개선 효과는 미미

전문은 위 **PDF** 또는 **원문 링크(DOI)** 에서 확인할 수 있습니다.
