---
title: Workload Failure Prediction for Data Centers

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Jie Li
- Rui Wang
- Ghazanfar Ali
- Tommy Dang
- Alan Sill
- Yong Chen

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2023-07-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2023-10-16T20:08:17.021869Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- 

# Publication name and optional abbreviated publication name.
publication: '*2023 IEEE 16th International Conference on Cloud Computing (CLOUD)*'
publication_short: ''

doi: 10.1109/CLOUD60044.2023.00064

abstract: Failed workloads that consumed significant computational resources in time
  and space affect the efficiency of HPC data centers significantly and thus limit
  the amount of scientific work that can be achieved. While the computational power
  has increased significantly over the years, detection and prediction of workload
  failures have lagged far behind and will become increasingly critical as the system
  scale and complexity further increase. In this study, we analyze workload traces
  collected from a production cluster and train machine learning models on a large
  amount of data sets to predict workload failures. Our prediction models consist
  of a queue-time model that estimates the probability of workload failures before
  execution and a runtime model that predicts failures at runtime. Evaluation results
  show that the queue-time model and runtime model can predict workload failures with
  a maximum precision score of 90.61% and 97.75%, respectively. By integrating the
  runtime model with the job scheduler, it helps reduce CPU time, and memory usage
  by up to 16.7% and 14.53%, respectively.

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
  url: https://ieeexplore.ieee.org/document/10254988
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
