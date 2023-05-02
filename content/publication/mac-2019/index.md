---
title: 'MAC: Memory access coalescer for 3D-stacked memory'

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

date: '2019-08-05T00:00:00Z'
doi: '10.1145/3337821.3337867'

# Schedule page publish date (NOT publication's date).
publishDate: '2019-08-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *Proceedings of the 48th International Conference on Parallel Processing*
publication_short: In *ICPP*

abstract: Emerging data-intensive applications, such as graph analytics and data mining, exhibit irregular memory access patterns. Research has shown that with these memory-bound applications, traditional cache-based processor architectures, which exploit locality and regular patterns to mitigate the memory-wall issue, are inefficient. Meantime, novel 3D-stacked memory devices, such as Hybrid Memory Cube (HMC) and High Bandwidth Memory (HBM), promise significant increases in bandwidth that appear extremely appealing for memory-bound applications. However, conventional memory interfaces designed for cache-based architectures and JEDEC DDR devices fit poorly with the 3D-stacked memory, which leads to significant under-utilization of the promised high bandwidth. As a response to these issues, in this paper we propose MAC (Memory Access Coalescer), a coalescing unit for the 3D-stacked memory. We discuss the design and implementation of MAC, in the context of a custom designed cache-less architecture targeted at data-intensive, irregular applications. Through a custom simulation infrastructure based on the RISC-V toolchain, we show that MAC achieves a coalescing efficiency of 52.85% on average. It improves the performance of the memory system by 60.73% on average for a large set of irregular workloads.



# Summary. An optional shortened abstract.
summary: 

tags: [Computer Architecture, 3D-stacked Memory, Memory Coalescing]

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
