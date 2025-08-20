# dbgks25 · Projects & Blog

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://dbgks25.github.io)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.3+-red)](https://jekyllrb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Twitch Developer Documentation 스타일을 모티브로 한 개인 포트폴리오 및 기술 블로그입니다. Jekyll과 GitHub Pages를 활용하여 구축되었습니다.

## ✨ 주요 기능

- **🎨 Twitch 스타일 디자인**: 퍼플 컬러스킴과 모던한 레이아웃
- **📝 블로그 시스템**: 포스트 작성, 태그 분류, 페이지네이션, RSS 피드
- **🚀 프로젝트 컬렉션**: 상세 프로젝트 페이지, 기술 스택 배지, 릴리즈 노트
- **🔍 검색 기능**: Lunr.js 기반 클라이언트 사이드 검색 (한국어 지원)
- **🌙 다크모드**: 시스템 설정 감지 및 수동 토글 지원
- **📱 반응형 디자인**: 모바일부터 데스크톱까지 완벽 대응
- **♿ 접근성**: WCAG 2.1 AA 기준 준수
- **⚡ 성능 최적화**: Lighthouse 90+ 점수 목표

## 📦 배포

### GitHub Pages 자동 배포

1. **저장소 설정**
   - 저장소명을 `{username}.github.io`로 생성
   - 또는 기존 저장소에서 GitHub Pages 활성화

2. **배포 설정**
   ```bash
   # main 브랜치에 푸시하면 자동 배포
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **GitHub Pages 설정 확인**
   - Repository Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `/ (root)`

### 수동 빌드

```bash
# 프로덕션 빌드
JEKYLL_ENV=production bundle exec jekyll build

# 빌드 결과 확인
ls -la _site/
```

## 📝 콘텐츠 작성

### 새 블로그 포스트 작성

1. **파일 생성**
   ```bash
   # _posts/YYYY-MM-DD-title.md 형식
   touch _posts/2025-01-20-new-post.md
   ```

2. **Front Matter 작성**
   ```yaml
   ---
   layout: post
   title: "포스트 제목"
   date: 2025-01-20
   tags: [tag1, tag2, tag3]
   description: "포스트 요약 설명"
   cover: /assets/img/covers/post-image.jpg
   ---
   
   포스트 내용을 여기에 작성합니다.
   ```

### 새 프로젝트 추가

1. **파일 생성**
   ```bash
   # _projects/project-name.md
   touch _projects/my-awesome-project.md
   ```

2. **Front Matter 작성**
   ```yaml
   ---
   layout: project
   title: "프로젝트 이름"
   date: 2025-01-20
   summary: "프로젝트 한줄 요약"
   role: "개발자"
   stack: ["React", "Node.js", "PostgreSQL"]
   status: "released" # released, wip, archived
   featured: true # 홈페이지 노출 여부
   thumb: /assets/img/projects/project-thumb.png
   repo: "https://github.com/username/repo"
   demo: "https://demo-url.com"
   releases:
     - version: "v1.0"
       date: 2025-01-20
       notes: |
         - 초기 버전 출시
         - 기본 기능 구현
   ---
   
   ## 프로젝트 설명
   
   프로젝트에 대한 자세한 설명을 작성합니다.
   ```

## 🎨 커스터마이징

### 색상 테마 변경

`_sass/_variables.scss` 파일에서 색상 변수 수정:

```scss
:root {
  --color-primary: #9146FF;        // 메인 컬러
  --color-primary-dark: #772CE8;   // 어두운 메인 컬러
  --color-primary-light: #A970FF;  // 밝은 메인 컬러
}
```

### 사이트 정보 수정

`_config.yml` 파일에서 기본 정보 변경:

```yaml
title: "Your Name · Projects & Blog"
email: your-email@example.com
description: >-
  사이트 설명을 여기에 작성하세요.
url: "https://yourusername.github.io"
github_username: yourusername
```

### 네비게이션 메뉴 수정

`_config.yml`의 navigation 섹션:

```yaml
navigation:
  - title: "Home"
    url: "/"
  - title: "Blog"
    url: "/blog/"
  - title: "Projects"
    url: "/projects/"
  - title: "About"
    url: "/about/"
```

## 🔧 고급 설정

### 플러그인 추가

GitHub Pages 호환 플러그인만 사용 가능:

```yaml
# _config.yml
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll-paginate-v2
```

### 검색 기능 커스터마이징

`assets/js/search.js`에서 검색 가중치 조정:

```javascript
searchIndex = lunr(function() {
  this.field('title', { boost: 10 });    // 제목 가중치
  this.field('content', { boost: 5 });   // 내용 가중치
  this.field('tags', { boost: 8 });      // 태그 가중치
});
```

## 📊 성능 모니터링

### Lighthouse 점수 확인

```bash
# Chrome DevTools에서 Lighthouse 실행
# 또는 CLI 도구 사용
npm install -g lighthouse
lighthouse https://yourusername.github.io --output html
```

### Core Web Vitals 측정

사이트에 포함된 Performance Observer 코드가 자동으로 측정:
- LCP (Largest Contentful Paint)
- CLS (Cumulative Layout Shift)
- FID (First Input Delay)

## 🐛 문제 해결

### 일반적인 문제들

1. **빌드 실패**
   ```bash
   # 의존성 재설치
   bundle clean --force
   bundle install
   ```

2. **이미지가 표시되지 않음**
   - `assets/img/` 폴더 구조 확인
   - 이미지 경로가 올바른지 확인
   - 이미지 파일명에 특수문자 없는지 확인

3. **검색 기능 작동 안함**
   - `search/search.json` 파일 생성 확인
   - JavaScript 콘솔에서 에러 메시지 확인
   - Lunr.js CDN 로드 상태 확인

4. **다크모드 토글 안됨**
   - `assets/js/darkmode.js` 로드 확인
   - 브라우저 localStorage 지원 여부 확인

### 디버깅 모드

```bash
# 상세 로그와 함께 실행
bundle exec jekyll serve --verbose --trace
```

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.


