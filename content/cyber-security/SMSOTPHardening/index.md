---
title: "SMS OTP Hardening"
authors: ["cpslab"] 
date: 2025-08-11
summary: "Strengthening the Security of One-Time Password Authentication"
# If you want an Abstract block near the top (mirrors Publications pages):
abstract: "Enhancing the resilience of SMS-based One-Time Password systems against interception, spoofing, and social engineering attacks through protocol improvements and complementary verification mechanisms."
# Optional taxonomy (keep tag names alphanumeric only—repo warns funky chars break builds)
tags: ["netbeat", "anomaly detection", "taffic characterization"]
draft: false
share: false


# Optional quick links just under the title (similar to publication links)
links:
- name: Reference 1
  url: "https://dl.acm.org/doi/pdf/10.1145/3488932.3497756"
- name: Reference 2
  url: "https://ieeexplore.ieee.org/abstract/document/10924738"


# (Optional) show this item on section lists as “featured”
featured: true
---

### SMS OTP Hardening

#### Enhancing the resilience of SMS-based One-Time Password systems against interception, spoofing, and social engineering attacks through protocol improvements and complementary verification mechanisms.

SMS-based One-Time Password (OTP) authentication remains one of the most widely used second-factor security methods due to its simplicity and accessibility. However, it is increasingly vulnerable to evolving attack vectors such as SIM swapping, SS7 protocol exploitation, SMS phishing, and man-in-the-middle interception. This research explores strategies to harden SMS OTP systems without sacrificing usability. Proposed measures include augmenting OTP delivery with cryptographic binding to session metadata, integrating device fingerprinting for contextual verification, and employing adaptive expiration policies based on risk assessment. By combining protocol-level defenses with intelligent anomaly detection, the study aims to significantly raise the difficulty of OTP compromise, thereby extending the viability of SMS-based authentication in modern threat environments.



{{< figure src="shield.png" caption=" " >}}

