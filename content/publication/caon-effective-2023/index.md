---
title: Effective Management of Time Series Data

# Authors
# A YAML list of author names
# If you created a profile for a user (e.g. the default `admin` user at `content/authors/admin/`), 
# write the username (folder name) here, and it will be replaced with their full name and linked to their profile.
authors:
- Cristiano E. Caon
- Jie Li
- Yong Chen

# Author notes (such as 'Equal Contribution')
# A YAML list of notes for each author in the above `authors` list
author_notes: []

date: '2023-07-01'

# Date to publish webpage (NOT necessarily Bibtex publication's date).
publishDate: '2023-10-16T19:56:58.046581Z'

# Publication type.
# A single CSL publication type but formatted as a YAML list (for Hugo requirements).
publication_types:
- paper-conference

# Publication name and optional abbreviated publication name.
publication: '*2023 IEEE 16th International Conference on Cloud Computing (CLOUD)*'
publication_short: ''

doi: 10.1109/CLOUD60044.2023.00055

abstract: Cloud computing systems, consisting of numerous nodes and components, require
  constant monitoring to satisfy the Quality-of-Service (QoS), making the management
  of large-scale time series data challenging. To address this issue, age threshold
  retention policies have been implemented to remove historical data, but this eliminates
  valuable information from older periods. In this paper, we proposed an alternative
  approach that applies time series deduplication with metric-based tolerance to discard
  readings that stabilize within a calculated tolerance window. This approach can
  reduce the data volume by 70.38% on average. Once the data-reduced interval is queried,
  the readings can be reconstructed to retrieve the original granularity with low
  query runtime overhead and a Mean Absolute Percentage Error of 0.74%.

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
  url: https://ieeexplore.ieee.org/document/10254974
---

Add the **full text** or **supplementary notes** for the publication here using Markdown formatting.
