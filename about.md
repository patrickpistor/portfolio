---
layout: default
title: About
permalink: /about/
---

<section class="about">
  <div class="container">
    <div class="about__header">
      <h1>About me</h1>
      <p>{{ site.description }}</p>
    </div>

    <div class="about__body">

      <!-- Bio -->
      <div class="about__bio">
        <div class="prose">
          {{ site.about_bio | markdownify }}
        </div>

        <!-- Skills -->
        {% if site.skills %}
        <div class="about__skills">
          <p class="about__skills-heading">What I do</p>
          <ul class="about__skills-list" role="list">
            {% for skill in site.skills %}
            <li><span class="tag">{{ skill }}</span></li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}

        <!-- Social links -->
        {% if site.social_links %}
        <div class="about__social">
          {% for social in site.social_links %}
          <a href="{{ social.url }}" target="_blank" rel="noopener noreferrer">
            {% include icons/{{ social.icon }}.html %}
            {{ social.label }}
          </a>
          {% endfor %}
        </div>
        {% endif %}
      </div>

      <!-- Avatar -->
      {% if site.avatar and site.avatar != "" %}
      <div class="about__avatar">
        <img src="{{ site.avatar | relative_url }}?v={{ site.time | date: '%s' }}" alt="{{ site.title }}">
      </div>
      {% endif %}

    </div>
  </div>
</section>
