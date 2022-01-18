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
* Doctoral Student in Computer Science, Texas Tech University, 2023(expected) 
* M.S. in Computer Science, Texas Tech University, 2019
  
Work experience
======
* Fall 2019 - Present: Graduate Student Research Assistant
  * DISCL at Texas Tech University
  <!-- * Duties included:  -->
  * Supervisor: Dr. Yong Chen

* Summer 2020: Graduate Student Intern
  * National Energy Research Scientific Computing Center (NERSC)
  * Duties included: 
    * Analyzing time-series monitoring data
    * Visualizing the monitoring metrics using interactive figures
    * Applying Machine Learning algorithms with the extracted statictis features of time series data for detecting and identifying applications
  * Supervisor: Dr. Brandon Cook

Skills
======
* Programming Languages
  * C/C++, Bash, Python
* Data Analysis Libraries
  * Numpy
  * Pandas
  * Scikitlearn
  * Matplotlib
* Databases
  * PostgreSQL
  * TimescaleDB
  * InfluxDB
* Operating systems
  * UNIX/Linux
  * Mac OS
  * 
Publications
======
  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Posters
======
* Detecting and Identifying Applications by Job Signatures in HPC Systems (Research Poster, accepted by SC21)

<!-- Teaching
======
  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->
  
Paper Review
======
- 2021 IEEE International Conference on Big Data
- 2020 IEEE International Conference on Big Data

Talks
======
  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

Research Experience
======
* Collecting and Storing Telemetry Metrics from HPC cluster
  * Investigated the Integrated Dell Remote Access Controller (iDRAC) and explored pull model and push model (subscription) for obtaining remote monitoring data
  * Developed a set of tools for configuring iDRAC9 telemetry reports and initializing tables in TimescaleDB
  * Implemented the code to asynchronously collect telemetry metrics from 240 CPU nodes and 20 GPU nodes via Server-Sent Event (SSE), collected monitoring metrics from 467 CPU nodes via pull model, and utilized the resource manager (e.g. Slurm, UGE) interface to collect job accounting information

* Improving the Monitoring Data Querying Performance
  * Optimized the database schemas in InfluxDB, reducing 71.98% of data volume and gaining up to 1.76X performance boost
  * Developed a middleware between the consumers (i.e. visualization and automation components) and the producers (i.e. databases) called Metrics Builder
  * Metrics Builder hides the details of querying databases, speed up querying and transmitting, and provide a unified API (based on OpenAPI) and dataframe for data analysis consumers
  * Metrics Builder improves query performance by up to 25X and reduces the volume of data transmitted by 95%

* Processing-in-Memory Accelerator for Stencil Computations
  * Investigated the cache performance of stencil computation; implemented a simulator generating the memory traces of different types of stencils
  * Designed a Processing-In-Memory (PIM) accelerator based on the Hybrid Memory Cube (HMC) architecture
  * Evaluated the proposed accelerator using HMC-Sim library. The results showed that the proposed accelerator reduces 48.25% of data movement on average and obtains up to 65.55% of bank conflict reduction

* Memory Power Tracing on Hybrid Memory Cube (HMC)
  * Investigated the impacts of the memory accesses on the power consumption in Hybrid Memory Cube (HMC)
  * Built  a  Power-Sim  driver  utilizing  the  HMC-Sim  library  to  simulate  the  memory  power  consumption, run the driver under the risc-v spike simulator
  * Evaluated the efficacy of the Dynamic Memory Coalescer(DMC) based on the simulation results

Awards
======
* Summer Thesis/Dissertation Research Award (Mar. 2019)
<!-- Service and leadership
====== -->
