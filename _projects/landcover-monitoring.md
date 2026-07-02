---
layout: project
title: "위성영상 기반 토지피복 변화 모니터링"
date: 2023-11-30
period: "2023.03 – 2023.11"
agency: "서울시립대학교 산학협력단 (예시)"
role: "연구보조원"
summary: "다시기 위성영상을 활용해 수도권 토지피복 변화를 탐지하고 도시화 경향을 분석한 연구과제"
stack: ["Python", "QGIS", "scikit-learn"]
status: "released"
featured: true
# repo: "https://github.com/dbgks25/landcover-change"
# link: "https://example.org/report"
tags: [원격탐사, 토지피복, GIS]
---

> 이 글은 연구과제 항목의 **예시**입니다. 위쪽 front matter(지원기관·연구기간·역할 등)와
> 아래 내용을 실제 과제에 맞게 수정해 사용하세요.

## 연구 개요

다시기(multi-temporal) 위성영상을 이용해 수도권의 토지피복 변화를 분류하고,
도시화가 진행된 지역을 정량적으로 탐지하는 것을 목표로 한 연구과제입니다.

## 주요 내용

- **자료**: Landsat 8/9, Sentinel-2 지표면 반사율
- **방법**: 감독분류(Random Forest) 기반 토지피복 분류 및 변화 탐지
- **분석 대상**: 서울·경기 일부 지역, 2018년 대비 2023년

```python
from sklearn.ensemble import RandomForestClassifier

clf = RandomForestClassifier(n_estimators=300, random_state=42)
clf.fit(X_train, y_train)          # 밴드·지수 → 토지피복 클래스
change = classify(t2) - classify(t1)  # 변화 탐지
```

## 성과

- 분류 전체 정확도 **약 89%**, Kappa 0.85
- 시가화 지역 확대 구간을 지도화하여 도시화 경향 정량화

## 역할

위성영상 전처리, 학습 데이터 구축, 분류·변화 탐지 코드 작성을 담당했습니다.
