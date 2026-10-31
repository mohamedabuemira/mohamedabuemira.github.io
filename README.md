<div align="center">

<a href="https://mohamedabuemira.github.io">
  <img src="https://readme-typing-svg.herokuapp.com?font=Sora&weight=700&size=26&duration=3000&pause=800&color=017E84&center=true&vCenter=true&width=700&height=60&lines=Mohamed+Essam+Abu+Emira;Odoo+Expert+%26+ERP+Operations+Manager;LinkedIn+Top+ERP+Voice+%F0%9F%8F%86+2024;82%2B+Projects+%C2%B7+8%2B+Years+%C2%B7+Egypt+%26+GCC" alt="Typing SVG" />
</a>

<br/>

[![Live Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-mohamedabuemira.github.io-017E84?style=for-the-badge)](https://mohamedabuemira.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abuemira/)
[![Book a Call](https://img.shields.io/badge/Book_a_Call-d4a843?style=for-the-badge&logo=googlecalendar&logoColor=0d1b2e)](https://calendly.com/abuemira/30min)
[![Upwork](https://img.shields.io/badge/Upwork-6FDA44?style=for-the-badge&logo=upwork&logoColor=white)](https://www.upwork.com/freelancers/~01670332eb77159714)

</div>

---

## 👤 About This Repository

This is the source code for the **personal professional portfolio** of **Mohamed Essam Abu Emira** — Odoo Expert & ERP Operations Manager and **LinkedIn Top ERP Voice 2024**.

> ⚡ **Zero-dependency** · Pure HTML + CSS + Vanilla JS · Self-contained single file · No npm · No build tools

---

## 🔴 Live Demo

```
https://mohamedabuemira.github.io
```

---

## 🧑 About Mohamed

| | |
|---|---|
| 📍 **Location** | Kirdasa, Giza, Egypt |
| 💼 **Title** | Odoo Expert & ERP Operations Manager |
| 🏆 **Recognition** | LinkedIn Top ERP Voice 2024 |
| 📞 **Phone** | [+20 100 506 1349](tel:+201005061349) |
| ✉️ **Email** | [abuemira91@gmail.com](mailto:abuemira91@gmail.com) |
| 🎓 **Education** | Cairo University · Missouri State University |

---

## 📊 Career Highlights

| Metric | Value |
|---|---|
| 💼 Years of Experience | 8+ years |
| 📁 Projects Delivered | 82+ ERP projects |
| 🎓 Certifications | 40+ verified |
| 🌍 Regions | Egypt · Saudi Arabia · GCC · MENA |
| 🗣 Recommendations | 29+ LinkedIn recommendations |

---

## ✨ Portfolio Sections

| # | Section | Details |
|---|---|---|
| 1 | 🧑 **Hero** | Photo, title, phone, role badges, Calendly CTA |
| 2 | 📊 **Stats Bar** | 8+ years · 82+ projects · 40+ certs · 29+ recommendations |
| 3 | 🛠 **Services** | ERP implementation, consulting, training & support |
| 4 | 💼 **Experience** | Full career timeline — 2013 to present |
| 5 | 🗂 **Projects** | 82+ filterable ERP projects by industry |
| 6 | 🎓 **Certifications** | 14+ verified certifications with live URLs |
| 7 | 🏆 **Awards** | LinkedIn Top ERP Voice · Odoo Community Contributor |
| 8 | 💬 **Testimonials** | Real client & peer recommendations (auto-scrolling) |
| 9 | 🎓 **Education** | Cairo University · Missouri State University |
| 10 | 📞 **Contact** | Phone · Email · LinkedIn · Upwork · Mostaql · Calendly |

---

## 🎓 Key Certifications

- ✅ **Odoo 16 · 17 · 18** — Functional Certification (Odoo S.A.)
- ✅ **Google Project Management** — Coursera / Google
- ✅ **Financial Management Specialization** — Univ. of Illinois Urbana-Champaign
- ✅ **International Diploma in Entrepreneurship (IPDE)** — Missouri State University
- ✅ **Strategic Leadership** — Dartmouth College
- ✅ **AI Fundamentals** — IBM SkillsBuild
- ✅ **Scrum Fundamentals Certified (SFC)** — SCRUMstudy
- ✅ **Digital Egypt Pioneers Program** — Ministry of Comm. & IT

---

## 📁 Repository Structure

```
mohamedabuemira.github.io/
├── index.html              ← English page (edit this one)
├── ar/index.html           ← Arabic page, GENERATED from index.html
├── tools/build-ar.py       ← regenerates ar/index.html
├── robots.txt, sitemap.xml
└── assets/
    ├── css/style.css       ← all styles (shared by both pages)
    ├── js/main.js          ← all scripts (shared by both pages)
    └── img/                ← photo, share image, favicons, client logos, avatars
```

### Editing content

1. Edit `index.html`. Every translatable element has `data-en` and `data-ar`; keep both in sync.
2. Regenerate the Arabic page: `python3 tools/build-ar.py`
3. Commit both `index.html` and `ar/index.html`.

---

## 🚀 Deployment

### GitHub Pages (Primary)

| Step | Action |
|---|---|
| 1 | Push `index.html` to the `main` branch |
| 2 | Go to **Settings → Pages** |
| 3 | Source: **Deploy from branch** · Branch: `main` · Folder: `/root` |
| 4 | Save → live in **60–90 seconds** |

### Auto-Deploy on Update

```bash
python3 tools/build-ar.py
git add index.html ar/index.html
git commit -m "Update: added new project / certification"
git push origin main
# GitHub Pages redeploys automatically
```

---

## ✏️ Updating Content

Open `index.html` in **VS Code** and use `Ctrl+F` to find:

| What to Update | Search String |
|---|---|
| 📞 Phone number | `+20 100 506 1349` |
| ✉️ Email address | `abuemira91@gmail.com` |
| 📅 Calendly link | `calendly.com/abuemira` |
| ➕ Add new project | `<!-- PROJECTS -->` → duplicate a `.proj-card` div |
| ➕ Add certification | `<!-- CERTIFICATIONS -->` section |
| 🎨 Primary teal | `--teal: #017E84` in `:root` |
| 🎨 Gold accent | `--gold: #d4a843` in `:root` |
| 🎨 Dark navy | `--navy: #0d1b2e` in `:root` |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Action Teal | `#017E84` | Primary brand, CTAs, highlights |
| Gold Accent | `#d4a843` | Awards, stars, buttons |
| Dark Navy | `#0d1b2e` | Hero background, nav |
| Font (Headings) | Sora | Section titles, name |
| Font (Body) | Plus Jakarta Sans | Body text |
| Font (Arabic) | Cairo | RTL / Arabic mode |

> 🌐 **Bilingual** — Portfolio supports full English / Arabic toggle (LTR & RTL)

---

## 🌐 Links

| Resource | URL |
|---|---|
| 🌐 Portfolio | https://mohamedabuemira.github.io |
| 💼 LinkedIn | https://linkedin.com/in/abuemira |
| 📅 Book a Call | https://calendly.com/abuemira/30min |
| 💻 Upwork | https://www.upwork.com/freelancers/~01670332eb77159714 |
| 🛒 Mostaql | https://mostaql.com/u/m_abuemira |
| 🛒 Khamsat | https://khamsat.com/user/محمد-عصام-ابوعميرة/reviews |
| ▶️ YouTube | https://www.youtube.com/@OdooWithAbuemira/ |

---

## 📞 Contact

<div align="center">

**Mohamed Essam Abu Emira**

📍 Kirdasa, Giza, Egypt  
📞 [+20 100 506 1349](tel:+201005061349) &nbsp;|&nbsp; ✉️ [abuemira91@gmail.com](mailto:abuemira91@gmail.com)

</div>

---

<div align="center">
<sub>Built with ❤️ · Action Teal <code>#017E84</code> · Gold Accent <code>#d4a843</code> · Dark Navy <code>#0d1b2e</code></sub>
</div>
