---
layout: default
title: "논문"
description: "직접 작성한 논문을 모아 정리합니다."
permalink: /paper/
breadcrumb: true
---

<div class="list-header">
  <h1>{{ page.title }}</h1>
  <p class="list-description">{{ page.description }}</p>
</div>

{% if site.posts.size > 0 %}
  <div class="card-grid">
    {% for post in site.posts %}
      <div class="card">
        {% include paper-card.html post=post %}
      </div>
    {% endfor %}
  </div>
{% else %}
  <div class="empty-state">
    <p>아직 등록된 논문이 없습니다.</p>
  </div>
{% endif %}
