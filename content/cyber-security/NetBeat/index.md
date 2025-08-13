---
title: "NetBeat"
authors: ["cpslab"] 
date: 2025-08-11
summary: "Network Traffic Characterization for Adaptive Anomaly Detection"
# If you want an Abstract block near the top (mirrors Publications pages):
abstract: "Signature-based solutions and AI-driven supervised classification methods for anomaly detection often fail to keep pace with evolving cyberattacks because of the non-deterministic nature. The NetBeat aims to employ anomaly detection approach grounded in network traffic characterization. The concept is inspired by the human heartbeat, where rhythm and pattern can reveal the anomaly. NetBeat applies this analogy to network communications by modeling baseline traffic patterns and detecting deviations in real time. The proposed method aims to improve adaptability and resilience against unpredictable and emerging threats."
# Optional taxonomy (keep tag names alphanumeric only—repo warns funky chars break builds)
tags: ["netbeat", "anomaly detection", "taffic characterization"]
draft: false
share: false


# Optional quick links just under the title (similar to publication links)
links:
- name: Reference 1
  url: "https://www.researchgate.net/profile/Eva-Papadogiannaki/publication/353227879_A_Survey_on_Encrypted_Network_Traffic_Analysis_Applications_Techniques_and_Countermeasures/links/614a34c4a595d06017e12205/A-Survey-on-Encrypted-Network-Traffic-Analysis-Applications-Techniques-and-Countermeasures.pdf"
- name: Reference 2
  url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1510709"


# (Optional) show this item on section lists as “featured”
featured: true
---

### NetBeat: Network Traffic Characterization for Adaptive Anomaly Detection.

Signature based solutions and supervised classification for anomaly detection struggle to keep pace with evolving cyberattacks because attack behavior is non deterministic and quickly diverges from past labels. NetBeat adopts an unsupervised anomaly detection approach grounded in network traffic characterization that remains effective even when payloads are encrypted. The concept draws on the human heartbeat, where rhythm and pattern reveal anomalies. NetBeat models baseline communication rhythms and detects deviations in real time using metadata that remains observable on encrypted networks, for example packet length sequences, inter arrival timing, burst structure, flow directionality, session duration, and encryption layer signals such as TLS versions, cipher suites, ALPN, and fingerprint features like JA3 or JA4 when available. For QUIC it considers handshake attributes, spin bit behavior, and connection level statistics. The system is designed to remain privacy preserving, since no payload decryption is required, and it is resilient to traffic padding and jitter through robust sequence features and normalization.

Methodologically, NetBeat learns seasonal and context aware baselines per host, subnet, and application cohort, then scores departures from those baselines using a combination of statistical change detection and deep sequence models such as autoencoders or transformers on packet and flow time series. Online adaptation handles concept drift without manual retuning. The detector targets behaviors that persist under encryption, including beaconing command and control, lateral movement, covert exfiltration, tunnel misuse, and staging traffic. The design anticipates reduced visibility caused by encrypted client hello and strict content security policies by falling back to purely flow based features and by fusing signals across concurrent flows. Evaluation will use encrypted and mixed traffic traces with red team scenarios and public corpora, and will report time to detection, false positive rate under drift, ROC AUC, and operational cost. The goal is to demonstrate that NetBeat improves adaptability and resilience against unpredictable and emerging threats on modern encrypted networks while maintaining strong privacy guarantees and scalable deployment.

{{< figure src="netBeat.png" caption=" " width="60%" >}}

{{< figure src="shield.png" caption=" " width="25%" >}}
