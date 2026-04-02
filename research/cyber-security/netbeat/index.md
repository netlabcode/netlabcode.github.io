---
layout: default
title: "NetBeat"
description: "Network Traffic Characterization for Adaptive Anomaly Detection"
---

<section class="page-hero fade-up">
  <div class="section-label"><a href="/research/cyber-security/" style="color:var(--accent); text-decoration:none;">← Cyber Security</a></div>
  <h1 class="section-title">NetBeat</h1>
  <p class="section-desc">Network Traffic Characterization for Adaptive Anomaly Detection</p>
  <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:1.25rem;">
    <a href="https://www.researchgate.net/profile/Eva-Papadogiannaki/publication/353227879_A_Survey_on_Encrypted_Network_Traffic_Analysis_Applications_Techniques_and_Countermeasures/links/614a34c4a595d06017e12205/A-Survey-on-Encrypted-Network-Traffic-Analysis-Applications-Techniques-and-Countermeasures.pdf" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:0.85rem; padding:0.55rem 1.25rem;">Reference 1</a>
    <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1510709" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:0.85rem; padding:0.55rem 1.25rem;">Reference 2</a>
  </div>
</section>

<section class="page-content">
  <div class="fade-up" style="max-width:800px;">
    <p>Signature-based solutions and supervised classification for anomaly detection struggle to keep pace with evolving cyberattacks because attack behavior is non-deterministic and quickly diverges from past labels. NetBeat adopts an unsupervised anomaly detection approach grounded in network traffic characterization that remains effective even when payloads are encrypted.</p>

    <p>The concept draws on the human heartbeat, where rhythm and pattern reveal anomalies. NetBeat models baseline communication rhythms and detects deviations in real time using metadata that remains observable on encrypted networks: packet length sequences, inter-arrival timing, burst structure, flow directionality, session duration, and encryption layer signals such as TLS versions, cipher suites, ALPN, and fingerprint features like JA3 or JA4. For QUIC, it considers handshake attributes, spin-bit behavior, and connection-level statistics.</p>

    <h2 style="font-family:'Instrument Serif',serif; font-size:1.6rem; margin:2.5rem 0 1rem;">Methodology</h2>

    <p>NetBeat learns seasonal and context-aware baselines per host, subnet, and application cohort, then scores departures from those baselines using a combination of statistical change detection and deep sequence models such as autoencoders or transformers on packet and flow time series. Online adaptation handles concept drift without manual retuning.</p>

    <p>The detector targets behaviors that persist under encryption, including beaconing command-and-control, lateral movement, covert exfiltration, tunnel misuse, and staging traffic. Evaluation will use encrypted and mixed traffic traces with red-team scenarios and public corpora, reporting time-to-detection, false positive rate under drift, ROC AUC, and operational cost.</p>

    <div style="margin-top:2rem;">
      <div class="section-label">Tags</div>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;">
        <span style="background:var(--surface-2); border:1px solid var(--border); border-radius:6px; padding:0.25rem 0.75rem; font-size:0.8rem; color:var(--accent);">Anomaly Detection</span>
        <span style="background:var(--surface-2); border:1px solid var(--border); border-radius:6px; padding:0.25rem 0.75rem; font-size:0.8rem; color:var(--accent);">Traffic Characterization</span>
        <span style="background:var(--surface-2); border:1px solid var(--border); border-radius:6px; padding:0.25rem 0.75rem; font-size:0.8rem; color:var(--accent);">Encrypted Traffic</span>
        <span style="background:var(--surface-2); border:1px solid var(--border); border-radius:6px; padding:0.25rem 0.75rem; font-size:0.8rem; color:var(--accent);">Unsupervised Learning</span>
      </div>
    </div>
  </div>
</section>
