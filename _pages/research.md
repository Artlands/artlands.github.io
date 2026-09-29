---
layout: page
permalink: /research/
title: Research
description: Research statement.
nav: true
nav_order: 2
---

<div class="cv-page research-page" markdown="1">

<!-- The deploy workflow prints this page to assets/pdf/ResearchStatement_JieLi.pdf (bin/cv_pdf.js). -->

<div class="d-none d-print-block text-center research-print-title">
  <h1>Research Statement</h1>
  <p>Jie Li, Ph.D.</p>
</div>

<p class="text-right cv-download"><a class="btncv" href="{{ '/assets/pdf/ResearchStatement_JieLi.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">Download PDF</a></p>

My research asks how large computing systems can use their own operational data to make better decisions about performance, energy, and security. High-performance computing (HPC) centers now support scientific simulations, data-intensive workflows, and AI services on increasingly heterogeneous hardware. Their software must coordinate processors, GPUs, memory, storage, and power while protecting shared resources. I build the measurement tools, resource-management methods, and architectural prototypes needed to make these systems **observable, efficient, and trustworthy**.

My work connects systems research to operational practice. As a Research Assistant Professor at Texas Tech University, I help operate the NSF-funded, $12.25 million REPACSS system, which I helped design and deploy, and use it as a production research testbed. Earlier, at Lawrence Berkeley National Laboratory, I studied workload behavior on NERSC systems and developed scheduling methods for disaggregated memory. My software has been used in research on monitoring, scheduling, and global-address-space architectures; MonSTer was also adopted by Dell's Omnia project. Recent work extends this foundation into power-centric observability on REPACSS, the energy cost of LLM inference, CXL memory emulation, and the security of AI agents operating in HPC environments. These results support a research agenda in which systems can **measure their state, reason about tradeoffs, and take bounded actions**. Figure 1 maps this foundation to my future directions.

