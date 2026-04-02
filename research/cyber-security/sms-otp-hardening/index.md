---
layout: default
title: "SMS OTP Hardening"
description: "Strengthening the Security of One-Time Password Authentication"
---

<section class="page-hero fade-up">
  <div class="section-label"><a href="/research/cyber-security/" style="color:var(--accent); text-decoration:none;">← Cyber Security</a></div>
  <h1 class="section-title">SMS OTP Hardening</h1>
  <p class="section-desc">Enhancing the resilience of SMS-based One-Time Password systems against interception, spoofing, and social engineering attacks.</p>
  <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:1.25rem;">
    <a href="https://dl.acm.org/doi/pdf/10.1145/3488932.3497756" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:0.85rem; padding:0.55rem 1.25rem;">Reference 1</a>
    <a href="https://ieeexplore.ieee.org/abstract/document/10924738" target="_blank" rel="noopener" class="btn btn-outline" style="font-size:0.85rem; padding:0.55rem 1.25rem;">Reference 2</a>
  </div>
</section>

<section class="page-content">
  <div class="fade-up" style="max-width:800px;">
    <p>SMS-based One-Time Password (OTP) authentication remains one of the most widely used second-factor security methods due to its simplicity and accessibility. However, it is increasingly vulnerable to evolving attack vectors such as SIM swapping, SS7 protocol exploitation, SMS phishing, and man-in-the-middle interception.</p>

    <p>This research explores strategies to harden SMS OTP systems without sacrificing usability. Proposed measures include augmenting OTP delivery with cryptographic binding to session metadata, integrating device fingerprinting for contextual verification, and employing adaptive expiration policies based on risk assessment.</p>

    <h2 style="font-family:'Instrument Serif',serif; font-size:1.6rem; margin:2.5rem 0 1rem;">Approach</h2>

    <p>By combining protocol-level defenses with intelligent anomaly detection, the study aims to significantly raise the difficulty of OTP compromise, thereby extending the viability of SMS-based authentication in modern threat environments. The framework targets attacks including SIM swap fraud, SS7 interception, real-time phishing relays, and social engineering.</p>

    <div style="margin-top:2rem;">
      <div class="section-label">Tags</div>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;">
        <span style="background:var(--surface-2); border:1px solid var(--border); border-radius:6px; padding:0.25rem 0.75rem; font-size:0.8rem; color:var(--accent);">Authentication</span>
        <span style="background:var(--surface-2); border:1px solid var(--border); border-radius:6px; padding:0.25rem 0.75rem; font-size:0.8rem; color:var(--accent);">OTP Security</span>
        <span style="background:var(--surface-2); border:1px solid var(--border); border-radius:6px; padding:0.25rem 0.75rem; font-size:0.8rem; color:var(--accent);">SMS</span>
        <span style="background:var(--surface-2); border:1px solid var(--border); border-radius:6px; padding:0.25rem 0.75rem; font-size:0.8rem; color:var(--accent);">Protocol Security</span>
      </div>
    </div>
  </div>
</section>
