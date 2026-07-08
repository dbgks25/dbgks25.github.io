---
title: "Impact of natural and artificial cover on LST in cities, with a focus on comparison of single- and multi-ring buffers"
date: 2026-06-30
authors: ["정윤남", "한유한", "이건원", "김근한"]
venue: "Sustainable Cities and Society, 148, 107669 (2026)"
tags: [도시열섬, 지표온도, 다중링버퍼, 설명가능AI, 원격탐사]
description: "단일 버퍼가 하나의 평균으로 뭉개버리는 거리별 영향을 드러내기 위해, 거리를 명시한 다중 링 버퍼(multi-ring buffer) 프레임워크로 서울의 지표면 온도(LST)를 분석한 연구입니다."
pdf: /assets/papers/lst-single-multi-ring-buffer.pdf
link: https://doi.org/10.1016/j.scs.2026.107669
---

Sustainable Cities and Society에 게재된 논문입니다.

### 배경
도시 열섬(UHI)은 도시화된 지역이 주변보다 지표·기온이 높은 현상으로, 흔히 녹지 조성으로
완화합니다. 지표면 온도(LST)는 UHI 강도를 대표하는 지표로 널리 쓰입니다.

### 필요성
기존의 단일 버퍼(single-buffer) 기반 분석은 주변 조건을 **하나의 평균으로 뭉개버려**,
각 요인이 가장 큰 영향을 미치는 거리를 식별하지 못합니다. 정책 수립에는 "어느 거리에서"
효과가 나타나는지가 중요합니다.

### 목적
서울을 대상으로 **거리를 명시한 다중 링 버퍼(multi-ring buffer)** 프레임워크를 개발해,
토지피복·식생·지형 요인이 LST에 영향을 미치는 거리대(distance band)를 규명하는 것을
목적으로 합니다.

### 방법론
- **자료**: Landsat 기반 LST, Sentinel-2 식생지수, 상세 토지피복, 지형
- **버퍼**: 50~500m 동심원(concentric) 링으로 거리대별 영향 분해
- **모델**: XGBoost·LightGBM·Random Forest·CatBoost 비교, **SHAP** 로 해석
- **시나리오**: 도로 → 녹지 복원(road-greening) 시뮬레이션

### 주요 결과

![base 및 4개 도로복원 시나리오별 예측 LST 공간분포]({{ '/assets/img/papers/lst-single-multi-ring-buffer.png' | relative_url }})
*Fig. 12. 기준(base)과 4개 도로복원 시나리오별 예측 LST 공간분포 (a) 기준 (b)~(e) 복원 수준 1~4*

- 단일 버퍼 평균이 가려버린 **비단조적(non-monotonic) 거리 효과**를 다중 링으로 드러냄
- NDBI는 **100m** 링에서, 식생·수분 지표는 **50~100m** 대역에서 최대 냉각, 고도 효과는 **200~350m** 에서 가장 강함
- 도로 녹화 시나리오에서 초여름 주간 기준 복원 구간 **약 150m 이내** 냉각 효과 확인

전문은 위 **PDF** 또는 **원문 링크(DOI)** 에서 확인할 수 있습니다.
