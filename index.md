---
layout: default
title: "홈"
description: "개인 포트폴리오 및 기술 블로그입니다."
breadcrumb: false
---

<div class="hero-section">
  <h1>안녕하세요, <strong>dbgks25</strong>입니다</h1>
  <p class="hero-description">
    데이터 분석과 웹 개발에 관심이 많은 개발자입니다. 
    연구 프로젝트와 개발 경험을 공유하고 있습니다.
  </p>
  
  <div class="hero-actions">
    <a href="{{ '/blog/' | relative_url }}" class="btn btn-primary">블로그 보기</a>
    <a href="{{ '/projects/' | relative_url }}" class="btn">프로젝트 보기</a>
  </div>
</div>

<section class="recent-content">
  <div class="content-grid">
    <div class="content-section">
      <h2>최근 포스트</h2>
      {% if site.posts.size > 0 %}
        <div class="post-list">
          {% for post in site.posts limit:3 %}
            <article class="post-item">
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y년 %m월 %d일" }}</time>
              <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
            </article>
          {% endfor %}
        </div>
        <a href="{{ '/blog/' | relative_url }}" class="btn btn-sm">모든 포스트 보기</a>
      {% else %}
        <p>아직 포스트가 없습니다.</p>
      {% endif %}
    </div>
    
    <div class="content-section">
      <h2>주요 프로젝트</h2>
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
        <a href="{{ '/projects/' | relative_url }}" class="btn btn-sm">모든 프로젝트 보기</a>
      {% else %}
        <p>아직 프로젝트가 없습니다.</p>
      {% endif %}
    </div>
  </div>
</section>
