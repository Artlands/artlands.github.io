---
title: "MonSTer: an out-of-the-box monitoring tool for high performance computing systems"
collection: 2020 IEEE International Conference on Cluster Computing (CLUSTER)
permalink: /publication/2020-9-14-an-out-of-the-box-monitoring-tool-for-high-performance-computing-systems
excerpt: 'In this work, we introduce MonSTer, an “out-of-the-box” monitoring tool for high-performance computing platforms. MonSTer uses the evolving specification Redfish to retrieve sensor data from Baseboard Management Controller (BMC), and resource management tools such as Univa Grid Engine (UGE) or Slurm to obtain application information and resource usage data. Additionally, it also uses a time-series database (e.g. InfluxDB) for data storage.'
date: 2020-9-14
venue: '2020 IEEE International Conference on Cluster Computing (CLUSTER)'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/9229641/'
citation: 'J. Li et al., "MonSTer: An Out-of-the-Box Monitoring Tool for High Performance Computing Systems," 2020 IEEE International Conference on Cluster Computing (CLUSTER), 2020, pp. 119-129, doi: 10.1109/CLUSTER49012.2020.00022.'
---
Understanding the status of high-performance computing platforms and correlating applications to resource usage provide insight into the interactions among platform components. A lot of efforts have been devoted into developing monitoring solutions; however, a large-scale HPC system usually requires a combination of methods/tools to successfully monitor all metrics, which will lead to a huge effort in configuration and monitoring. Besides, monitoring tools are often left behind in the procurement of large-scale HPC systems. These challenges have motivated the development of a next-generation out-of-the-box monitoring tool that can be easily deployed without losing informative metrics.

In this work, we introduce MonSTer, an "out-of-the-box" monitoring tool for high-performance computing platforms. MonSTer uses the evolving specification Redfish to retrieve sensor data from Baseboard Management Controller (BMC), and resource management tools such as Univa Grid Engine (UGE) or Slurm to obtain application information and resource usage data. Additionally, it also uses a time-series database (e.g. InfluxDB) for data storage. MonSTer correlates applications to resource usage and reveals insightful knowledge without having additional overhead on the application and computing nodes. This paper presents the design and implementation of MonSTer, as well as experiences gained through real-world deployment on the 467-node Quanah cluster at Texas Tech University's High Performance Computing Center (HPCC) over the past year.

[Download paper here](https://artlands.github.io/files/li-cluster-2020.pdf)

Recommended citation: 

```
@inproceedings{pham2019mtsad,
  @inproceedings{li2020monster,
  title={MonSTer: an out-of-the-box monitoring tool for high performance computing systems},
  author={Li, Jie and Ali, Ghazanfar and Nguyen, Ngan and Hass, Jon and Sill, Alan and Dang, Tommy and Chen, Yang},
  booktitle={2020 IEEE International Conference on Cluster Computing (CLUSTER)},
  pages={119--129},
  year={2020},
  organization={IEEE}
}
```