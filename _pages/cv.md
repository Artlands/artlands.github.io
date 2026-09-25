---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 4
---

<!--
  CV in the markdown-cv format (https://github.com/Artlands/markdown-cv):
  plain Markdown plus <field>, <location> and <time> tags, styled like the
  LaTeX CV by the .cv-md rules in _sass/_base.scss (screen and print).
  Publications are generated from _bibliography/papers.bib in IEEE style
  (_layouts/cv_ref.liquid), and the deploy workflow prints this page to
  assets/pdf/CV_JieLi.pdf (bin/cv_pdf.js).
-->

<div class="cv-md" markdown="1">

<span class="name">Jie Li</span>

<span class="info">Research Assistant Professor, Department of Computer Science, Texas Tech University</span>

<span class="info">Email: [jie.li@ttu.edu](mailto:jie.li@ttu.edu) · Homepage: [lijie.me](https://lijie.me)</span>

<span class="info cv-download"><a href="{{ '/assets/pdf/CV_JieLi.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Download PDF</a></span>

## RESEARCH INTERESTS

My research focuses on high-performance computing (HPC) and AI infrastructure, with an emphasis on observability, resource management, and energy efficiency. Building on this systems foundation, my research agenda extends to AI agents for HPC operation and management, the security of agents acting within HPC environments, and the integration of HPC with quantum computing.

- **High-performance computing:** system monitoring, workload characterization, scheduling, disaggregated memory, and energy-aware resource management.
- **AI infrastructure:** LLM serving, KV cache and memory management, and performance and power characterization of AI workloads.
- **AI agents for HPC operations:** agent-assisted cluster operation and management, including ongoing development for the NSF REPACSS system.
- **AI agent security in HPC:** evaluating and constraining agent behavior in shared computing environments.
- **HPC and quantum computing:** quantum arithmetic and polynomial synthesis, with broader interests in hybrid quantum-classical workflows and HPC integration.

## EDUCATION

### Doctor of Philosophy, <field>Computer Science,</field> <location>Texas Tech University, Lubbock, TX</location> <time>May 2024</time>

- Dissertation: _Optimizing High-Performance Computing Systems: Insights from System Monitoring, Workload Management, and Scheduling Strategies_. Advisor: Prof. Yong Chen.

### Master of Science, <field>Computer Science,</field> <location>Texas Tech University, Lubbock, TX</location> <time>August 2019</time>

- Thesis: _PIMS: A Lightweight Processing-in-Memory Accelerator for Stencil Computations_. Advisor: Prof. Yong Chen.

### Bachelor of Arts, <field>Architecture,</field> <location>Huaqiao University, Xiamen, China</location> <time>May 2012</time>

## ACADEMIC APPOINTMENTS AND RESEARCH EXPERIENCE

### Research Assistant Professor <time>July 2026 – Present</time>

<location>Department of Computer Science, Texas Tech University, Lubbock, TX</location>

- Lead research in HPC and AI infrastructure, spanning observability, resource and data management, energy-aware computing, cyberinfrastructure security, and AI-driven system management.
- Initiated a research direction on AI agents for autonomous HPC operation and management, using REPACSS as a production testbed.
- Contribute to the operation, optimization, and research use of the NSF REPACSS cluster ($12.25M), including system software integration, performance analysis, and user support.
- Supervise graduate and undergraduate researchers and develop proposals on secure, autonomous, and energy-efficient computing infrastructure.

### Assistant Director <time>January 2026 – Present</time>

<location markdown="span">NSF Cloud and Autonomic Computing Center ([CAC IUCRC](https://nsfcac.org/)), Texas Tech Site</location>

- Coordinate faculty, student teams, industry members, and external collaborators in developing and reviewing research projects for this NSF Industry–University Cooperative Research Center.
- Help organize semiannual Industry Advisory Board meetings, including project planning, presentation preparation, and follow-up with industry participants.
- Mentor students preparing presentations, posters, and reports for industry review; support proposal development, center reporting, and cross-institutional coordination.

### Postdoctoral Researcher <time>June 2024 – June 2026</time>

<location>Department of Computer Science, Texas Tech University, Lubbock, TX</location>

- Co-designed and built the NSF REPACSS cluster ($12.25M) from the ground up, contributing to system architecture, deployment, operation, and performance optimization.
- Served as technical lead of the Data-Intensive Scalable Computing Laboratory, coordinating research activities, student projects, and collaborative system development.
- Co-PI on the NSF CICI proposal SHIELD (2025, not funded), which proposed layered defense mechanisms for open-science cyberinfrastructure.

### Research Assistant <time>September 2019 – May 2024</time>

<location>Data-Intensive Scalable Computing Laboratory, Texas Tech University, Lubbock, TX</location>

- Across graduate study (2019–2024), published 15 peer-reviewed papers (7 first-author) in venues including CLUSTER, ISC, ICPP, MemSys, IEEE CLOUD, IEEE BigData, and IEEE Transactions on Computers.
- Developed and maintained MonSTer (later adopted by Dell's Omnia project), the Disaggregation-Aware Scheduler, and xBGAS simulation tools, supporting research in HPC monitoring, workload characterization, scheduling, and memory systems.
- Mentored students on HPC monitoring, data management, and workload analysis, including a master's thesis that led to a CLOUD'23 publication.

### Graduate Student Intern <time>Summers 2021, 2022, and 2023</time>

<location>Lawrence Berkeley National Laboratory, Berkeley, CA (Mentors: Brandon Cook and Georgios Michelogiannakis, in John Shalf's group)</location>

- Designed and implemented pipelines integrating LDMS, DCGM, and Slurm telemetry from NERSC's Cori and Perlmutter supercomputers.
- Applied machine learning and deep learning to classify, characterize, and predict HPC job behavior from large-scale time-series telemetry.
- Led development of the open-source Disaggregation-Aware Scheduler; internship research resulted in first-author publications at ISC'23 and CLUSTER'24.

## GRANTS AND PROPOSALS

### REPACSS: Empowering Scientific Discovery through Renewable Energy Powered Advanced Computing Systems and Services <time>2023</time>

<location>National Science Foundation, Category II · Funded · Total award: $12,250,000</location>

- Role: Contributor to proposal development and infrastructure implementation (PI: Yong Chen; Co-PI: Alan Sill). Contributed proposal sections on data center monitoring and remote control.

### SHIELD: Strengthening High-Performance Infrastructure with Enhanced Layered Defense <time>2025</time>

<location>NSF CICI: UCSS · Not funded · Requested: $600,000</location>

- Role: Co-PI (PI: Yong Chen). Contributed project vision and technical approach for HPC cybersecurity.

### DA Vinci: An Integrated Data Collection, Automation, and Visualization Framework for HPC Systems <time>2020</time>

<location>NSF Frameworks · Not funded · Requested: $1,000,000</location>

- Role: Lead contributor (PI: Yong Chen; Co-PI: Alan Sill). Led core framework design and research methodology.

## PEER-REVIEWED PUBLICATIONS

<div class="cv-refs">
{% bibliography --style _bibliography/ieee-cv.csl --template cv_ref --group_by none --query @*[journal!~arXiv] %}
</div>

## PREPRINTS

<div class="cv-refs">
{% bibliography --style _bibliography/ieee-cv.csl --template cv_ref --group_by none --query @*[journal~=arXiv] %}
</div>

## MANUSCRIPTS UNDER SUBMISSION OR REVISION

- Ziqing Guo, **Jie Li**, Ziwen Pan, and Yong Chen. "NNQA: Neural-Native Quantum Arithmetic for End-to-End Polynomial Synthesis." Submitted to AAAI-27.
- Tongyang Wang, **Jie Li**, Chenxu Niu, and Yong Chen. "ECHO: Online Control of CPU Frequency for Energy-Efficient High-Performance Computing."
- Batuhan Sencer, Chenxu Niu, **Jie Li**, and Yong Chen. "Slimming Models, Saving Watts: Understanding and Modeling the Impact of Knowledge Distillation on GPU Clusters."

## OPEN-SOURCE RESEARCH SOFTWARE

- [**MonSTer**](https://github.com/nsfcac/MonSTer): Out-of-the-box HPC monitoring framework. Published at CLUSTER'20; adopted by Dell's Omnia project.
- [**Disaggregation-Aware Scheduler**](https://github.com/Artlands/DisaggregationAwareScheduler): Simulation framework for job scheduling in HPC systems with disaggregated memory. Used in CLUSTER'24 and IPDPSW'24 publications.
- [**xBGAS REV-CPU**](https://github.com/Artlands/rev-xbgas): Cycle-accurate xBGAS simulation extension based on REV-CPU. Developed with Tactical Computing Laboratories; published at ICNC'24.
- [**xBGAS Runtime**](https://github.com/Artlands/rev-xbgas-runtime): Lightweight runtime supporting global address space extensions for RISC-V-based xBGAS simulation. Developed with Tactical Computing Laboratories.

## TEACHING

Teaching interests: operating systems, parallel and high-performance computing, computer architecture, distributed and cloud computing, and systems for machine learning at the undergraduate and graduate levels; new graduate seminars on AI infrastructure and on AI agents for computing systems.

### Invited Lecturer and Programming Project Designer <time>Fall 2025</time>

<location>Parallel Processing (graduate), Texas Tech University</location>

- Delivered four invited lectures and designed programming projects for 27 students; topics included job scheduling, compilation and job submission, and OpenMP.

## RESEARCH MENTORING

### Graduate Students

- Jaechang Kim, M.S. student. AI agents for REPACSS cluster operation and management, automating Warewulf, Ansible, Spack, and Slurm workflows. <time>Summer 2026 – Present</time>
- Rupak Kadel, Ph.D. student. Improving HPC monitoring for anomaly and intrusion detection. <time>Fall 2025 – Present</time>
- Cristiano Caon, M.S. Data volume reduction and query optimization in time-series databases. Outcome: CLOUD'23 publication. <location>Independent Study (CS 7000) and Master's Thesis</location> <time>Fall 2022</time>
- Aniruddh Sanjaysinh Chavda (M.S.) and Huyen Nguyen (Ph.D.). Usage behavior analysis by clustering job accounting data. <location>Advanced Operating Systems</location> <time>Spring 2021</time>
- Ruonan Wu, M.S. Job accounting data analysis for the Quanah cluster. <location>Advanced Operating Systems</location> <time>Spring 2021</time>
- Ashhrita Puradamane Balachandra, M.S. Improving InfluxDB query performance. <location>Advanced Operating Systems</location> <time>Spring 2020</time>

### Undergraduate Students

- Yusheng Han and Zachary Kay. Running HPC applications and analyzing performance on the RedRaider cluster. <location>Independent Study (CS 4000)</location> <time>Spring 2022</time>
- Casey Root. Monitoring queue status through the Slurm REST API. <location>Independent Study (CS 4000)</location> <time>Spring 2021</time>

## PRESENTATIONS

- Integrated Data Collection and Visualization Framework for Data Centers based on Telemetry Model. <location>NSF CAC Industry Advisory Board Conferences (Lubbock, TX; Denton, TX; Tucson, AZ; Lubbock, TX)</location> <time>2021 – 2024</time>
- Towards Cycle-Accurate Simulation of xBGAS. <location>Latch-Up 2024, Cambridge, MA</location> <time>April 2024</time>
- Workload Failure Prediction for Data Centers. <location>IEEE CLOUD'23, Chicago, IL</location> <time>July 2023</time>
- Advanced Visualization and Data Analysis of HPC Cluster and User Application Behavior. <location>ACM/IEEE SC'21</location> <time>November 2021</time>
- MonSTer: An Out-of-the-Box Monitoring Tool for High Performance Computing Systems. <location>IEEE CLUSTER'20</location> <time>2020</time>
- PIMS: A Lightweight Processing-in-Memory Accelerator for Stencil Computations. <location>MemSys'19</location> <time>October 2019</time>

## REFEREED POSTERS

- **J. Li**, B. Cook, G. Michelogiannakis, and Y. Chen. A Holistic View of Memory Utilization on Perlmutter. <location>SC'22</location> <time>2022</time>
- **J. Li**, B. Cook, and Y. Chen. Detecting and Identifying Applications by Job Signatures. <location>SC'21</location> <time>2021</time>
- X. Wang, **J. Li**, A. Tumeo, J. D. Leidel, and Y. Chen. Memory Hotspot Optimizations for 3D-Stacked Memory. <location>PACT'19</location> <time>2019</time>

## AWARDS AND HONORS

- Best Poster Award, <location>NSF Cloud and Autonomic Computing Center Industry Advisory Board Conference</location> <time>2022</time>
- Summer Thesis/Dissertation Research Award ($2,300), <location>Texas Tech University Graduate School</location> <time>Summer 2019</time>

## PROFESSIONAL SERVICE

- Program committee: NeurIPS 2026; AAAI 2026.
- Conference reviewer: IEEE ISCAS 2026; IEEE BigData 2022, 2023, 2025; IEEE/ACM CCGrid 2024.
- Journal reviewer: IEEE Computer Architecture Letters (2025); The Journal of Supercomputing (2023).
- Conference sub-reviewer: IEEE IPDPS 2023; IEEE ICDCS 2022; ACM/IEEE SC 2022; International Parallel Data Systems Workshop (PDSW) 2022; IEEE Smart Data Services 2020.
- Student volunteer: ACM/IEEE SC'21, St. Louis, MO; ACM/IEEE SC'19, Denver, CO.

<span class="info cv-update">Last updated: September 2026</span>

</div>
