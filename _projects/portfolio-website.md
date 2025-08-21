---
layout: project
title: "Jekyll 포트폴리오 웹사이트"
date: 2025-01-20
summary: "Twitch Developer Documentation 스타일의 개인 포트폴리오 및 기술 블로그"
role: "풀스택 개발자"
stack: ["Jekyll", "SCSS", "JavaScript", "GitHub Pages"]
status: "wip"
featured: true
repo: "https://github.com/dbgks25/dbgks25.github.io"
demo: "https://dbgks25.github.io"
releases:
  - version: "v1.0"
    date: 2025-01-20
    notes: |
      - 초기 버전 출시
      - Twitch 스타일 디자인 시스템 구현
      - 반응형 레이아웃 및 다크모드 지원
      - 검색 기능 (Lunr.js) 구현
---

## 프로젝트 개요

**Twitch Developer Documentation** 스타일을 모티브로 한 개인 포트폴리오 및 기술 블로그입니다. Jekyll과 GitHub Pages를 활용하여 무료 호스팅하며, 블로그와 프로젝트 섹션을 통합한 원스톱 개발자 포트폴리오를 제공합니다.

### 핵심 기능

- **블로그 시스템**: 포스트 작성, 태그 분류, 페이지네이션, RSS 피드
- **프로젝트 컬렉션**: 상세 프로젝트 페이지, 기술 스택 배지, 릴리즈 노트
- **검색 기능**: Lunr.js 기반 클라이언트 사이드 검색 (한국어 지원)
- **반응형 디자인**: 모바일부터 데스크톱까지 완벽 대응

## 디자인 시스템

### Twitch 브랜드 컬러 팔레트

```scss
:root {
  --color-primary: #9146FF;        // Twitch Purple
  --color-primary-dark: #772CE8;   // Darker Purple
  --color-primary-light: #A970FF;  // Lighter Purple
  --color-primary-alpha: rgba(145, 70, 255, 0.1);
}
```

### 레이아웃 구조

- **좌측 고정 사이드바**: 280px 너비, 네비게이션 및 최근 콘텐츠
- **메인 콘텐츠**: 최대 800px 너비, 가독성 최적화
- **모바일 햄버거 메뉴**: 1024px 이하에서 오버레이 사이드바

## 기술적 구현

### Jekyll 컬렉션 활용

```yaml
# _config.yml
collections:
  projects:
    output: true
    permalink: /:collection/:name/

defaults:
  - scope:
      path: ""
      type: "projects"
    values:
      layout: "project"
      author: "dbgks25"
```

### 검색 시스템

Lunr.js를 활용한 클라이언트 사이드 검색:

```javascript
// 검색 인덱스 생성
searchIndex = lunr(function() {
  this.ref('id');
  this.field('title', { boost: 10 });
  this.field('content', { boost: 5 });
  this.field('tags', { boost: 8 });
  
  searchData.forEach(function(doc) {
    this.add(doc);
  }, this);
});
```

### 다크모드 구현

시스템 설정 감지 및 사용자 선택 저장:

```javascript
function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' : 'light';
}
```

## 성능 최적화

### Lighthouse 점수 목표

- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 100
- **SEO**: 100

### 최적화 기법

1. **이미지 최적화**
   - WebP 포맷 사용
   - Lazy loading 구현
   - 적절한 크기 설정

2. **CSS/JS 최적화**
   - Critical CSS 인라인
   - 미사용 코드 제거
   - 압축 및 번들링

3. **접근성 강화**
   - ARIA 레이블 적용
   - 키보드 네비게이션 지원
   - Skip link 구현

## 컴포넌트 시스템

### 재사용 가능한 카드 컴포넌트

```html
<!-- _includes/project-card.html -->
<div class="card">
  <div class="card-header">
    <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
    <span class="status status-{{ project.status }}">
      {{ project.status | capitalize }}
    </span>
  </div>
  <div class="card-content">
    <p>{{ project.summary }}</p>
  </div>
  <div class="card-footer">
    <ul class="badge-list">
      {% for tech in project.stack %}
        <li class="badge badge-{{ tech | slugify }}">{{ tech }}</li>
      {% endfor %}
    </ul>
  </div>
</div>
```

### 기술 스택 배지 시스템

동적 색상 매핑으로 기술별 브랜드 컬러 적용:

```scss
.badge {
  &.badge-react { border-color: #61dafb; color: #61dafb; }
  &.badge-vue { border-color: #4fc08d; color: #4fc08d; }
  &.badge-python { border-color: #3776ab; color: #3776ab; }
  &.badge-javascript { border-color: #f7df1e; color: #f7df1e; }
}
```

## SEO 및 메타데이터

### 구조화된 데이터

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "{% if page.layout == 'post' %}BlogPosting{% else %}WebSite{% endif %}",
  "headline": "{{ page.title }}",
  "description": "{{ page.description }}",
  "author": {
    "@type": "Person",
    "name": "{{ site.author.name }}"
  }
}
</script>
```

### Open Graph 메타태그

```html
<meta property="og:type" content="{% if page.layout == 'post' %}article{% else %}website{% endif %}">
<meta property="og:title" content="{{ page.title }}">
<meta property="og:description" content="{{ page.description }}">
<meta property="og:image" content="{{ page.cover | absolute_url }}">
```

## 배포 및 CI/CD

### GitHub Actions 워크플로

```yaml
name: Build and Deploy
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.0
      - name: Build site
        run: |
          bundle install
          bundle exec jekyll build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

## 향후 개선 계획

### Phase 2: 고급 기능
- **댓글 시스템**: Utterances 또는 Giscus 연동
- **분석 도구**: Google Analytics 4 연동
- **PWA 지원**: Service Worker 및 Web App Manifest

### Phase 3: 콘텐츠 관리
- **CMS 연동**: Forestry 또는 Netlify CMS
- **자동 이미지 최적화**: GitHub Actions 기반
- **다국어 지원**: Jekyll Multiple Languages 플러그인

---

이 프로젝트는 **개발자 개인 브랜딩**과 **기술적 역량 증명**을 동시에 달성하는 것을 목표로 합니다. 모든 코드는 오픈소스로 공개되어 있어 다른 개발자들도 참고할 수 있습니다.
