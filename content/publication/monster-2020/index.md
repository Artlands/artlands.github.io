---
title: 'MonSTer: an out-of-the-box monitoring tool for high performance computing systems'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Ghazanfar Ali
  - Ngan Nguyen
  - Jon Hass
  - Alan Sill
  - Tommy Dang
  - Yong Chen

# Author notes (optional)
author_notes:
  # - 'Equal contribution'
  # - 'Equal contribution'

date: '2020-09-14T00:00:00Z'
doi: '10.1109/CLUSTER49012.2020.00022'

# Schedule page publish date (NOT publication's date).
publishDate: '2020-11-02T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: In *IEEE International Conference on Cluster Computing*
publication_short: In *CLUSTER*

abstract: Understanding the status of high-performance computing platforms and correlating applications to resource usage provide insight into the interactions among platform components. A lot of efforts have been devoted into developing monitoring solutions; however, a large-scale HPC system usually requires a combination of methods/tools to successfully monitor all metrics, which will lead to a huge effort in configuration and monitoring. Besides, monitoring tools are often left behind in the procurement of large-scale HPC systems. These challenges have motivated the development of a next-generation out-of-the-box monitoring tool that can be easily deployed without losing informative metrics. In this work, we introduce MonSTer, an “out-of-the-box” monitoring tool for high-performance computing platforms. MonSTer uses the evolving specification Redfish to retrieve sensor data from Baseboard Management Controller (BMC), and resource management tools such as Univa Grid Engine (UGE) or Slurm to obtain application information and resource usage data. Additionally, it also uses a time-series database (e.g. InfluxDB) for data storage. MonSTer correlates applications to resource usage and reveals insightful knowledge without having additional overhead on the application and computing nodes. This paper presents the design and implementation of MonSTer, as well as experiences gained through real-world deployment on the 467-node Quanah cluster at Texas Tech University’s High Performance Computing Center (HPCC) over the past year.

# Summary. An optional shortened abstract.
summary: 

tags: [HPC, Monitoring, Redfish, InfluxDB, Data Analytics, Time-series Data Analytics]

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
