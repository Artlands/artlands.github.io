---
title: "Job Scheduling in High Performance Computing
Systems with Disaggregated Memory Resources"
description: "This project introduces FM, a novel, remote-memory-aware scheduling algorithm that significantly enhances job performance, fairness, and efficiency in high-performance computing systems using disaggregated memory resources."
date: "2024-05-20"
---

## 📎 Project Summary

Modern high-performance computing (HPC) systems face substantial challenges in efficiently managing memory and computational resources due to diverse application requirements and static resource allocation. To overcome the inefficiencies arising from traditional node-centric memory architectures, we explored the potential of disaggregated memory systems, which allow separate allocation of memory resources from computational nodes.

In this research, we introduced a data-driven, remote-memory-aware scheduling algorithm named FM. This novel scheduling strategy optimizes job allocation by dynamically assessing both local and remote memory resources, substantially enhancing the performance of HPC systems.


## 🔑 Key Achievements

- Developed FM, a scheduling algorithm that significantly outperforms traditional job schedulers, especially when memory pool capacity is limited.

- Achieved up to 53.6% improvement in average bounded job slowdown compared to the second-best scheduler.

- Demonstrated the highest fairness among evaluated schedulers, minimizing discrimination among jobs.

## 💡 Technical Highlights
- Introduced "Memory Overload" as a novel metric, quantifying a job's reliance on remote memory to better prioritize scheduling.

- Utilized simulation-based methodologies using real-world job traces from operational HPC systems to validate performance impacts.

- Developed a comprehensive performance degradation model to predict job runtime impacts due to increased latency from disaggregated memory.


## 🏗 Impact and Applications
This research presents significant improvements in the operational efficiency of HPC systems through effective job scheduling in environments with disaggregated memory. It provides valuable insights into how such systems can be designed and optimized, paving the way for future advancements in large-scale scientific computing and data-intensive applications.

## 🧭 Future Directions

- Expansion of memory disaggregation methodologies to other resource types and cloud infrastructures.

- Further enhancement of latency reduction techniques and the exploration of emerging memory technologies.

- Development of additional machine learning-driven predictive scheduling algorithms.

This project was presented at CLUSTER'24 in Kobe, Japan. 