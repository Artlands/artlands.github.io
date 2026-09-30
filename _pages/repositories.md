---
layout: page
permalink: /software/
title: Software
description: Open-source software from my research, plus tools I built for everyday work.
nav: true
nav_order: 5
---

{% if site.data.repositories.github_repos %}

## Research Software

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}

{% if site.data.repositories.github_tools %}

## Tools

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_tools %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
