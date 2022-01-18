---
title: 'Software Architecture Patterns'
date: 2022-01-17
permalink: /posts/2022/01/software-architecture/
tags:
  - software
  - architecture
---

Even I am a researcher working on HPC related topics and software engineering is not my focus, I still find that having some basic knowledge of software architecture patterns helps to design and implement research ideas, and it helps you to plot diagrams of architecture design in your paper. Here, I found a brief introduction of the existing architecture patterns and I would like to share it in the post for future reference.

The original post is [here](https://orkhanscience.medium.com/software-architecture-patterns-5-mins-read-e9e3c8eb47d2), which is summaried based on the book (Software Architecture Patterns)[https://www.goodreads.com/en/book/show/25091671-software-architecture-patterns] by [Mark Richards](https://www.developertoarchitect.com/mark-richards.html).


### 1. Layered architecture ###
It is the most common architecture for monolitic applications. The application is divided into **several layers** each encapsulating specific role. 

![Figure 1. Layered architecture pattern](../images/blogs/2022-01-17/layered.png)
