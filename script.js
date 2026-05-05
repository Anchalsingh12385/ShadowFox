/* ============================================================
   SCRIPT.JS — Alex Morgan Portfolio
   ============================================================ */

/* ── 1. Custom Cursor ── */
(function initCursor() {
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');

  if (!cursor || !cursorRing) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform     = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });

  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity     = '0';
    cursorRing.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity     = '1';
    cursorRing.style.opacity = '0.5';
  });
})();


/* ── 2. Navbar: shrink on scroll ── */
(function initNavScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
})();


/* ── 3. Mobile hamburger menu ── */
(function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
})();

/**
 * Called inline by each mobile nav link (onclick="closeMobile()")
 * Exported to window so it is accessible from HTML.
 */
function closeMobile() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger)  hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}
window.closeMobile = closeMobile;


/* ── 4. Intersection Observer: scroll-reveal + skill bars ── */
(function initReveal() {
  // --- 4a. Generic .reveal elements ---
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // --- 4b. Skill bar fills ---
  const skillFills = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill  = entry.target;
          const width = parseFloat(fill.dataset.width || 1);
          // Apply the scaleX via CSS variable so the CSS transition fires correctly
          fill.style.transform = `scaleX(${width})`;
          fill.classList.add('animated');
          skillObserver.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillFills.forEach((fill) => skillObserver.observe(fill));
})();


/* ── 5. Active nav-link highlight on scroll ── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${entry.target.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => sectionObserver.observe(s));
})();


/* ── 6. Animated counter for About stats ── */
(function initCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  if (!statNums.length) return;

  /**
   * Animates a number from 0 to `target`.
   * @param {HTMLElement} el     - The element whose text to update.
   * @param {number}      target - End value.
   * @param {string}      suffix - Optional suffix like '+'.
   * @param {number}      duration - Animation duration in ms.
   */
  function animateCounter(el, target, suffix, duration) {
    const start     = performance.now();
    const startVal  = 0;

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const current  = Math.floor(startVal + eased * (target - startVal));
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el   = entry.target;
          const raw  = el.textContent.trim();          // e.g. "5+" or "42"
          const suffix = raw.replace(/[0-9]/g, '');    // extract non-digit suffix
          const value  = parseInt(raw, 10);
          animateCounter(el, value, suffix, 1200);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNums.forEach((el) => counterObserver.observe(el));
})();


/* ── 7. Contact form: client-side validation & feedback ── */
(function initContactForm() {
  const form     = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  if (!form || !formNote) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple validation
    if (!name) {
      showNote('Please enter your name.', 'error');
      form.name.focus();
      return;
    }

    if (!isValidEmail(email)) {
      showNote('Please enter a valid email address.', 'error');
      form.email.focus();
      return;
    }

    if (!message) {
      showNote('Please write a message before sending.', 'error');
      form.message.focus();
      return;
    }

    // Simulate async send (replace with real fetch/API call)
    const submitBtn = form.querySelector('.form-submit');
    submitBtn.textContent  = 'Sending…';
    submitBtn.disabled     = true;

    setTimeout(() => {
      showNote('Message sent! I\'ll get back to you within 24 hours.', 'success');
      form.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled    = false;
    }, 1500);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showNote(text, type) {
    formNote.textContent  = text;
    formNote.className    = `form-note ${type}`;
    // Auto-clear after 5 seconds
    clearTimeout(formNote._timer);
    formNote._timer = setTimeout(() => {
      formNote.textContent = '';
      formNote.className   = 'form-note';
    }, 5000);
  }
})();


/* ── 8. Smooth scroll for all anchor links ── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
      const top       = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ── 9. Parallax tilt on project cards ── */
(function initCardTilt() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = (e.clientX - rect.left) / rect.width  - 0.5;   // -0.5 → 0.5
      const y      = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
    });
  });
})();


/* ── 10. Current year in footer ── */
(function setFooterYear() {
  const yearEls = document.querySelectorAll('[data-year]');
  const year    = new Date().getFullYear();
  yearEls.forEach((el) => { el.textContent = year; });
})();