<figure class="roadmap">
  <div class="roadmap-vision">Vision: Observable, efficient, and trustworthy HPC and AI infrastructure</div>
  <div class="roadmap-cols">
    <div class="roadmap-col">
      <div class="roadmap-step roadmap-challenge"><span class="roadmap-label">Challenge</span><strong>Operational trust</strong>AI agents in shared HPC</div>
      <div class="roadmap-step"><span class="roadmap-label">Past + current work</span>MonSTer; REPACSS power observability; ARcode; agent-security benchmark</div>
      <div class="roadmap-step roadmap-future"><span class="roadmap-label">Future direction</span><strong>Scoped, auditable AI agents for HPC operations</strong></div>
    </div>
    <div class="roadmap-col">
      <div class="roadmap-step roadmap-challenge"><span class="roadmap-label">Challenge</span><strong>Resource efficiency</strong>Power and memory constraints</div>
      <div class="roadmap-step"><span class="roadmap-label">Past + current work</span>Perlmutter analysis; disaggregated scheduling; TokenPowerBench; KV cache survey</div>
      <div class="roadmap-step roadmap-future"><span class="roadmap-label">Future direction</span><strong>Joint scheduling, power, and memory control</strong></div>
    </div>
    <div class="roadmap-col">
      <div class="roadmap-step roadmap-challenge"><span class="roadmap-label">Challenge</span><strong>Heterogeneous systems</strong>Distributed memory and new devices</div>
      <div class="roadmap-step"><span class="roadmap-label">Past + current work</span>PIMS; xBGAS; OCEAN (SC'26 accepted); quantum synthesis submission</div>
      <div class="roadmap-step roadmap-future"><span class="roadmap-label">Future direction</span><strong>Programmable CXL and hybrid workflows</strong></div>
    </div>
  </div>
  <figcaption>Figure 1. Research roadmap linking current results to three future directions.</figcaption>
</figure>

## Research contributions

### Observability as a foundation for reliable operation

An HPC center cannot manage what it cannot see. I developed MonSTer, an out-of-the-box monitoring framework that collects system data with low operational overhead {% cite li2020monster --style _bibliography/ieee-cv.csl %}. Its design helped make monitoring practical on production clusters, and its adoption by Dell's Omnia project showed that the approach could transfer beyond one research deployment. During internships at Lawrence Berkeley National Laboratory, I integrated LDMS, DCGM, and Slurm telemetry from Cori and Perlmutter to study jobs at scale. I then applied these data to workload characterization and failure prediction {% cite li2023workload --style _bibliography/ieee-cv.csl %}. In related work, ARcode represented monitoring data as images for application recognition {% cite li2023arcode --style _bibliography/ieee-cv.csl %}, offering a way to identify unexpected workload behavior.

My recent work moves observability from general system health toward power-aware operation. With collaborators, I developed and evaluated power-centric observability on REPACSS {% cite zhao2026power --style _bibliography/ieee-cv.csl %}. This work provides an empirical foundation for asking when and where a workload consumes power, and for connecting those observations to scheduling and control. The system itself is an important part of my research method: having helped build REPACSS, I can test whether a proposed mechanism survives the practical constraints of instrumentation, deployment, and user workloads.

### Resource management across memory and energy constraints

Resource allocation becomes harder when capacity is distributed or costly to use. My analysis of NERSC's Perlmutter system documented how real applications consume compute and memory resources {% cite li2023analyzing --style _bibliography/ieee-cv.csl %}. Building on those measurements, I designed and evaluated scheduling and allocation methods for disaggregated memory {% cite li2024job --style _bibliography/ieee-cv.csl %}, together with an open-source Disaggregation-Aware Scheduler for exploring policy tradeoffs. This line of work treats memory placement, access cost, and job scheduling as a coupled problem rather than independent layers. It also provides a basis for studying newer CXL-enabled systems; I contributed to OCEAN, an open-source CXL emulation effort accepted at SC 2026 {% cite yang2026ocean --style _bibliography/ieee-cv.csl %}.

Energy is now a similarly concrete systems constraint. I coauthored TokenPowerBench, a benchmark for the power consumption of LLM inference {% cite chen2026token --style _bibliography/ieee-cv.csl %}. This work brings power measurement into AI infrastructure, where serving choices must be evaluated against both user-facing performance and electricity use. A recent survey I coauthored maps KV cache management across the memory hierarchy of LLM serving {% cite li2026kvcache --style _bibliography/ieee-cv.csl %}. Ongoing collaborative work, with manuscripts under submission or revision, examines online CPU-frequency control for HPC and the power effects of model distillation. Together these projects ask which system decisions save energy while maintaining performance.

### Hardware-software co-design for emerging systems

My earlier architecture research gives this systems agenda a deeper view of data movement. I designed PIMS, a processing-in-memory accelerator for stencil computations, to reduce transfers between compute and memory {% cite li2019pims --style _bibliography/ieee-cv.csl %}. I also contributed to management techniques for 3D-stacked memory. In the xBGAS project, I developed cycle-accurate simulation and runtime support for global addressing in RISC-V-based systems {% cite li2024towards --style _bibliography/ieee-cv.csl %}. These prototypes make proposed architectural ideas testable before they are broadly available in hardware. OCEAN extends this empirical approach to CXL memory systems {% cite yang2026ocean --style _bibliography/ieee-cv.csl %}.

I am also beginning to explore where HPC methods can support quantum computing. A collaborative manuscript submitted to AAAI 2027 studies neural-native quantum arithmetic and polynomial synthesis. This emerging direction connects to my broader interest in the software and resource-management requirements of hybrid classical-quantum workflows.

## Future research agenda

My next goal is to close the loop between measurement and action while keeping the resulting system auditable and under human control. I will pursue three connected directions, using REPACSS and open-source research tools for realistic evaluation.

### 1. Trustworthy AI agents for HPC operations

HPC operations involve repetitive but consequential tasks: configuring nodes, maintaining software stacks, diagnosing failures, and managing jobs. I have initiated work on agent-assisted REPACSS operations, including student-led automation around Warewulf, Ansible, Spack, and Slurm. My 2026 preprint on LLM-agent security in HPC {% cite li2026trusted --style _bibliography/ieee-cv.csl %} motivates a central question: **how can an agent be useful when it has legitimate credentials but may take unsafe actions?**

I will build an operational agent architecture with scoped permissions, explicit plans, action logs, and approval gates for high-impact changes. The research challenge is to translate natural-language requests into verifiable system actions while accounting for changing cluster state, incomplete telemetry, and tool failures. I will develop benchmarks that test both task completion and safety, including unauthorized configuration changes, misuse of credentials, and recovery from incorrect actions. Initial studies can run in replicated or sandboxed environments; carefully bounded deployments on REPACSS will then measure administrator time, task success, and incident rates. My previous work on MonSTer, ARcode, and failure prediction supplies the sensing layer, while the unfunded SHIELD proposal I co-led and my current student mentoring provide a starting point for the security layer.

### 2. Power- and memory-aware infrastructure for HPC and AI

HPC and AI workloads increasingly compete for power, accelerators, and memory capacity. I will connect REPACSS power telemetry {% cite zhao2026power --style _bibliography/ieee-cv.csl %}, TokenPowerBench {% cite chen2026token --style _bibliography/ieee-cv.csl %}, and workload traces {% cite li2023analyzing --style _bibliography/ieee-cv.csl %} to models that predict the energy and performance effects of placement, frequency, and memory policy. The aim is to optimize _energy to solution_ or _energy per served token_ subject to throughput, latency, fairness, and reliability constraints.

One project will study online control of CPU and GPU operating points alongside queue-level scheduling, using measured power rather than static device specifications. Another will treat LLM KV cache placement and disaggregated memory as a shared systems problem: which data should stay near an accelerator, spill to host or pooled memory, or be recomputed? I will evaluate these choices with representative HPC jobs and AI serving workloads, reporting both benefits and overheads. REPACSS's renewable-energy mission also creates an opportunity to study when flexible jobs can shift in time without harming users. This direction builds directly on my scheduling research {% cite li2024job --style _bibliography/ieee-cv.csl %}, CXL emulation work {% cite yang2026ocean --style _bibliography/ieee-cv.csl %}, and current energy-control collaborations.

### 3. Programmable heterogeneous and hybrid systems

As memory and accelerators become more distributed, programmers need abstractions that expose useful locality without requiring application-specific management of every device. I will extend my xBGAS and CXL work {% cite yang2026ocean li2024towards --style _bibliography/ieee-cv.csl %} to investigate how runtimes and schedulers coordinate global addressing, pooled memory, and data movement. Experiments will compare programmer effort, access latency, system throughput, and power against conventional node-local designs. My PIMS work {% cite li2019pims --style _bibliography/ieee-cv.csl %} provides a complementary path: move selected operations toward data when doing so is more effective than moving data toward compute.

For hybrid classical-quantum workflows, I will first focus on tractable software questions: how to synthesize useful quantum arithmetic, represent workflow dependencies, and schedule classical and quantum stages when quantum resources are scarce. The submitted polynomial-synthesis work is an initial step. I will use simulation and available experimental platforms to establish measurable baselines before proposing tighter integration with HPC infrastructure.

## Closing perspective

The through line of my research is a progression from **observing** complex systems to **allocating** resources intelligently and then **acting** safely. My experience building REPACSS, collaborating with national laboratories and industry, serving as assistant director of the Texas Tech site of the NSF Cloud and Autonomic Computing Center, and mentoring students gives me a practical setting for this agenda. I aim to develop open methods that make scientific and AI infrastructure more efficient, dependable, and secure, while training students to work across architecture, systems software, and real operations.

## Selected references

<div class="cv-refs">
{% bibliography --style _bibliography/ieee-cv.csl --template cv_ref --group_by none --cited_in_order %}
</div>

</div>
