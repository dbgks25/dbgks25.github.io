---
title: "Crime mapping in urban environments using explainable AI: A case study of Daegu, Korea"
date: 2025-06-04
authors: ["Geunhan Kim", "Youngtae Cho", "Yuhan Han", "Gunwon Lee"]
venue: "Sustainable Cities and Society, 130, 106507 (2025)"
tags: [범죄지도, 설명가능AI, XGBoost, 도시안전, CPTED]
description: "대구시를 사례로 112 신고 위치 주변 버퍼존의 환경 특성과 범죄 유형의 관계를 XGBoost·SHAP로 분석해 고해상도 범죄위험지도를 작성한 연구입니다."
pdf: /assets/papers/crime-mapping-explainable-ai-daegu.pdf
link: https://doi.org/10.1016/j.scs.2025.106507
---

Sustainable Cities and Society에 게재된 논문입니다.

### 배경
도시 안전은 지속가능한 도시의 핵심 요소(SDG 11)이며, 환경범죄학은 도시 환경 특성이
범죄 발생에 큰 영향을 미친다고 봅니다(CPTED).

### 필요성
기존의 통계 기반 범죄 추정은 공간 해상도가 낮아 정책 활용에 한계가 있습니다.
**해석 가능하고 공간적으로 세밀한** 범죄 예측이 필요합니다.

### 목적
대구광역시를 사례로, 범죄 유형별로 도시 환경 특성과의 관계를 분석하고 고해상도
범죄위험지도를 작성하며, 기존 CCTV 설치의 적정성을 평가하는 것을 목적으로 합니다.

### 방법론
- **데이터**: 112 신고 위치를 중심으로 10 ~ 50 m 버퍼존을 생성해 구역 통계(zonal statistics)로 구조화
- **모델**: XGBoost + **SHAP**(Shapley Additive exPlanations)로 변수 영향 해석
- **군집 분석**: Getis-Ord Gi* 로 고위험 지역 군집 탐지

### 주요 결과

![범죄 고확률 지역 지도(빨강: 강력·기타 범죄, 파랑: 질서유지 범죄)]({{ '/assets/img/papers/crime-mapping-explainable-ai-daegu.png' | relative_url }})
*Fig. 18. 범죄 발생 고확률 지역 지도 — 빨강: 강력·기타 범죄, 파랑: 질서 유지 관련 범죄*

- 상업시설, 유동인구, 신용카드 거래량, 가구 수, 도로 면적이 대부분의 범죄 유형에서 일관되게 유의
- **10 m 버퍼** 규모에서 예측 성능이 가장 높음
- 범죄 유형별로 고위험 지역의 공간 군집 양상이 뚜렷이 다르게 나타남

전문은 위 **PDF** 또는 **원문 링크(DOI)** 에서 확인할 수 있습니다.
