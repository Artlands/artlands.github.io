---
title: "Analyzing Resource Utilization in an HPC System: A Case Study of NERSC’s Perlmutter"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - George Michelogiannakis
  - Brandon Cook
  - Dulanya Cooray
  - Yong Chen

# Author notes (optional)
author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2023-05-10T00:00:00Z'
doi: 'https://doi.org/10.1007/978-3-031-32041-5_16'

# Schedule page publish date (NOT publication's date).
publishDate: '2023-05-10T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *ISC High Performance 2023 - High Performance Computing*
publication_short: In *ISC 2023*

abstract: Resource demands of HPC applications vary significantly. However, it is common for HPC systems to primarily assign resources on a per-node basis to prevent interference from co-located workloads. This gap between the coarse-grained resource allocation and the varying resource demands can lead to HPC resources being not fully utilized. In this study, we analyze the resource usage and application behavior of NERSC’s Perlmutter, a state-of-the-art open-science HPC system with both CPU-only and GPU-accelerated nodes. Our one-month usage analysis reveals that CPUs are commonly not fully utilized, especially for GPU-enabled jobs. Also, around 64% of both CPU and GPU-enabled jobs used 50% or less of the available host memory capacity. Additionally, about 50% of GPU-enabled jobs used up to 25% of the GPU memory, and the memory capacity was not fully utilized in some ways for all jobs. While our study comes early in Perlmutter’s lifetime thus policies and application workload may change, it provides valuable insights on performance characterization, application behavior, and motivates systems with more fine-grain resource allocation.

# Summary. An optional shortened abstract.
summary: 

tags: [HPC, Large-scale Characterization, Resource Utilization, GPU Utilization, Memory System, Disaggregated Memory]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://link.springer.com/content/pdf/10.1007/978-3-031-32041-5_16.pdf?pdf=inline%20link'
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
