---
title: Blog
description: 'Blog'
slugOverride: 'blog'
layout: page.njk
translate: true
---
{% if collections.blog_en.groupedByYear | length > 0 %}
  {% for year, posts in collections.blog_en.groupedByYear -%}
    <h2 class="blog-posts-year">{{ year }}</h2>
    <ul class="posts-list">
      {% for post in posts -%}
        <li>
          <a href="{{ post.url }}">{{ post.data.title }}</a><br>
          <span class="post-date-small"> - {{ post.date | localizedDate(lang) }}<!-- , {{ post.data.tags | join(", ") }} --> </span>
        </li>
      {%- endfor %}
    </ul>
  {%- endfor %}
{% else %}
  <p class="centered">There are no articles yet. 😥</p>
{% endif %}