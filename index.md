---
layout: default
title: "홈"
description: "직접 작성한 논문과 과제, 연구 프로젝트를 모아 정리하는 아카이브입니다."
breadcrumb: false
---

<section class="hero-section">
  <h1><strong>깡돌</strong>의 연구 아카이브</h1>
  <p class="hero-description">
    직접 작성한 <strong>논문</strong>과 수행한 <strong>연구과제</strong>를
    한곳에 모아 정리합니다. 데이터 분석과 환경·공간 연구를 주로 다룹니다.
  </p>

  <div class="hero-actions">
    <a href="{{ '/paper/' | relative_url }}" class="btn btn-primary">논문 보기</a>
    <a href="{{ '/projects/' | relative_url }}" class="btn">연구과제 보기</a>
  </div>
</section>

<section class="recent-content">
  <div class="content-grid">
    <div class="content-section">
      <h2>최근 논문</h2>
      {% if site.posts.size > 0 %}
        <div class="post-list">
          {% for post in site.posts limit:4 %}
            <article class="post-item">
              <div class="post-item-head">
                <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              </div>
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
              {% if post.venue %}<span class="post-item-venue">{{ post.venue }}</span>{% endif %}
            </article>
          {% endfor %}
        </div>
        <a href="{{ '/paper/' | relative_url }}" class="btn btn-sm">전체 보기</a>
      {% else %}
        <p class="empty-hint">아직 등록된 논문이 없습니다.</p>
      {% endif %}
    </div>

    <div class="content-section">
      <h2>주요 연구과제</h2>
      {% assign featured_projects = site.projects | where: "featured", true %}
      {% if featured_projects.size > 0 %}
        <div class="project-list">
          {% for project in featured_projects limit:3 %}
            <article class="project-item">
              <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
              <p>{{ project.summary | truncate: 100 }}</p>
              {% if project.stack %}
                <div class="tech-stack">
                  {% for tech in project.stack limit:3 %}
                    <span class="badge badge-{{ tech | downcase | replace: '.', '' | replace: ' ', '' }}">{{ tech }}</span>
                  {% endfor %}
                </div>
              {% endif %}
            </article>
          {% endfor %}
        </div>
        <a href="{{ '/projects/' | relative_url }}" class="btn btn-sm">모든 연구과제 보기</a>
      {% else %}
        <p class="empty-hint">아직 등록된 연구과제가 없습니다.</p>
      {% endif %}
    </div>
  </div>
</section>
