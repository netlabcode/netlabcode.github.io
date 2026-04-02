/* ============================================
   CEUI GitHub Pages — Main JS
   ============================================ */

/* === SCROLL ANIMATIONS ===
   Opt in to animations only after JS confirms it's running.
   This prevents invisible content if the observer is slow or fails.
*/
document.body.classList.add('js-animate');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

/* === MOBILE NAV TOGGLE === */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        navLinks.classList.toggle('open', !expanded);
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            toggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
        });
    });

    // Close nav on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            toggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('open');
        }
    });
}

/* === ACTIVE NAV LINK (scroll spy) === */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

const spyObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navItems.forEach((a) => a.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    },
    { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => spyObserver.observe(s));
