---
title: 'MonSTer: An Out-of-the-Box Monitoring Tool for High Performance Computing
  Systems'

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Jie Li
- Ghazanfar Ali
- Ngan Nguyen
- Jon Hass
- Alan Sill
- Tommy Dang
- Yong Chen

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2020-09-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2023-10-16T20:08:16.916590Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- 

# Publication name and optional abbreviated publication name.
publication: '*2020 IEEE International Conference on Cluster Computing (CLUSTER)*'
publication_short: ''

doi: 10.1109/CLUSTER49012.2020.00022

abstract: Understanding the status of high-performance computing platforms and correlating
  applications to resource usage provide insight into the interactions among platform
  components. A lot of efforts have been devoted into developing monitoring solutions;
  however, a large-scale HPC system usually requires a combination of methods/tools
  to successfully monitor all metrics, which will lead to a huge effort in configuration
  and monitoring. Besides, monitoring tools are often left behind in the procurement
  of large-scale HPC systems. These challenges have motivated the development of a
  next-generation out-of-the-box monitoring tool that can be easily deployed without
  losing informative metrics. In this work, we introduce MonSTer, an “out-of-the-box”
  monitoring tool for high-performance computing platforms. MonSTer uses the evolving
  specification Redfish to retrieve sensor data from Baseboard Management Controller
  (BMC), and resource management tools such as Univa Grid Engine (UGE) or Slurm to
  obtain application information and resource usage data. Additionally, it also uses
  a time-series database (e.g. InfluxDB) for data storage. MonSTer correlates applications
  to resource usage and reveals insightful knowledge without having additional overhead
  on the application and computing nodes. This paper presents the design and implementation
  of MonSTer, as well as experiences gained through real-world deployment on the 467-node
  Quanah cluster at Texas Tech University's High Performance Computing Center (HPCC)
  over the past year. In this work, we introduce MonSTer, an “out-of-the-box” monitoring
  tool for high-performance computing platforms. MonSTer uses the evolving specification
  Redfish to retrieve sensor data from Baseboard Management Controller (BMC), and
  resource management tools such as Univa Grid Engine (UGE) or Slurm to obtain application
  information and resource usage data. Additionally, it also uses a time-series database
  (e.g. InfluxDB) for data storage. MonSTer correlates applications to resource usage
  and reveals insightful knowledge without having additional overhead on the application
  and computing nodes. This paper presents the design and implementation of MonSTer,
  as well as experiences gained through real-world deployment on the 467-node Quanah
  cluster at Texas Tech University's High Performance Computing Center (HPCC) over
  the past year.

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
  url: https://ieeexplore.ieee.org/abstract/document/9229641
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
