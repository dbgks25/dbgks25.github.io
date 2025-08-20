# 📝 블로그 포스트 작성 가이드

## 새 포스트 작성하기

### 1. 파일 생성
`_posts/` 폴더에 다음 형식으로 파일을 생성하세요:
```
YYYY-MM-DD-제목.md
```

**예시**: `2024-08-20-jekyll-blog-setup.md`

### 2. Front Matter 설정
파일 상단에 다음과 같은 메타데이터를 추가하세요:

```yaml
---
layout: post
title: "포스트 제목"
date: 2024-08-20 14:00:00 +0900
categories: [카테고리1, 카테고리2]
tags: [태그1, 태그2, 태그3]
description: "포스트 요약 설명 (SEO용)"
excerpt: "포스트 미리보기 텍스트"
---
```

### 3. 필수 필드 설명

- **layout**: 항상 `post`로 설정
- **title**: 포스트 제목 (따옴표로 감싸기)
- **date**: 발행 날짜와 시간 (YYYY-MM-DD HH:MM:SS +0900 형식)
- **categories**: 포스트 분류 (배열 형태)
- **tags**: 검색용 태그 (배열 형태)
- **description**: SEO 메타 설명
- **excerpt**: 목록에서 보여질 요약

### 4. 선택적 필드

```yaml
author: "한유한"           # 작성자 (기본값 사용 시 생략 가능)
cover: "/assets/img/posts/cover.jpg"  # 커버 이미지
thumb: "/assets/img/posts/thumb.jpg"  # 썸네일 이미지
featured: true            # 메인 페이지 추천 포스트
toc: true                # 목차 표시 여부
comments: true           # 댓글 허용 여부
---
```

## 포스트 작성 예시

### 파일명: `_posts/2024-08-20-python-data-analysis.md`

```markdown
---
layout: post
title: "Python으로 데이터 분석하기"
date: 2024-08-20 14:30:00 +0900
categories: [데이터분석, Python]
tags: [python, pandas, matplotlib, 데이터시각화]
description: "Python을 활용한 기초 데이터 분석 방법을 소개합니다."
excerpt: "Pandas와 Matplotlib을 사용하여 CSV 데이터를 분석하고 시각화하는 방법을 단계별로 알아봅시다."
featured: true
toc: true
---

## 개요

이번 포스트에서는 Python을 사용하여 데이터를 분석하는 기초적인 방법을 알아보겠습니다.

## 라이브러리 설치

```bash
pip install pandas matplotlib seaborn
```

## 데이터 불러오기

```python
import pandas as pd
import matplotlib.pyplot as plt

# CSV 파일 읽기
df = pd.read_csv('data.csv')
print(df.head())
```

## 데이터 시각화

```python
# 기본 그래프 생성
plt.figure(figsize=(10, 6))
plt.plot(df['x'], df['y'])
plt.title('데이터 시각화')
plt.show()
```

## 결론

Python을 활용하면 효율적으로 데이터를 분석할 수 있습니다.
```

## 카테고리 및 태그 권장사항

### 주요 카테고리
- `데이터분석`
- `웹개발`
- `연구`
- `Python`
- `JavaScript`
- `튜토리얼`

### 인기 태그
- `python`, `pandas`, `matplotlib`
- `javascript`, `react`, `nodejs`
- `데이터시각화`, `머신러닝`
- `jekyll`, `github-pages`
- `qgis`, `gis`, `위성영상`

## 이미지 추가하기

### 1. 이미지 파일 저장
`assets/img/posts/` 폴더에 이미지를 저장하세요.

### 2. 마크다운에서 이미지 참조
```markdown
![이미지 설명](/assets/img/posts/image-name.jpg)
```

### 3. 반응형 이미지 (권장)
```html
<img src="/assets/img/posts/image-name.jpg" alt="이미지 설명" class="responsive-img">
```

## 코드 블록 사용하기

### 언어별 하이라이팅
```python
def hello_world():
    print("Hello, World!")
```

```javascript
function helloWorld() {
    console.log("Hello, World!");
}
```

```bash
git add .
git commit -m "Add new post"
git push origin main
```

## 수학 수식 (MathJax)

인라인 수식: $E = mc^2$

블록 수식:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## 포스트 발행하기

1. 파일을 `_posts/` 폴더에 저장
2. Git에 커밋하고 푸시:
   ```bash
   git add .
   git commit -m "Add new blog post: 포스트 제목"
   git push origin main
   ```
3. GitHub Actions가 자동으로 사이트를 빌드하고 배포

## 포스트 관리 팁

### 초안 작성
- `_drafts/` 폴더에 파일을 생성하면 발행되지 않음
- 로컬에서 `bundle exec jekyll serve --drafts`로 미리보기 가능

### 포스트 업데이트
- 기존 파일을 수정하고 다시 푸시하면 자동 업데이트

### 포스트 삭제
- 파일을 삭제하고 푸시하면 사이트에서도 제거됨

## 문제 해결

### 포스트가 표시되지 않는 경우
1. 파일명 형식 확인 (`YYYY-MM-DD-title.md`)
2. Front Matter 문법 확인
3. 날짜가 미래로 설정되지 않았는지 확인
4. GitHub Actions 빌드 로그 확인

### 이미지가 로드되지 않는 경우
1. 파일 경로 확인
2. 이미지 파일 존재 여부 확인
3. 파일명 대소문자 확인
