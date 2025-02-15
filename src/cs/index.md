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
    <p>Mým cílem je něco...</p>
</div>

<div class="recent-posts">

### Poslední příspěvky

{% if collections.recentPosts_cz | length > 0 %}
    {%- for post in collections.recentPosts_cz -%}
        <h4 class="">{{ post.date | localizedDate(lang) }}</b> <a href="{{ post.url }}">{{ post.data.title }}</a></h4>
    {% endfor -%}
{% else %}
  <p>Zatím tady nejsou žádné články. 😥</p>
{% endif %}
</div>