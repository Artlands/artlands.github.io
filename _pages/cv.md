---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Doctoral Student in Computer Science, Texas Tech University, 2024 (expected) 
* M.S. in Computer Science, Texas Tech University, 2019
* Bachelor of Architecture, Huaqiao University, 2012
  
Work experience
======
* Fall 2019 - Present: Graduate Student Research Assistant
  * [DISCL](https://discl.cs.ttu.edu/doku.php?id=home) at Texas Tech University
  * Duties included:
    * Conduct research in the areas of High-Performance Computing, Computer Architecture, and Parallel and Distributed Computing. This includes designing and implementing experiments, analyzing and interpreting data, and writing research papers for publication in academic conferences and journals.
    * Attend conferences, workshops, and seminars to stay up-to-date with the latest research developments and technologies, including presenting research papers and posters, and networking with other researchers in the field.
    * Participate in the development and maintenance of research software and tools. This involves writing and testing code, documenting software features and functionality, and contributing to open-source software projects. Main software and tools include [MonSter](https://github.com/nsfcac/MonSter), [MetricsBuilder](https://github.com/nsfcac/MetricsBuilder), [Rev-xBGAS](https://github.com/Artlands/rev-xbgas), etc.
    * Mentor graduate and undergraduate students on their independent studies. This involves providing research topics, guidance on research projects, assisting with data collection and analysis, and helping students to develop their technical writing and presentation skills.
    * Administer two high-end servers (Hugo and Alita) hosted in the High-Performance Computing Center at Texas Tech University. This includes configuring and maintaining software, troubleshooting issues, and ensuring the availability and reliability of the servers.
  * Supervisor: [Dr. Yong Chen](https://www.myweb.ttu.edu/yonchen/)

* Summer 2022: Graduate Student Intern
  * [National Energy Research Scientific Computing Center (NERSC)](https://www.nersc.gov/)
  * Duties included: 
    * Simplified the code structure and create a more efficient and streamlined codebase by refactoring and combining the data collection codes used to access the system monitoring data collected from NERSC's Perlmutter.
    * Analyzed the system monitoring data on a large scale to evaluate resource utilization by examining metrics such as CPU and GPU utilization, host DRAM utilization, and GPU HBM2 utilization. Identified trends and patterns in the data to gain insights into system performance.
    * Summarized the analysis and write a system resource analysis paper for ISC 2023 (Accepted and will be presented in Hamburg, Germany, May 21-25).
  * Supervisor: [Dr. Brandon Cook](https://www.nersc.gov/about/nersc-staff/application-performance/brandon-cook/), [Dr. George Michelogiannakis](https://crd.lbl.gov/divisions/amcr/computer-science-amcr/cag/staff/staff-researchers/george-michelogiannakis/)

* Summer 2021: Graduate Student Intern
  * [National Energy Research Scientific Computing Center (NERSC)](https://www.nersc.gov/)
  * Duties included: 
    * Integrated data from multiple sources to analyze system-wide architectural efficiency and workload patterns.
    * Conducted statistical analysis of job-level monitoring data and applied various machine learning models (e.g., Random Forests, Support Vector Classification, LinearSVC) to classify jobs based on extracted time-series features.
    * Developed a novel approach to encoding time-series monitoring data as images and trained a Convolutional Neural Network (CNN) to classify job signatures with high accuracy.
  * Supervisor: [Dr. Brandon Cook](https://www.nersc.gov/about/nersc-staff/application-performance/brandon-cook/)

* Aug.2018 - Aug.2019 
  * [Teaching, Learning and Professional Development Center](https://www.depts.ttu.edu/tlpdc/)
  * Duties included:
    * Managed the maintenance and regular updates of the TLPDC Websites, ensuring that all content was current, accurate, and accessible to internal and external stakeholders.
    * Developed and implemented comprehensive backup strategies to safeguard critical data assets, reducing the risk of data loss and ensuring business continuity in the event of system failures or other disruptions.
    * Maintained a deep understanding of emerging technologies and best practices related to web development, software applications, and data management, leveraging this knowledge to continuously improve processes and approaches to project management and delivery.
  * Supervisor: [Micah Logan](https://www.wku.edu/citl/staff/micah_logan)
Skills
======
* Programming Languages
  * C/C++, Assembly, Python, JavaScript
* Data Analysis Libraries
  * Numpy, Pandas, Scikitlearn, Matplotlib
* Databases
  * PostgreSQL/TimescaleDB, InfluxDB, MongoDB
* Operating systems
  * UNIX/Linux
* Tools
  * Git, The Structural Simulation Toolkit (SST)
  
Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Posters
======
* A Holistic View of Memory Utilization on Perlmutter (Research Poster, accepted by SC22)
* HPC Application Recognition Through Image-encoded Monitoring Data (Best Poster Award at Spring 2022 NSF Cloud and Autonomic Computing Industry Advisory Board Conference)
* Detecting and Identifying Applications by Job Signatures in HPC Systems (Research Poster, accepted by SC21)

<!-- Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->
  
Paper Review
======
- ICDCS 2022 42nd IEEE International Conference on Distributed Computing Systems
- CCGrid22 IEEE/ACM International Symposium on Cluster, Cloud and Internet Computing
- BigData 2021 IEEE International Conference on Big Data
- BigData 2020 IEEE International Conference on Big Data

Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Research Experience
======
* **Collecting and Storing Telemetry Metrics from HPC cluster**
  * Investigated the Integrated Dell Remote Access Controller (iDRAC) and explored pull model and push model (subscription) for obtaining remote monitoring data
  * Developed a set of tools for configuring iDRAC9 telemetry reports and initializing tables in TimescaleDB
  * Implemented the code to asynchronously collect telemetry metrics from 240 CPU nodes and 20 GPU nodes via Server-Sent Event (SSE), collected monitoring metrics from 467 CPU nodes via pull model, and utilized the resource manager (e.g. Slurm, UGE) interface to collect job accounting information

* **Improving the Monitoring Data Querying Performance**
  * Optimized the database schemas in InfluxDB, reducing 71.98% of data volume and gaining up to 1.76X performance boost
  * Developed a middleware between the consumers (i.e. visualization and automation components) and the producers (i.e. databases) called Metrics Builder
  * Metrics Builder hides the details of querying databases, speed up querying and transmitting, and provide a unified API (based on OpenAPI) and dataframe for data analysis consumers
  * Metrics Builder improves query performance by up to 25X and reduces the volume of data transmitted by 95%

* **Processing-in-Memory Accelerator for Stencil Computations**
  * Investigated the cache performance of stencil computation; implemented a simulator generating the memory traces of different types of stencils
  * Designed a Processing-In-Memory (PIM) accelerator based on the Hybrid Memory Cube (HMC) architecture
  * Evaluated the proposed accelerator using HMC-Sim library. The results showed that the proposed accelerator reduces 48.25% of data movement on average and obtains up to 65.55% of bank conflict reduction

* **Memory Power Tracing on Hybrid Memory Cube (HMC)**
  * Investigated the impacts of the memory accesses on the power consumption in Hybrid Memory Cube (HMC)
  * Built  a  Power-Sim  driver  utilizing  the  HMC-Sim  library  to  simulate  the  memory  power  consumption, run the driver under the risc-v spike simulator
  * Evaluated the efficacy of the Dynamic Memory Coalescer(DMC) based on the simulation results

Awards
======
* Summer Thesis/Dissertation Research Award (Mar. 2019)
<!-- Service and leadership
====== -->
