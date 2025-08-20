# 운영 워크플로 가이드

## 새 포스트 작성 체크리스트

### 📝 작성 전 준비
- [ ] 주제 및 목표 독자 명확화
- [ ] 키워드 및 태그 선정 (SEO 고려)
- [ ] 커버 이미지 준비 (1200x630px 권장)
- [ ] 참고 자료 및 링크 정리

### ✍️ 포스트 작성
- [ ] `_posts/YYYY-MM-DD-title.md` 파일 생성
- [ ] Front Matter 작성
  ```yaml
  ---
  layout: post
  title: "포스트 제목"
  date: YYYY-MM-DD
  tags: [tag1, tag2, tag3]
  description: "SEO용 요약 (150자 이내)"
  cover: /assets/img/covers/image.jpg
  ---
  ```
- [ ] 본문 작성 (마크다운 문법 사용)
- [ ] 코드 블록에 언어 지정
- [ ] 이미지 alt 텍스트 작성 (접근성)
- [ ] 내부/외부 링크 검증

### 🔍 검토 및 최적화
- [ ] 맞춤법 및 문법 검사
- [ ] 가독성 확인 (문단 길이, 제목 구조)
- [ ] 이미지 최적화 (WebP 변환, 압축)
- [ ] 메타데이터 검증 (제목, 설명, 태그)
- [ ] 로컬에서 미리보기 확인
  ```bash
  bundle exec jekyll serve --drafts
  ```

### 🚀 배포 및 사후 관리
- [ ] Git 커밋 및 푸시
- [ ] GitHub Pages 빌드 상태 확인
- [ ] 실제 사이트에서 최종 확인
- [ ] 소셜 미디어 공유 (선택사항)
- [ ] Google Search Console 색인 요청

---

## 새 프로젝트 추가 체크리스트

### 📋 프로젝트 정보 준비
- [ ] 프로젝트 개요 및 목표 정리
- [ ] 사용 기술 스택 목록 작성
- [ ] 스크린샷 및 데모 영상 준비
- [ ] GitHub 저장소 README 업데이트
- [ ] 라이선스 정보 확인

### 🎨 시각적 자료 준비
- [ ] 썸네일 이미지 생성 (400x300px)
- [ ] 프로젝트 스크린샷 정리
- [ ] 아키텍처 다이어그램 (필요시)
- [ ] 로고 또는 아이콘 준비

### 📄 문서 작성
- [ ] `_projects/project-name.md` 파일 생성
- [ ] Front Matter 작성
  ```yaml
  ---
  layout: project
  title: "프로젝트 이름"
  date: YYYY-MM-DD
  summary: "한줄 요약"
  role: "역할"
  stack: ["Tech1", "Tech2", "Tech3"]
  status: "released" # released, wip, archived
  featured: true # 홈페이지 노출 여부
  thumb: /assets/img/projects/thumb.png
  repo: "https://github.com/user/repo"
  demo: "https://demo-url.com"
  ---
  ```
- [ ] 프로젝트 상세 설명 작성
- [ ] 기술적 구현 내용 설명
- [ ] 성과 및 학습 내용 정리
- [ ] 향후 계획 작성 (선택사항)

### 🔧 기술적 검증
- [ ] 모든 링크 동작 확인
- [ ] 이미지 경로 및 로딩 확인
- [ ] 반응형 레이아웃 테스트
- [ ] 다크모드에서 확인
- [ ] 접근성 검사 (색상 대비, alt 텍스트)

---

## PR 리뷰 체크리스트

### 📝 콘텐츠 품질
- [ ] 제목이 명확하고 SEO 친화적인가?
- [ ] 내용이 정확하고 유용한가?
- [ ] 문법 및 맞춤법이 올바른가?
- [ ] 적절한 태그가 설정되었는가?
- [ ] 이미지에 alt 텍스트가 있는가?

### 🎨 디자인 및 UX
- [ ] 레이아웃이 일관성 있는가?
- [ ] 모바일에서 잘 보이는가?
- [ ] 다크모드에서 문제없는가?
- [ ] 로딩 속도가 적절한가?
- [ ] 링크가 모두 작동하는가?

