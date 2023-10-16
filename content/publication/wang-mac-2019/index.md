---
title: 'MAC: Memory Access Coalescer for 3D-Stacked Memory'

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

date: '2019-08-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2023-10-16T19:56:57.954296Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- paper-conference

# Publication name and optional abbreviated publication name.
publication: '*Proceedings of the 48th International Conference on Parallel Processing*'
publication_short: ''

doi: 10.1145/3337821.3337867

abstract: Emerging data-intensive applications, such as graph analytics and data mining,
  exhibit irregular memory access patterns. Research has shown that with these memory-bound
  applications, traditional cache-based processor architectures, which exploit locality
  and regular patterns to mitigate the memory-wall issue, are inefficient. Meantime,
  novel 3D-stacked memory devices, such as Hybrid Memory Cube (HMC) and High Bandwidth
  Memory (HBM), promise significant increases in bandwidth that appear extremely appealing
  for memory-bound applications. However, conventional memory interfaces designed
  for cache-based architectures and JEDEC DDR devices fit poorly with the 3D-stacked
  memory, which leads to significant under-utilization of the promised high bandwidth.
  As a response to these issues, in this paper we propose MAC (Memory Access Coalescer),
  a coalescing unit for the 3D-stacked memory. We discuss the design and implementation
  of MAC, in the context of a custom designed cache-less architecture targeted at
  data-intensive, irregular applications. Through a custom simulation infrastructure
  based on the RISC-V toolchain, we show that MAC achieves a coalescing efficiency
  of 52.85% on average. It improves the performance of the memory system by 60.73%
  on average for a large set of irregular workloads.

# Summary. An optional shortened abstract.
summary: ''

tags:
- 3D-Stacked Memory
- Irregular Applications
- Memory Coalescing

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
  url: https://doi.org/10.1145/3337821.3337867
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
