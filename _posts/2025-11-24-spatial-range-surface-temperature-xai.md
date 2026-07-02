---
title: "Characterizing the relationship between the spatial range of influence of urban land characteristics and surface temperature using geospatial explainable artificial intelligence models"
date: 2025-11-24
authors: ["Gunwon Lee", "Youngtae Cho", "Yuhan Han", "Geunhan Kim"]
venue: "International Journal of Digital Earth, 18(2), 2583833 (2025)"
tags: [지표온도, 도시열섬, 설명가능AI, XGBoost, 원격탐사]
description: "도시 토지 특성이 지표면 온도에 영향을 미치는 공간적 범위를 지리공간 설명가능 AI(GeoXAI)로 규명하고, 도로 녹지화 시나리오의 냉각 효과를 예측한 연구입니다."
pdf: /assets/papers/spatial-range-surface-temperature-xai.pdf
link: https://doi.org/10.1080/17538947.2025.2583833
---

International Journal of Digital Earth에 게재된 논문입니다.

### 배경
도시의 지표면 온도(LST)와 도시 열섬 현상은 토지피복·토지이용 특성과 밀접하게 관련되어
있습니다.

### 필요성
각 토지 특성이 LST에 영향을 미치는 **공간적 범위**는 명확하지 않으며, 블랙박스 모델의
결과를 정책에 활용하려면 **설명 가능한** 분석이 필요합니다.

### 목적
지리공간 설명가능 AI(**GeoXAI**) 프레임워크로 도시 토지 특성과 LST의 관계 및 공간적
영향 범위를 규명하고, GNDVI 기반 **도로 → 도시공원 복원 시나리오** 의 냉각 효과를
예측하는 것을 목적으로 합니다.

### 방법론
- **모델**: 여러 머신러닝 모델의 R²·RMSE를 완충거리별로 비교, XGBoost 채택
- **해석**: SHAP로 변수 방향성·상대 중요도 분석
- **시나리오**: GNDVI 값에 따른 4가지 녹지 복원 시나리오

### 주요 결과

![4가지 복원 시나리오별 예측 지표면 온도(LST) 분포]({{ '/assets/img/papers/spatial-range-surface-temperature-xai.png' | relative_url }})
*Figure 11. 4가지 복원 시나리오별 예측 지표면 온도(LST) 분포 (파랑: 냉각)*

- 녹지 복원 범위가 커질수록 냉각 효과(파랑)가 뚜렷하게 증가
- LST 변화는 주로 **도로에서 150 m 이내** 에서 발생
- 상업·업무시설과 도로는 LST를 높이고, 하천은 주변을 냉각시키는 효과 확인

전문은 위 **PDF** 또는 **원문 링크(DOI)** 에서 확인할 수 있습니다.
