---
layout: post
title: "웹 개발 모범 사례와 성능 최적화"
date: 2025-01-10
tags: [web-development, performance, best-practices, javascript]
description: "모던 웹 개발에서 지켜야 할 모범 사례와 성능 최적화 기법들을 소개합니다."
cover: /assets/img/covers/web-best-practices.jpg
---

웹 개발에서 성능과 사용자 경험을 향상시키기 위한 핵심 원칙들을 정리해보겠습니다.

## 성능 최적화 기본 원칙

### 1. 리소스 최적화

**이미지 최적화**
- WebP, AVIF 등 모던 이미지 포맷 사용
- 적절한 크기와 해상도로 리사이징
- Lazy loading 구현

```html
<img src="image.webp" 
     alt="설명" 
     loading="lazy"
     width="800" 
     height="600">
```

**CSS/JavaScript 최적화**
- 미사용 코드 제거 (Tree shaking)
- 압축 및 번들링
- Critical CSS 인라인 처리

### 2. 네트워크 최적화

**HTTP/2 활용**
- 멀티플렉싱으로 동시 요청 처리
- 서버 푸시 활용
- 헤더 압축

**CDN 사용**
```html
<!-- CDN을 통한 라이브러리 로드 -->
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
```

## 접근성 (Accessibility)

### ARIA 레이블 활용

```html
<button aria-label="메뉴 열기" aria-expanded="false">
  <span class="hamburger-icon"></span>
</button>

<nav role="navigation" aria-label="메인 네비게이션">
  <ul>
    <li><a href="/">홈</a></li>
    <li><a href="/about">소개</a></li>
  </ul>
</nav>
```

### 키보드 네비게이션

```css
/* 포커스 스타일 */
.btn:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

## 보안 모범 사례

### Content Security Policy (CSP)

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
               style-src 'self' 'unsafe-inline';">
```

### XSS 방지

```javascript
// 사용자 입력 검증 및 이스케이프
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 안전한 DOM 조작
const userInput = escapeHtml(input.value);
element.textContent = userInput; // innerHTML 대신 textContent 사용
```

## 모던 JavaScript 패턴

### ES6+ 활용

```javascript
// 구조 분해 할당
const { name, email } = user;

// 템플릿 리터럴
const message = `안녕하세요, ${name}님!`;

// 화살표 함수
const users = data.map(item => ({
  id: item.id,
  name: item.name
}));

// async/await
async function fetchUserData(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('사용자 데이터 로드 실패:', error);
    throw error;
  }
}
```

### 에러 처리

```javascript
// 전역 에러 핸들러
window.addEventListener('error', (event) => {
  console.error('전역 에러:', event.error);
  // 에러 로깅 서비스로 전송
});

// Promise 에러 처리
window.addEventListener('unhandledrejection', (event) => {
  console.error('처리되지 않은 Promise 거부:', event.reason);
  event.preventDefault();
});
```

## 반응형 디자인

### Mobile-First 접근

```css
/* 기본 스타일 (모바일) */
.container {
  padding: 1rem;
  max-width: 100%;
}

/* 태블릿 */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* 데스크톱 */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}
```

### Flexbox와 Grid 활용

```css
/* Flexbox로 센터링 */
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid 레이아웃 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

## 테스트 전략

### 단위 테스트 예시

```javascript
// Jest를 사용한 단위 테스트
describe('유틸리티 함수', () => {
  test('이메일 유효성 검사', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
  });
  
  test('날짜 포맷팅', () => {
    const date = new Date('2025-01-10');
    expect(formatDate(date)).toBe('2025년 1월 10일');
  });
});
```

## 성능 모니터링

### Core Web Vitals 측정

```javascript
// LCP (Largest Contentful Paint) 측정
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry.startTime);
  }
}).observe({ entryTypes: ['largest-contentful-paint'] });

// CLS (Cumulative Layout Shift) 측정
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      console.log('CLS:', entry.value);
    }
  }
}).observe({ entryTypes: ['layout-shift'] });
```

## 결론

웹 개발에서 성능, 접근성, 보안은 선택이 아닌 필수입니다. 이러한 모범 사례들을 프로젝트 초기부터 적용하면 더 나은 사용자 경험을 제공할 수 있습니다.

지속적인 학습과 최신 트렌드 파악을 통해 더 나은 개발자가 되어보세요!
