---
title: "PIMS: A Lightweight Processing-In-Memory Accelerator for Stencil Computations"

event: MEMSYS 2019
event_url: https://www.memsys.io/memsys-2019/

location: Washington DC, USA
address: 

summary: A Conference Presentation for our paper "PIMS-A Lightweight Processing-In-Memory Accelerator for Stencil Computations" at MEMSYS 2019.
abstract: 'Stencil computation is a classic computational kernel present in many high-performance scientific applications, like image processing and partial differential equation solvers (PDE). A stencil computation sweeps over a multi-dimensional grid and repeatedly updates values associated with points using the values from neighboring points. Stencil computations often employ large datasets that exceed cache capacity, leading to excessive accesses to the memory subsystem. As such, 3D stencil computations on large grid sizes are memory-bound. In this paper we present PIMS, an in-memory accelerator for stencil computations. PIMS, implemented in the logic layer of a 3D stacked memory, exploits the high bandwidth provided by through silicon vias to reduce redundant memory traffic. Our comprehensive evaluation using three different grid sizes with six categories of orders indicate that the proposed architecture reduces 48.25% of data movement on average and obtains up to 65.55% of bank conflict reduction.'

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2019-10-01T00:00:00Z'
date_end: '2019-10-03T00:00:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2019-10-01T00:00:00Z'

authors: 
  - admin
  - Xi Wang
  - Antonino Tumeo
  - Brody Williams
  - John D. Leidel
  - Yong Chen
tags: [Stencil, Processing-in-Memory, 3D-Stacked Memory, Computer Architecture, HPC]

# Is this a featured talk? (true/false)
featured: false

image:
  caption: 'MemSys2019'
  focal_point: Right

links:
  # - icon: twitter
  #   icon_pack: fab
  #   name: Follow
  #   url: https://twitter.com/georgecushen
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

<!-- {{% callout note %}}
Click on the **Slides** button above to view the built-in slides feature.
{{% /callout %}}

Slides can be added in a few ways:

- **Create** slides using Wowchemy's [_Slides_](https://wowchemy.com/docs/managing-content/#create-slides) feature and link using `slides` parameter in the front matter of the talk file
- **Upload** an existing slide deck to `static/` and link using `url_slides` parameter in the front matter of the talk file
- **Embed** your slides (e.g. Google Slides) or presentation video on this page using [shortcodes](https://wowchemy.com/docs/writing-markdown-latex/).

Further event details, including [page elements](https://wowchemy.com/docs/writing-markdown-latex/) such as image galleries, can be added to the body of this page. -->
