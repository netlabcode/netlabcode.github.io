---
title: "Federated Learning IDS"
authors: ["cpslab"] 
date: 2025-08-11
summary: "Federated Deep Learning Application for Intrusion Detection System"
# If you want an Abstract block near the top (mirrors Publications pages):
abstract: "Enhancing the resilience of SMS-based One-Time Password systems against interception, spoofing, and social engineering attacks through protocol improvements and complementary verification mechanisms."
# Optional taxonomy (keep tag names alphanumeric only—repo warns funky chars break builds)
tags: ["netbeat", "anomaly detection", "taffic characterization"]
draft: false
share: false


# Optional quick links just under the title (similar to publication links)
links:
- name: Reference 1
  url: "https://ieeexplore.ieee.org/abstract/document/10705117"
- name: Reference 2
  url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9780571"
- name: Reference 3
  url: "https://arxiv.org/abs/1407.7844"
- name: Reference 4
  url: "https://ieeexplore.ieee.org/document/8006282"



# (Optional) show this item on section lists as “featured”
featured: true
---

### Federated Learning IDS

#### Federated Deep Learning Application for Intrusion Detection System.

Intrusion Detection Systems (IDS) are essential for safeguarding networked environments, yet traditional centralized training approaches for detection models often raise concerns about data privacy, scalability, and adaptability to diverse environments. This research investigates the application of federated deep learning to IDS, enabling multiple entities to collaboratively train robust detection models without sharing raw data. By distributing model training across participating nodes and aggregating only learned parameters, the proposed approach preserves privacy while leveraging diverse, real-world datasets. The study explores architectures optimized for anomaly and signature-based detection, evaluates performance against evolving cyber threats, and assesses resilience to data heterogeneity and poisoning attacks. The ultimate goal is to demonstrate that federated deep learning can deliver high detection accuracy, strong privacy guarantees, and scalable deployment for modern intrusion detection systems.

The implementation of the proposed federated learning IDS will be evaluated in a controlled Mininet simulation environment. In this setup, network traffic data will be distributed across multiple virtual nodes to mimic real-world decentralized scenarios. Each node will locally train its deep learning model using its own subset of traffic data, ensuring that sensitive information remains within its origin. Model parameters will then be securely aggregated at a central server to produce a global detection model. This deployment approach enables systematic testing of detection performance, communication overhead, and scalability under varying network conditions, while maintaining strict data privacy and simulating realistic operational constraints.

{{< figure src="FederatedLearning.png" caption="https://link.springer.com/article/10.1007/s11280-020-00780-4" width="100%" >}}

{{< figure src="shield.png" caption=" " width="25%" >}}