### 🔧 기술적 검증
- [ ] Jekyll 빌드가 성공하는가?
- [ ] HTML 유효성 검사 통과하는가?
- [ ] 메타데이터가 올바르게 설정되었는가?
- [ ] 구조화된 데이터가 유효한가?
- [ ] 사이트맵에 포함되는가?

### ♿ 접근성 확인
- [ ] 키보드로 네비게이션 가능한가?
- [ ] 스크린 리더 호환성은?
- [ ] 색상 대비가 충분한가?
- [ ] ARIA 레이블이 적절한가?
- [ ] 포커스 표시가 명확한가?

---

## 릴리즈 태그 및 버전 관리

### 버전 명명 규칙
- **Major (X.0.0)**: 대규모 디자인 변경, 호환성 깨지는 변경
- **Minor (X.Y.0)**: 새로운 기능 추가, 콘텐츠 섹션 추가
- **Patch (X.Y.Z)**: 버그 수정, 콘텐츠 업데이트, 스타일 개선

### 릴리즈 프로세스
1. **변경사항 정리**
   ```bash
   git log --oneline v1.0.0..HEAD
   ```

2. **태그 생성**
   ```bash
   git tag -a v1.1.0 -m "Add search functionality and dark mode"
   git push origin v1.1.0
   ```

3. **GitHub Release 생성**
   - GitHub 웹사이트에서 Release 생성
   - 변경사항 요약 작성
   - 주요 기능 스크린샷 첨부

### 백업 전략
- [ ] 정기적인 전체 저장소 백업
- [ ] 이미지 파일 별도 백업
- [ ] 설정 파일 백업 (`_config.yml`, `Gemfile`)
- [ ] 커스텀 스타일 백업 (`_sass/` 폴더)

---

## 성능 모니터링 체크리스트

### 월간 점검 항목
- [ ] Lighthouse 점수 측정 및 기록
- [ ] Core Web Vitals 확인
- [ ] 이미지 최적화 상태 점검
- [ ] 깨진 링크 검사
- [ ] 검색 기능 동작 확인
- [ ] 모바일 사용성 테스트

### 분기별 점검 항목
- [ ] Jekyll 및 플러그인 업데이트
- [ ] 보안 취약점 스캔
- [ ] SEO 순위 및 트래픽 분석
- [ ] 사용자 피드백 검토
- [ ] 콘텐츠 품질 감사
- [ ] 백업 복구 테스트

### 도구 및 리소스
- **성능 측정**: Lighthouse, PageSpeed Insights
- **SEO 분석**: Google Search Console, Google Analytics
- **링크 검사**: [W3C Link Checker](https://validator.w3.org/checklink)
- **접근성 검사**: [WAVE](https://wave.webaim.org/)
- **HTML 유효성**: [W3C Markup Validator](https://validator.w3.org/)

---

## 문제 해결 가이드

### 자주 발생하는 문제들

#### 1. 빌드 실패
```bash
# 의존성 문제 해결
bundle clean --force
bundle install

# 캐시 문제 해결
bundle exec jekyll clean
bundle exec jekyll build
```

#### 2. 이미지 로딩 문제
- 파일 경로 확인: `/assets/img/` 시작
- 파일명 특수문자 제거
- 이미지 크기 최적화 (2MB 이하)
- WebP 포맷 사용 권장

#### 3. 검색 기능 오류
- `search/search.json` 파일 생성 확인
- Lunr.js CDN 로딩 상태 확인
- 브라우저 콘솔에서 JavaScript 에러 확인

#### 4. 스타일 적용 안됨
- `assets/css/main.scss` 파일 확인
- SCSS 문법 오류 검사
- 브라우저 캐시 강제 새로고침 (Ctrl+F5)

### 긴급 상황 대응
1. **사이트 다운**: GitHub Pages 상태 페이지 확인
2. **보안 문제**: 즉시 저장소 비공개 전환
3. **대량 스팸**: 댓글 시스템 일시 비활성화
4. **성능 저하**: CDN 및 이미지 최적화 점검

이 워크플로를 따라 일관성 있고 품질 높은 콘텐츠를 유지하세요!
