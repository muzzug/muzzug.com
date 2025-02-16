---
title: ''
pagetitle: ''
description: ''
slugOverride: ''
layout: homepage.njk
translate: false
---

<div class="author-homepage">
    <img src="/assets/images/muzz.webp" class="author-avatar-homepage" alt="Muzzug" width="120px" height="120px">
    <h2 class="author-name">Muzzug</h2>
    <p>My goal is something...</p>
</div>

<div class="recent-posts">

### Recent posts

{% if collections.recentPosts_en | length > 0 %}
    {%- for post in collections.recentPosts_en -%}
        <h4 class="">{{ post.date | localizedDate(lang) }}</b> <a href="{{ post.url }}">{{ post.data.title }}</a></h4>
    {% endfor -%}
{% else %}
  <p>There are no articles yet. 😥</p>
{% endif %}
</div>