// Helper function to bold author name
export const boldAuthor = (authors: string) => {
  return authors.replace(/Jie Li/g, '<span class="font-bold">Jie Li</span>');
};

export const publications = [
  {
    year: "2024",
    papers: [
      {
        title: "Job Scheduling in High Performance Computing Systems with Disaggregated Memory Resources",
        authors: "Jie Li, George Michelogiannakis, Samuel Maloney, Brandon Cook, Estela Suarez, John Shalf, Yong Chen",
        venue: "IEEE International Conference on Cluster Computing (CLUSTER'24)",
        link: "https://doi.org/10.1109/CLUSTER59578.2024.00033",
        selected: true
      },
      {
        title: "Scheduling and Allocation of Disaggregated Memory Resources in HPC Systems",
        authors: "Jie Li, George Michelogiannakis, Brandon Cook, John Shalf, Yong Chen",
        venue: "IEEE International Parallel and Distributed Processing Symposium Workshops (IPDPSW'24)",
        link: "https://doi.org/10.1109/IPDPSW63119.2024.00206",
        selected: false
      },
      {
        title: "Towards Cycle-accurate Simulation of xBGAS",
        authors: "Jie Li, John D Leidel, Brian Page, Yong Chen",
        venue: "International Conference on Computing, Networking and Communications (ICNC'24)",
        link: "https://doi.org/10.1109/ICNC59896.2024.10556078",
        selected: false
      }
    ]
  },
  {
    year: "2023",
    papers: [
      {
        title: "Spiro: Order-Preserving Visualization in High Performance Computing Monitoring",
        authors: "Tommy Dang, Ngan VT Nguyen, Jie Li, Alan Sill, Yong Chen",
        venue: "International Symposium on Visual Computing (ISVC'24)",
        link: "#",
        selected: false
      },
      {
        title: "Effective Management of Time Series Data",
        authors: "Cristiano E Caon, Jie Li, Yong Chen",
        venue: "IEEE International Conference on Cloud Computing (CLOUD'23)",
        link: "https://doi.org/10.1109/CLOUD60044.2023.00055",
        selected: false
      },
      {
        title: "Workload Failure Prediction for Data Centers",
        authors: "Jie Li, Rui Wang, Ghazanfar Ali, Tommy Dang, Alan Sill, Yong Chen",
        venue: "IEEE International Conference on Cloud Computing (CLOUD'23)",
        link: "https://doi.org/10.1109/CLOUD60044.2023.00064",
        selected: false
      },
      {
        title: "Analyzing Resource Utilization in an HPC System: A Case Study of NERSC's Perlmutter",
        authors: "Jie Li, George Michelogiannakis, Brandon Cook, Dulanya Cooray, Yong Chen",
        venue: "International Conference on High Performance Computing (ISC'23)",
        link: "https://doi.org/10.1007/978-3-031-32041-5_16",
        selected: true
      },
      {
        title: "ARcode: HPC Application Recognition Through Image-encoded Monitoring Data",
        authors: "Jie Li, Brandon Cook, Yong Chen",
        venue: "arXiv preprint",
        link: "https://doi.org/10.48550/arXiv.2301.08612",
        selected: false
      }
    ]
  },
  {
    year: "2022",
    papers: [
      {
        title: "JobViewer: Graph-based Visualization for Monitoring High-Performance Computing System",
        authors: "Tommy Dang, Ngan VT Nguyen, Jie Li, Alan Sill, Jon Hass, Yong Chen",
        venue: "IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (BDCAT'22)",
        link: "https://doi.org/10.1109/BDCAT56447.2022.00021",
        selected: false
      }
    ]
  },
  {
    year: "2021",
    papers: [
      {
        title: "HAM: Hotspot-aware Manager for Improving Communications with 3D-stacked Memory",
        authors: "Xi Wang, Antonino Tumeo, John D Leidel, Jie Li, Yong Chen",
        venue: "IEEE Transactions on Computers",
        link: "https://doi.org/10.1109/TC.2021.3066982",
        selected: false
      },
      {
        title: "The Gap between Visualization Research and Visualization Software in High-Performance Computing Center",
        authors: "Tommy Dang, Ngan Nguyen, Jon Hass, Jie Li, Yong Chen, Alan Sill",
        venue: "The Gap between Visualization Research and Visualization Software (VisGap'21)",
        link: "https://doi.org/10.2312/visgap.20211089",
        selected: false
      }
    ]
  },
  {
    year: "2020",
    papers: [
      {
        title: "MonSTer: An Out-of-the-Box Monitoring Tool for High Performance Computing Systems",
        authors: "Jie Li, Ghazanfar Ali, Ngan Nguyen, Jon Hass, Alan Sill, Tommy Dang, Yong Chen",
        venue: "IEEE International Conference on Cluster Computing (CLUSTER'20)",
        link: "https://doi.org/10.1109/CLUSTER49012.2020.00022",
        selected: true
      },
      {
        title: "Radarviewer: Visualizing the Dynamics of Multivariate Data",
        authors: "Ngan Nguyen, Jon Hass, Yong Chen, Jie Li, Alan Sill, Tommy Dang",
        venue: "Practice and Experience in Advanced Research Computing (PEARC'20)",
        link: "https://doi.org/10.1145/3311790.3404538",
        selected: false
      }
    ]
  },
  {
    year: "2019",
    papers: [
      {
        title: "PIMS: A Lightweight Processing-in-Memory Accelerator for Stencil Computations",
        authors: "Jie Li, Xi Wang, Antonino Tumeo, Brody Williams, John D Leidel, Yong Chen",
        venue: "International Symposium on Memory Systems (MemSys'19)",
        link: "https://doi.org/10.1145/3357526.3357550",
        selected: true
      },
      {
        title: "MAC: Memory Access Coalescer for 3D-stacked Memory",
        authors: "Xi Wang, Antonino Tumeo, John D Leidel, Jie Li, Yong Chen",
        venue: "International Conference on Parallel Processing (ICPP'19)",
        link: "https://doi.org/10.1145/3337821.3337867",
        selected: false
      },
      {
        title: "Mtsad: Multivariate Time Series Abnormality Detection and Visualization",
        authors: "Vung Pham, Ngan Nguyen, Jie Li, Jon Hass, Yong Chen, Tommy Dang",
        venue: "IEEE International Conference on Big Data (BigData'19)",
        link: "https://doi.org/10.1109/BigData47090.2019.9006559",
        selected: false
      }
    ]
  }
];

// Helper function to get selected publications
export const getSelectedPublications = () => {
  return publications
    .flatMap(year => year.papers)
    .filter(paper => paper.selected)
    .slice(0, 4); // Get top 4 selected papers
};
