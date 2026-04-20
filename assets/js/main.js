"use strict";

document.addEventListener("DOMContentLoaded", () => {

  /* ── Navbar scroll effect ── */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile hamburger ── */
  const toggle   = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
    });
    // Close on link click
    navLinks.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", false);
      })
    );
  }

  /* ── Active nav link on scroll ── */
  const sections  = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  if (sections.length && navAnchors.length) {
    const activateNav = () => {
      let current = "";
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
      });
      navAnchors.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
      });
    };
    window.addEventListener("scroll", activateNav, { passive: true });
    activateNav();
  }

  /* ── Scroll-to-top button ── */
  const scrollBtn = document.createElement("button");
  scrollBtn.className = "scroll-top";
  scrollBtn.setAttribute("aria-label", "Back to top");
  scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollBtn);
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });
  scrollBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  /* ── Intersection Observer: reveal on scroll ── */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealObserver.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── Skill bar animation ── */
  const skillFills = document.querySelectorAll(".skill-fill[data-pct]");
  if (skillFills.length) {
    const skillObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.width = e.target.dataset.pct + "%";
          skillObserver.unobserve(e.target);
        }
      }),
      { threshold: 0.3 }
    );
    skillFills.forEach(el => skillObserver.observe(el));
  }

  /* ── Stat counter animation ── */
  const statNums = document.querySelectorAll(".stat-num[data-target]");
  if (statNums.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = +el.dataset.target;
        const suffix = el.dataset.suffix || "";
        const dur    = 1600;
        const step   = 16;
        const inc    = target / (dur / step);
        let cur = 0;
        const tick = () => {
          cur = Math.min(cur + inc, target);
          el.firstChild.textContent = Math.round(cur);
          if (cur < target) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }),
      { threshold: 0.5 }
    );
    statNums.forEach(el => counterObserver.observe(el));
  }

  /* ── Project filter ── */
  const filterBtns   = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card[data-cat]");
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.filter;
        projectCards.forEach(card => {
          const match = cat === "all" || card.dataset.cat === cat;
          card.classList.toggle("hidden", !match);
        });
      });
    });
  }

});
