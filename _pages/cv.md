---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 4
---

<div class="cv-page" markdown="1">

<p class="cv-download">
  Research Assistant Professor, Department of Computer Science, Texas Tech University ·
  <a href="mailto:jie.li@ttu.edu">jie.li@ttu.edu</a>
  <br>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ '/assets/pdf/CV_JieLi.pdf' | relative_url }}" target="_blank" rel="noopener"><i class="fa-solid fa-file-pdf"></i> Download PDF</a>
</p>

## Research Interests

{{ site.data.cv.research_interests.summary }}

<ul class="cv-summary-list">
  {% for area in site.data.cv.research_interests.areas %}
    <li>{{ area | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>
  {% endfor %}
</ul>

## Education

{% include cv_entries.liquid entries=site.data.cv.education %}

## Academic Appointments and Research Experience

{% include cv_entries.liquid entries=site.data.cv.appointments %}

## Grants and Proposals

{% include cv_entries.liquid entries=site.data.cv.grants %}

## Peer-Reviewed Publications

<div class="publications">
{% bibliography --query @*[journal!~arXiv] %}
</div>

## Preprints

<div class="publications">
{% bibliography --query @*[journal~=arXiv] %}
</div>

## Manuscripts Under Submission or Revision

<ul class="cv-summary-list">
  {% for m in site.data.cv.manuscripts %}
    <li>{{ m | markdownify | remove: '<p>' | remove: '</p>' | strip }}</li>
  {% endfor %}
</ul>

## Open-Source Research Software

{% include cv_entries.liquid entries=site.data.cv.software %}

## Teaching

{{ site.data.teaching.interests }}

{% include cv_entries.liquid entries=site.data.teaching.experience %}

## Research Mentoring

### Graduate Students

{% include cv_entries.liquid entries=site.data.teaching.graduate_students %}

### Undergraduate Students

{% include cv_entries.liquid entries=site.data.teaching.undergraduate_students %}

## Presentations

{% include cv_entries.liquid entries=site.data.cv.presentations %}

## Refereed Posters

{% include cv_entries.liquid entries=site.data.cv.posters %}

## Awards and Honors

{% include cv_entries.liquid entries=site.data.service.awards %}

## Professional Service

<dl class="cv-rows">
  {% for row in site.data.service.professional_service %}
    <dt>{{ row.label }}</dt>
    <dd>{{ row.items | join: ' · ' }}</dd>
  {% endfor %}
</dl>

</div>
