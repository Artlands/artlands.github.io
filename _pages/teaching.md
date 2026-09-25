---
layout: page
permalink: /teaching/
title: Teaching
nav: true
nav_order: 2
---

<div class="cv-page" markdown="1">

## Teaching Interests

{{ site.data.teaching.interests }}

## Teaching Experience

{% include cv_entries.liquid entries=site.data.teaching.experience %}

## Research Mentoring

### Graduate Students

{% include cv_entries.liquid entries=site.data.teaching.graduate_students %}

### Undergraduate Students

{% include cv_entries.liquid entries=site.data.teaching.undergraduate_students %}

</div>
