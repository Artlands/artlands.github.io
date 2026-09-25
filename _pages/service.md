---
layout: page
permalink: /service/
title: Service
nav: true
nav_order: 3
---

<div class="cv-page" markdown="1">

## Center Leadership

{% include cv_entries.liquid entries=site.data.service.leadership %}

## Professional Service

<dl class="cv-rows">
  {% for row in site.data.service.professional_service %}
    <dt>{{ row.label }}</dt>
    <dd>{{ row.items | join: ' · ' }}</dd>
  {% endfor %}
</dl>

## Awards and Honors

{% include cv_entries.liquid entries=site.data.service.awards %}

</div>
