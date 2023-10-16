---
title: 'HAM: Hotspot-Aware Manager for Improving Communications With 3D-Stacked Memory'

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Xi Wang
- Antonino Tumeo
- John D. Leidel
- Jie Li
- Yong Chen

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2021-06-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2023-10-16T19:56:57.972739Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- article-journal

# Publication name and optional abbreviated publication name.
publication: '*IEEE Transactions on Computers*'
publication_short: ''

doi: 10.1109/TC.2021.3066982

abstract: Emerging High-Performance Computing (HPC) workloads, such as graph analytics,
  machine learning, and big data science, are data-intensive. Data-intensive workloads
  usually present fine-grained memory accesses with limited or no data locality, and
  thus incur frequent cache misses and low utilization of memory bandwidth. 3D-stacked
  memory devices such as Hybrid Memory Cube (HMC) and High Bandwidth Memory (HBM)
  can provide significantly higher bandwidth than conventional memory modules. However,
  the traditional interfaces and optimization methods for JEDEC DDR devices do not
  allow to fully exploit the potential performance of 3D-stacked memory with the massive
  amount of irregular memory accesses of data-intensive applications. In this article,
  we propose a novel Hotspot-Aware Manager (HAM) infrastructure for 3D-stacked memory
  devices capable of optimizing memory access streams via request aggregation, hotspot
  detection, and in-memory prefetching. We present the HAM design and implementation,
  and simulate it on a system using RISC-V embedded cores with attached HMC devices.
  We extensively evaluate HAM with over 12 benchmarks and applications representing
  diverse irregular memory access patterns. The results show that, on average, HAM
  reduces redundant requests by 37.51 percent and increases the prefetch buffer hit
  rate by 4.2 times, compared to a baseline streaming prefetcher. On the selected
  benchmark set, HAM provides performance gains of 21.81 percent in average (up to
  34.28 percent), and power savings of 35.07 percent over a standard 3D-stacked memory.

# Summary. An optional shortened abstract.
summary: ''

tags: []

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
  url: https://ieeexplore.ieee.org/abstract/document/9381710
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
