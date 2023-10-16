---
title: 'Analyzing Resource Utilization in an HPC System: A Case Study of NERSC’s Perlmutter'

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Jie Li
- George Michelogiannakis
- Brandon Cook
- Dulanya Cooray
- Yong Chen

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2023-01-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2023-10-16T19:56:58.021637Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- paper-conference

# Publication name and optional abbreviated publication name.
publication: '*High Performance Computing*'
publication_short: ''

doi: 10.1007/978-3-031-32041-5_16

abstract: Resource demands of HPC applications vary significantly. However, it is
  common for HPC systems to primarily assign resources on a per-node basis to prevent
  interference from co-located workloads. This gap between the coarse-grained resource
  allocation and the varying resource demands can lead to HPC resources being not
  fully utilized. In this study, we analyze the resource usage and application behavior
  of NERSC’s Perlmutter, a state-of-the-art open-science HPC system with both CPU-only
  and GPU-accelerated nodes. Our one-month usage analysis reveals that CPUs are commonly
  not fully utilized, especially for GPU-enabled jobs. Also, around 64% of both CPU
  and GPU-enabled jobs used 50% or less of the available host memory capacity. Additionally,
  about 50% of GPU-enabled jobs used up to 25% of the GPU memory, and the memory capacity
  was not fully utilized in some ways for all jobs. While our study comes early in
  Perlmutter’s lifetime thus policies and application workload may change, it provides
  valuable insights on performance characterization, application behavior, and motivates
  systems with more fine-grain resource allocation.

# Summary. An optional shortened abstract.
summary: ''

tags:
- Disaggregated Memory
- GPU Utilization
- HPC
- Large-scale Characterization
- Memory System
- Resource Utilization

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
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
