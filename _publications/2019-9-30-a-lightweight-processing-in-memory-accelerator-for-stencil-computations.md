---
title: "PIMS: a lightweight processing-in-memory accelerator for stencil computations"
collection: Proceedings of the International Symposium on Memory Systems
permalink: /publication/2019-9-30-a-lightweight-processing-in-memory-accelerator-for-stencil-computations
excerpt: 'Stencil computation is a classic computational kernel present in many high-performance scientific applications, like image processing and partial differential equation solvers (PDE). A stencil computation sweeps over a multi-dimensional grid and repeatedly updates values associated with points using the values from neighboring points. Stencil computations often employ large datasets that exceed cache capacity, leading to excessive accesses to the memory subsystem. As such, 3D stencil computations on large grid sizes are memory-bound. In this paper we present PIMS, an in-memory accelerator for stencil computations. PIMS, implemented in the logic layer of a 3D stacked memory, exploits the high bandwidth provided by through silicon vias to reduce redundant memory traffic. Our comprehensive evaluation using three different grid sizes with six categories of orders indicate that the proposed architecture reduces 48.25% of data movement on average and obtains up to 65.55% of bank conflict reduction.'
date: 2019-9-30
venue: 'Proceedings of the International Symposium on Memory Systems'
paperurl: 'https://dl.acm.org/doi/abs/10.1145/3357526.3357550'
citation: 'Jie Li, Xi Wang, Antonino Tumeo, Brody Williams, John D. Leidel, and Yong Chen. 2019. PIMS: a lightweight processing-in-memory accelerator for stencil computations. In Proceedings of the International Symposium on Memory Systems (MEMSYS '19). Association for Computing Machinery, New York, NY, USA, 41–52. DOI:https://doi-org.lib-e2.lib.ttu.edu/10.1145/3357526.3357550'
---
Stencil computation is a classic computational kernel present in many high-performance scientific applications, like image processing and partial differential equation solvers (PDE). A stencil computation sweeps over a multi-dimensional grid and repeatedly updates values associated with points using the values from neighboring points. Stencil computations often employ large datasets that exceed cache capacity, leading to excessive accesses to the memory subsystem. As such, 3D stencil computations on large grid sizes are memory-bound. In this paper we present PIMS, an in-memory accelerator for stencil computations. PIMS, implemented in the logic layer of a 3D stacked memory, exploits the high bandwidth provided by through silicon vias to reduce redundant memory traffic. Our comprehensive evaluation using three different grid sizes with six categories of orders indicate that the proposed architecture reduces 48.25% of data movement on average and obtains up to 65.55% of bank conflict reduction.

[Download paper here](https://artlands.github.io/files/li-memsys-2019.pdf)

Recommended citation: 

```
@inproceedings{li2019pims,
  title={Pims: a lightweight processing-in-memory accelerator for stencil computations},
  author={Li, Jie and Wang, Xi and Tumeo, Antonino and Williams, Brody and Leidel, John D and Chen, Yong},
  booktitle={Proceedings of the International Symposium on Memory Systems},
  pages={41--52},
  year={2019}
}
```

