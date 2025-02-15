---
title: 'More'
pagetitle: 'More pages'
description: 'More pages...'
slugOverride: 'explore'
layout: page.njk
translate: true
---
{% set sortedPages = all_pages[page.lang] | sort(attribute="text") %}

{% for item in sortedPages %}
    <span class="bigger-font"><a href="{{ item.url }}" {{ helpers.getLinkActiveState(item.url, page.url) | safe }}>{{ item.text }}</a></span><br>
    {{ item.description }}
{% endfor %}