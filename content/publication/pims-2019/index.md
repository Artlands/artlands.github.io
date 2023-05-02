---
title: 'PIMS: a lightweight processing-in-memory accelerator for stencil computations'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Xi Wang
  - Antonino Tumeo
  - Brody Williams
  - John D. Leidel
  - Yong Chen

# Author notes (optional)
author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2019-09-30T00:00:00Z'
doi: '10.1145/3357526.3357550'

# Schedule page publish date (NOT publication's date).
publishDate: '2019-09-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the International Symposium on Memory Systems*
publication_short: In *MemSys*

abstract: Stencil computation is a classic computational kernel present in many high-performance scientific applications, like image processing and partial differential equation solvers (PDE). A stencil computation sweeps over a multi-dimensional grid and repeatedly updates values associated with points using the values from neighboring points. Stencil computations often employ large datasets that exceed cache capacity, leading to excessive accesses to the memory subsystem. As such, 3D stencil computations on large grid sizes are memory-bound. In this paper we present PIMS, an in-memory accelerator for stencil computations. PIMS, implemented in the logic layer of a 3D stacked memory, exploits the high bandwidth provided by through silicon vias to reduce redundant memory traffic. Our comprehensive evaluation using three different grid sizes with six categories of orders indicate that the proposed architecture reduces 48.25% of data movement on average and obtains up to 65.55% of bank conflict reduction.



# Summary. An optional shortened abstract.
summary: 

tags: [Stencil, Processing-in-Memory, 3D-Stacked Memory, Computer Architecture, HPC]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
# url_code: 'https://github.com/wowchemy/wowchemy-hugo-themes'
# url_dataset: 'https://github.com/wowchemy/wowchemy-hugo-themes'
url_poster: ''
url_project: ''
url_slides: ''
# url_source: 'https://github.com/wowchemy/wowchemy-hugo-themes'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
