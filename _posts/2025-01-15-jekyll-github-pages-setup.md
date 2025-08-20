---
layout: post
title: "Jekyll과 GitHub Pages로 개인 블로그 만들기"
date: 2025-01-15
tags: [jekyll, github-pages, web-development, blog]
description: "Jekyll을 사용해 GitHub Pages에 개인 블로그를 구축하는 과정을 상세히 설명합니다."
cover: /assets/img/covers/jekyll-setup.jpg
---

Jekyll과 GitHub Pages를 활용하면 무료로 개인 블로그를 만들 수 있습니다. 이 포스트에서는 처음부터 끝까지 블로그를 구축하는 과정을 단계별로 설명하겠습니다.

## Jekyll이란?

Jekyll은 Ruby로 작성된 정적 사이트 생성기입니다. Markdown으로 작성한 콘텐츠를 HTML로 변환하여 정적 웹사이트를 생성합니다.

### Jekyll의 장점

- **무료 호스팅**: GitHub Pages에서 무료로 호스팅 가능
- **빠른 속도**: 정적 파일로 구성되어 로딩 속도가 빠름
- **버전 관리**: Git을 통한 콘텐츠 버전 관리
- **커스터마이징**: 테마와 플러그인을 통한 자유로운 커스터마이징

## 설치 및 설정

### 1. Ruby 설치

Jekyll은 Ruby로 작성되었으므로 먼저 Ruby를 설치해야 합니다.

```bash
# macOS (Homebrew 사용)
brew install ruby

# Ubuntu/Debian
sudo apt-get install ruby-full

# Windows
# RubyInstaller 다운로드 및 설치
```

### 2. Jekyll 설치

```bash
gem install jekyll bundler
```

### 3. 새 Jekyll 사이트 생성

```bash
jekyll new my-blog
cd my-blog
bundle exec jekyll serve
```

## GitHub Pages 배포

### 1. GitHub 저장소 생성

GitHub에서 `username.github.io` 형태의 저장소를 생성합니다.

### 2. 로컬 저장소와 연결

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### 3. GitHub Pages 설정

저장소 Settings → Pages에서 Source를 "Deploy from a branch"로 설정하고 main 브랜치를 선택합니다.

## 커스터마이징

### _config.yml 설정

```yaml
title: Your Blog Title
email: your-email@example.com
description: >-
  블로그에 대한 설명을 작성합니다.
baseurl: ""
url: "https://username.github.io"

# Build settings
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```

### 포스트 작성

`_posts` 폴더에 `YYYY-MM-DD-title.md` 형식으로 파일을 생성합니다.

```markdown
---
layout: post
title: "포스트 제목"
date: 2025-01-15
categories: [category1, category2]
tags: [tag1, tag2]
---

포스트 내용을 여기에 작성합니다.
```

## 성능 최적화

### 이미지 최적화

- WebP 형식 사용
- 적절한 크기로 리사이징
- Lazy loading 적용

### SEO 최적화

- `jekyll-seo-tag` 플러그인 사용
- 메타 태그 설정
- 사이트맵 생성

```yaml
# _config.yml
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
```

## 결론

Jekyll과 GitHub Pages를 활용하면 비용 없이 전문적인 블로그를 운영할 수 있습니다. 정적 사이트의 장점을 활용하여 빠르고 안정적인 블로그를 만들어보세요.

다음 포스트에서는 Jekyll 테마 커스터마이징에 대해 더 자세히 다루겠습니다.
