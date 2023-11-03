---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      # Override your bio text from `authors/admin/_index.md`?
      text:
  # - block: features
  #   content:
  #     title: Skills
  #     items:
  #       - name: R
  #         description: 90%
  #         icon: r-project
  #         icon_pack: fab
  #       - name: Statistics
  #         description: 100%
  #         icon: chart-line
  #         icon_pack: fas
  #       - name: Photography
  #         description: 10%
  #         icon: camera-retro
  #         icon_pack: fas
  - block: experience
    id: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Research Assistant
          company: Data-Intensive Scalable Computing Laboratory (DISCL), TTU
          company_url: 'https://discl.cs.ttu.edu/'
          company_logo: DISCL
          location: Lubbock, TX
          date_start: '2019-09-01'
          date_end: ''
          description: |2-
              * Research and Publication: Conducted innovative research in High-Performance Computing, Computer Architecture, and Parallel and Distributed Computing. Authored and published research papers in reputable academic conferences and journals.
              * Mentorship and Education: Mentored both graduate and undergraduate students in their independent research studies. Provided guidance on research topics, project development, and data analysis.
              * Software Development and Collaboration: Played an integral role in developing and maintaining research software and tools. Wrote, tested, and documented code for various projects. Contributed to open-source software initiatives, fostering collaborative innovation.
              * Server Administration: Managed two high-end servers (Hugo and Alita) hosted at the High-Performance Computing Center. Oversaw server configuration, maintenance, and software management. Ensured consistent server availability and reliability while troubleshooting issues as they arose.
        - title: Graduate Student Intern
          company: Lawrence Berkeley National Laboratory (LBNL)
          company_url: 'https://www.lbl.gov/'
          company_logo: LBL
          location: Berkeley, CA (Summer)
          date_start: '2021-06-01'
          date_end: '2023-08-31'
          description:  |2-
            * Data Integration and Analysis: Integrated HPC monitoring data from diverse sources (LDMS, DCGM, Slurm, VictoriaMetrics) for comprehensive analysis of system-wide architectural efficiency, including CPU, GPU, DRAM, and HBM2 resource utilization. Identified critical trends and patterns within the data to drive insights into system performance, with a focus on NERSC's Cori and Perlmutter.
            * Machine Learning Expertise: Conducted in-depth statistical analysis of job-level monitoring data. Applied a variety of machine learning models, including SVC, LinearSVC, Decision Tree, and Random Forests, to analyze jobs based on time-series features.
            * Innovative Data Processing: Pioneered a novel approach by encoding time-series monitoring data as images and trained a Convolutional Neural Network (CNN) to classify and predict job applications with high accuracy.
            * Simulation and System Design: Designed and implemented a discrete event simulator to study resource management and job scheduling in HPC systems, with a specific focus on systems with disaggregated memory resources.
        - title: Graduate Student Programmer
          company: Teaching, Learning and Professional Development Center (TLPDC), TTU
          company_url: 'https://www.depts.ttu.edu/tlpdc/'
          company_logo: TLPDC
          location: Lubbock, TX
          date_start: '2018-08-01'
          date_end: '2019-08-31'
          description:  |2-
            * Website Maintenance and Communication: Maintained and updated TLPDC web pages, ensuring a fresh and relevant online presence. Facilitated communication with software application providers to meet product requirements efficiently. 
            * Database Management and Security: Managed the MySQL database with precision, safeguarding valuable data assets. Implemented robust backup strategies to protect against data loss. Proactively addressed and resolved database access issues to maintain uninterrupted operations.
    design:
      columns: '1'
  # - block: portfolio
  #   id: projects
  #   content:
  #     title: Projects
  #     filters:
  #       folders:
  #         - project
  #     # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  #     default_button_index: 0
  #     # Filter toolbar (optional).
  #     # Add or remove as many filters (`filter_button` instances) as you like.
  #     # To show all items, set `tag` to "*".
  #     # To filter by a specific tag, set `tag` to an existing tag name.
  #     # To remove the toolbar, delete the entire `filter_button` block.
  #     buttons:
  #       - name: All
  #         tag: '*'
  #       - name: HPC
  #         tag: High-Performance Computing
  #       - name: Computer Architecture
  #         tag: Computer Architecture
  #   design:
  #     # Choose how many columns the section has. Valid values: '1' or '2'.
  #     columns: '1'
  #     view: showcase
  #     # For Showcase view, flip alternate rows?
  #     flip_alt_rows: true
  - block: collection
    id: talks
    content:
      title: Talks
      filters:
        folders:
          - event
    design:
      columns: '2'
      view: compact
  # - block: collection
  #   id: publications
  #   content:
  #     title: Publications
  #     # text: |-
  #     #   {{% callout note %}}
  #     #   Quickly discover relevant content by [filtering publications](./publication/).
  #     #   {{% /callout %}}
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: false
  #   design:
  #     columns: '2'
  #     view: citation
  - block: collection
    id: posts
    content:
      title: Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
---
