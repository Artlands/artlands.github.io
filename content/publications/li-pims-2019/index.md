---
title: 'PIMS: a lightweight processing-in-memory accelerator for stencil computations'

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Jie Li
- Xi Wang
- Antonino Tumeo
- Brody Williams
- John D. Leidel
- Yong Chen

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2019-09-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2023-10-16T20:08:16.930599Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- 

# Publication name and optional abbreviated publication name.
publication: '*Proceedings of the International Symposium on Memory Systems*'
publication_short: ''

doi: 10.1145/3357526.3357550

abstract: Stencil computation is a classic computational kernel present in many high-performance
  scientific applications, like image processing and partial differential equation
  solvers (PDE). A stencil computation sweeps over a multi-dimensional grid and repeatedly
  updates values associated with points using the values from neighboring points.
  Stencil computations often employ large datasets that exceed cache capacity, leading
  to excessive accesses to the memory subsystem. As such, 3D stencil computations
  on large grid sizes are memory-bound. In this paper we present PIMS, an in-memory
  accelerator for stencil computations. PIMS, implemented in the logic layer of a
  3D-stacked memory, exploits the high bandwidth provided by through-silicon vias
  to reduce redundant memory traffic. Our comprehensive evaluation using three different
  grid sizes with six categories of orders indicate that the proposed architecture
  reduces 48.25% of data movement on average and obtains up to 65.55% of bank conflict
  reduction.

# Summary. An optional shortened abstract.
summary: ''

tags:
- high performance computing
- hybrid memory cube
- processing-in-memory
- stencil computation

# Display this page in a list of Featured pages?
featured: false

# Links
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

# Publication image
# Add an image named `featured.jpg/png` to your page's folder then add a caption below.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects: ['internal-project']` links to `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
links:
- name: URL
  url: https://doi.org/10.1145/3357526.3357550
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
