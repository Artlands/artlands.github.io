---
title: 'HAM: Hotspot-Aware Manager for Improving Communications with 3D-Stacked Memory'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Xi Wang
  - Antonino Tumeo
  - John D. Leidel
  - admin
  - Yong Chen

# Author notes (optional)
author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2021-03-18T00:00:00Z'
doi: '10.1109/TC.2021.3066982'

# Schedule page publish date (NOT publication's date).
publishDate: '2021-06-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['2']

# Publication name and optional abbreviated publication name.
publication: In *IEEE Transactions on Computers*
publication_short: In *TC*

abstract: Emerging High-Performance Computing (HPC) workloads, such as graph analytics, machine learning, and big data science, are data-intensive. Data-intensive workloads usually present fine-grained memory accesses with limited or no data locality, and thus incur frequent cache misses and low utilization of memory bandwidth. 3D-stacked memory devices such as Hybrid Memory Cube (HMC) and High Bandwidth Memory (HBM) can provide significantly higher bandwidth than conventional memory modules. However, the traditional interfaces and optimization methods for JEDEC DDR devices do not allow to fully exploit the potential performance of 3D-stacked memory with the massive amount of irregular memory accesses of data-intensive applications. In this article, we propose a novel Hotspot-Aware Manager (HAM) infrastructure for 3D-stacked memory devices capable of optimizing memory access streams via request aggregation, hotspot detection, and in-memory prefetching. We present the HAM design and implementation, and simulate it on a system using RISC-V embedded cores with attached HMC devices. We extensively evaluate HAM with over 12 benchmarks and applications representing diverse irregular memory access patterns. The results show that, on average, HAM reduces redundant requests by 37.51 percent and increases the prefetch buffer hit rate by 4.2 times, compared to a baseline streaming prefetcher. On the selected benchmark set, HAM provides performance gains of 21.81 percent in average (up to 34.28 percent), and power savings of 35.07 percent over a standard 3D-stacked memory.

# Summary. An optional shortened abstract.
summary: 

tags: [HPC, 3D-Stacked Memory, Memory Management, Prefetching, Hotspot Detection]

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
