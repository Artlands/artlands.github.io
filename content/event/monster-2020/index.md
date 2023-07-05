---
title: 'MonSTer: An Out-of-the-Box Monitoring Tool for High Performance Computing Systems'

event: CLUSTER 2020
event_url: https://clustercomp.org/2020/

location: Kobe, Japan (Virtual)
address: 

summary: A Conference Presentation for our paper "MonSTer-An Out-of-the-Box Monitoring Tool for High Performance Computing Systems" at CLUSTER 2020.
abstract: Understanding the status of high-performance computing platforms and correlating applications to resource usage provide insight into the interactions among platform components. A lot of efforts have been devoted into developing monitoring solutions; however, a large-scale HPC system usually requires a combination of methods/tools to successfully monitor all metrics, which will lead to a huge effort in configuration and monitoring. Besides, monitoring tools are often left behind in the procurement of large-scale HPC systems. These challenges have motivated the development of a next-generation out-of-the-box monitoring tool that can be easily deployed without losing informative metrics. In this work, we introduce MonSTer, an “out-of-the-box” monitoring tool for high-performance computing platforms. MonSTer uses the evolving specification Redfish to retrieve sensor data from Baseboard Management Controller (BMC), and resource management tools such as Univa Grid Engine (UGE) or Slurm to obtain application information and resource usage data. Additionally, it also uses a time-series database (e.g. InfluxDB) for data storage. MonSTer correlates applications to resource usage and reveals insightful knowledge without having additional overhead on the application and computing nodes. This paper presents the design and implementation of MonSTer, as well as experiences gained through real-world deployment on the 467-node Quanah cluster at Texas Tech University’s High Performance Computing Center (HPCC) over the past year.

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2020-09-14T00:00:00Z'
date_end: '2020-09-17T00:00:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2020-09-14T00:00:00Z'

authors: 
  - admin
  - Ghazanfar Ali
  - Ngan Nguyen
  - Jon Hass
  - Alan Sill
  - Tommy Dang
  - Yong Chen
  
tags: [HPC, Monitoring, Redfish, InfluxDB, Data Analytics, Time-series Data Analytics]

# Is this a featured talk? (true/false)
featured: false

image:
  caption: 'CLUSTER 2020'
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
