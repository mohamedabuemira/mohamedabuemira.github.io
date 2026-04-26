/* ============================================================
   Abu Emira Portfolio — Main JavaScript
   Improved Version 2.0
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ── PROJECT FILTER ── */
  const filterBtns = document.querySelectorAll(".fbtn");
  const projCards  = document.querySelectorAll(".proj-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      projCards.forEach(card => {
        if (filter === "all" || card.dataset.cat === filter) {
          card.style.display = "";
          card.style.animation = "fadeIn 0.3s ease";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  /* ── SKILL BAR ANIMATION ── */
  const fills  = document.querySelectorAll(".sk-fill");
  const widths = [];
  fills.forEach(el => { widths.push(el.style.width); el.style.width = "0"; });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fills.forEach((el, i) => {
          setTimeout(() => { el.style.width = widths[i]; }, i * 55);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });
  const skillsCard = document.querySelector(".skills-card");
  if (skillsCard) observer.observe(skillsCard);

  /* ── SMOOTH ACTIVE NAV LINK ── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove("active-link"));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active-link");
      }
    });
  }, { rootMargin: "-50% 0px -50% 0px" });
  sections.forEach(s => navObserver.observe(s));

  /* ── SCROLL-TO-TOP BUTTON ── */
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollTop";
  scrollBtn.innerHTML = "↑";
  scrollBtn.title = "Back to top";
  Object.assign(scrollBtn.style, {
    position: "fixed", bottom: "28px", right: "28px",
    width: "44px", height: "44px", borderRadius: "50%",
    background: "var(--teal)", color: "#fff", border: "none",
    fontSize: "18px", fontWeight: "700", cursor: "pointer",
    boxShadow: "0 4px 16px rgba(1,126,132,.4)",
    opacity: "0", transform: "translateY(12px)",
    transition: "all .25s", zIndex: "999",
  });
  document.body.appendChild(scrollBtn);
  window.addEventListener("scroll", () => {
    const show = window.scrollY > 400;
    scrollBtn.style.opacity   = show ? "1" : "0";
    scrollBtn.style.transform = show ? "translateY(0)" : "translateY(12px)";
  });
  scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ── WHATSAPP FLOATING BUTTON ── */
  const waBtn = document.createElement("a");
  waBtn.href = "https://wa.me/201005061349";
  waBtn.target = "_blank";
  waBtn.title = "WhatsApp";
  waBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  Object.assign(waBtn.style, {
    position: "fixed", bottom: "80px", right: "24px",
    width: "50px", height: "50px", borderRadius: "50%",
    background: "#25D366", display: "flex", alignItems: "center",
    justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,.4)",
    zIndex: "999", transition: "transform .2s",
  });
  waBtn.addEventListener("mouseenter", () => waBtn.style.transform = "scale(1.1)");
  waBtn.addEventListener("mouseleave", () => waBtn.style.transform = "scale(1)");
  document.body.appendChild(waBtn);

  /* ── STAT COUNTER ANIMATION ── */
  const statNums = document.querySelectorAll(".stat-n");
  const countUp = (el) => {
    const target = parseInt(el.textContent.replace(/\D/g, ""), 10);
    const suffix = el.textContent.replace(/[0-9]/g, "");
    if (isNaN(target)) return;
    let current = 0;
    const step  = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, 30);
  };
  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { statNums.forEach(countUp); statObserver.disconnect(); }
    });
  }, { threshold: 0.5 });
  const statsBar = document.querySelector(".stats-bar");
  if (statsBar) statObserver.observe(statsBar);

  /* ── MOBILE NAV TOGGLE ── */
  const nav        = document.querySelector(".nav");
  const navLinksEl = document.querySelector(".nav-links");
  const hamburger  = document.createElement("button");
  hamburger.innerHTML = "☰";
  hamburger.id = "hamburger";
  Object.assign(hamburger.style, {
    display: "none", background: "transparent", border: "none",
    color: "#fff", fontSize: "22px", cursor: "pointer", padding: "6px",
  });
  nav.appendChild(hamburger);
  const mq = window.matchMedia("(max-width: 900px)");
  const handleMQ = (e) => {
    if (e.matches) {
      hamburger.style.display = "block";
      navLinksEl.style.display = "none";
      navLinksEl.style.cssText = "display:none;position:absolute;top:62px;left:0;right:0;background:rgba(13,27,46,.98);padding:16px 24px;flex-direction:column;gap:4px;z-index:199;";
    } else {
      hamburger.style.display = "none";
      navLinksEl.style.cssText = "";
    }
  };
  mq.addEventListener("change", handleMQ);
  handleMQ(mq);
  hamburger.addEventListener("click", () => {
    const isOpen = navLinksEl.style.display === "flex";
    navLinksEl.style.display = isOpen ? "none" : "flex";
    hamburger.innerHTML = isOpen ? "☰" : "✕";
  });
  navLinksEl.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      if (mq.matches) { navLinksEl.style.display = "none"; hamburger.innerHTML = "☰"; }
    });
  });

  /* ── SCROLL REVEAL ANIMATION ── */
  const revealEls = document.querySelectorAll(".proj-card, .svc-card, .cert-hl, .test-card, .exp-card, .ind-card");
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.45s ease, transform 0.45s ease";
    revealObserver.observe(el);
  });

});
