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
          company: Data-Intensive Scalable Computing Laboratory (DISCL)
          company_url: 'https://discl.cs.ttu.edu/'
          company_logo: DISCL
          location: Lubbock, TX
          date_start: '2019-09-01'
          date_end: ''
          description: |2-
              Responsibilities include:
              * Conduct research in the areas of High-Performance Computing, Computer Architecture, and Parallel and Distributed Computing.
              * Attend conferences, workshops, and seminars to stay up-to-date with the latest research developments and technologies
              * Participate in the development and maintenance of research software and tools.
              * Mentor graduate and undergraduate students on their independent studies.
              * Administer two high-end servers (Hugo and Alita) hosted in the High-Performance Computing Center at Texas Tech University.
        - title: Graduate Student Intern
          company: NERSC + LBL-Computer Architecture Group
          company_url: 'https://www.lbl.gov/'
          company_logo: LBL
          location: Berkeley, CA (remote)
          date_start: '2022-06-01'
          date_end: '2022-08-31'
          description:  |2-
            Responsibilities include:
            * Simplified the code structure and create a more efficient and streamlined codebase by refactoring and combining the data collection codes used to access the system monitoring data collected from NERSC’s Perlmutter.
            * Analyzed the system monitoring data on a large scale to evaluate resource utilization by examining metrics such as CPU and GPU utilization, host DRAM utilization, and GPU HBM2 utilization. Identified trends and patterns in the data to gain insights into system performance.
            * Summarized the analysis and published a system resource analysis paper in ISC 2023.
        - title: Graduate Student Intern
          company: National Energy Research Scientific Computing Center (NERSC)
          company_url: 'https://www.nersc.gov/'
          company_logo: LBL
          location: Berkeley, CA (remote)
          date_start: '2021-06-01'
          date_end: '2021-08-31'
          description:  |2-
            Responsibilities include:
            * Integrated data from multiple sources to analyze system-wide architectural efficiency and workload patterns.
            * AConducted statistical analysis of job-level monitoring data and applied various machine learning models (e.g., Random Forests, Support Vector Classification, LinearSVC) to classify jobs based on extracted time-series features.
            * Developed a novel approach to encoding time-series monitoring data as images and trained a Convolutional Neural Network (CNN) to classify job signatures with high accuracy.
        - title: Graduate Student Programmer
          company: Teaching, Learning and Professional Development Center (TLPDC)
          company_url: 'https://www.depts.ttu.edu/tlpdc/'
          company_logo: TLPDC
          location: Lubbock, TX
          date_start: '2018-08-01'
          date_end: '2019-08-31'
          description:  |2-
            Responsibilities include:
            * Managed the maintenance and regular updates of the TLPDC Websites, ensuring that all content was current, accurate, and accessible to internal and external stakeholders.
            * Developed and implemented comprehensive backup strategies to safeguard critical data assets, reducing the risk of data loss and ensuring business continuity in the event of system failures or other disruptions.
            * Maintained a deep understanding of emerging technologies and best practices related to web development, software applications, and data management, leveraging this knowledge to continuously improve processes and approaches to project management and delivery.
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
  - block: collection
    id: publications
    content:
      title: Publications
      # text: |-
      #   {{% callout note %}}
      #   Quickly discover relevant content by [filtering publications](./publication/).
      #   {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation
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
