/* Scripts for index.html and ar/index.html (loaded with defer) */
/* ── TESTIMONIALS DATA ── */
const TESTIMONIALS = [
  {cat:"client",name:"Faical Hafiane",role:"CEO @ FAMFOOD | Expert in International Trade",img:"/assets/img/recommendations/Faical.jpeg",linkedin:"https://www.linkedin.com/in/faical-hafiane/",q:"Excellent and professional.",q_ar:"ممتاز ومحترف.",role_ar:"الرئيس التنفيذي @ FAMFOOD | خبير في التجارة الدولية"},
  {cat:"client",name:"Mohamed Khalil",role:"Founder & CEO @PlatFarm | Digitizing Agriculture in MENA",img:"/assets/img/recommendations/MohamedKhalil.jpeg",linkedin:"https://www.linkedin.com/in/mohamed-khalil-a0ba2515/",q:"We had a great experience working with Mohamed on the implementation of our company's ERP system. His strong technical expertise combined with solid accounting knowledge allowed him to deliver a seamless and tailored Odoo solution that fully met our requirements.",q_ar:"تجربتنا مع محمد في تطبيق نظام ERP كانت ممتازة. جمع بين خبرة تقنية عالية ومعرفة محاسبية راسخة مما أتاح له تقديم حل Odoo سلس ومخصص تماماً لاحتياجاتنا.",role_ar:"مؤسس ورئيس تنفيذي @ PlatFarm | رقمنة القطاع الزراعي في MENA"},
  {cat:"finance",name:"Ahmed Malik",role:"CFO",img:"/assets/img/recommendations/ahmed_malik.jpeg",linkedin:"https://www.linkedin.com/in/ahmed-malik-a4462a143/",q:"Mohamed Essam is one of the hardworking individuals. I worked with him personally, and he knows what he is doing according to professional principles.",q_ar:"محمد عصام من الأفراد المجتهدين. عملت معه شخصياً وهو يعرف ما يقوم به وفق مبادئ احترافية راسخة.",role_ar:"مدير مالي CFO"},
  {cat:"odoo",name:"Hesham Elmahdy",role:"Co-Founder @OdooTec",img:"/assets/img/recommendations/hesham.jpeg",linkedin:"https://www.linkedin.com/in/heshamelmahdy/",q:"Mohammad was my go-to colleague when I wanted finance and accounting related consulting. He's precise, professional, time sensitive and dependable. Most importantly, I fully trust him. I'd love to work with him again anytime.",q_ar:"كان محمد مرجعي الأول دائماً حين أحتاج استشارة في المالية والمحاسبة. دقيق، محترف، يلتزم بالمواعيد وجدير بالثقة التامة. أتمنى العمل معه مجدداً في أي وقت.",role_ar:"شريك مؤسس @ OdooTec"},
  {cat:"odoo",name:"Ahmed Hassan Algammal",role:"Vice President of Sales @ Absolute ERP",img:"/assets/img/recommendations/ahmedhassan.jpeg",linkedin:"#",q:"Mohamed has been an integral part of my team as a senior Odoo Implementer for the past five years. He has consistently demonstrated a deep technical understanding of the Odoo ecosystem and a unique ability to translate complex business requirements into functional, scalable solutions. His dedication and consistency over the years make him a rare find in the ERP space.",q_ar:"كان محمد جزءاً لا يتجزأ من فريقي بصفته مطبّق Odoo أول لمدة خمس سنوات، وأثبت باستمرار فهماً تقنياً عميقاً لمنظومة Odoo وقدرةً فريدة على ترجمة المتطلبات المعقدة إلى حلول وظيفية قابلة للتوسع.",role_ar:"نائب رئيس المبيعات @ Absolute ERP"},
  {cat:"odoo",name:"Mohammad Nasab",role:"Regional Partner Manager @Odoo | ERP Growth Strategist",img:"/assets/img/recommendations/MohammadNasab.jpeg",linkedin:"https://www.linkedin.com/in/mohammad-nasab97/",q:"One of the most dedicated technical guys that I worked with before, your deep understanding of what you're doing, reflects in the success of your projects.",q_ar:"من أكثر الأشخاص تفانياً في العمل التقني الذين عملت معهم؛ فهمك العميق لما تقوم به ينعكس جلياً في نجاح مشاريعك.",role_ar:"مدير شراكات إقليمية @ Odoo | استراتيجي نمو ERP"},
  {cat:"client",name:"Yasser A. AL Samhouri",role:"Finance Manager | Budgeting & Forecasting",img:"/assets/img/recommendations/Yasser.jpg",linkedin:"https://www.linkedin.com/in/yasser-arafat-al-samhouri/",q:"Mohamed Essam Abu Emira is a very dedicated person to his work and his customers. His professionalism and expertise were evident throughout our collaboration.",q_ar:"محمد عصام أبو عميرة شخص متفانٍ جداً في عمله وعملائه. احترافيته وخبرته كانت جلية طوال فترة تعاوننا.",role_ar:"مدير مالي | الميزانية والتوقعات المالية"},
  {cat:"pm",name:"Aya Mohsen",role:"Strategy & Corporate Development Senior Manager",img:"/assets/img/recommendations/aya.jpeg",linkedin:"https://www.linkedin.com/in/aya-mohsen-cma-fmva-3919a875/",q:"Essam is a very hard-working person, he is also very dedicated and ambitious. I enjoyed teaching him.",q_ar:"عصام شخص مجتهد جداً، كما أنه متفانٍ وطموح. استمتعت بتعليمه.",role_ar:"مدير أول للاستراتيجية والتطوير المؤسسي"},
  {cat:"pm",name:"Ahmed Rashad",role:"ERP / Odoo Project Manager",img:"/assets/img/recommendations/rashed.jpeg",linkedin:"https://www.linkedin.com/in/ahmedrashad11/",q:"Mohamed is very talented — he is a professional accountant & Odoo implementer, has the ability to handle customers well by building great relationships with them that will help the project.",q_ar:"محمد موهوب للغاية — محاسب محترف ومطبّق Odoo متمكن، يتعامل مع العملاء ببراعة ويبني معهم علاقات قوية تدعم المشروع.",role_ar:"مدير مشاريع ERP / Odoo"},
  {cat:"pm",name:"Ahmed Galal, PMP®, PBA®",role:"Business Consultant & Project Manager | Odoo ERP",img:"/assets/img/recommendations/galal.jpeg",linkedin:"https://www.linkedin.com/in/ahmed-galal-pmp%C2%AE-pba%C2%AE-29b170169/",q:"I was consistently impressed by his strong technical skills and deep understanding of ERP systems, particularly Odoo. Mohamed's expertise in financial accounting and supply chain management was invaluable to our team.",q_ar:"أبهرني باستمرار بمهاراته التقنية القوية وفهمه العميق لأنظمة ERP ولا سيما Odoo. خبرته في المحاسبة المالية وإدارة سلاسل التوريد كانت ذات قيمة لا تُقدَّر لفريقنا.",role_ar:"مستشار أعمال ومدير مشاريع | خبير Odoo ERP"},
  {cat:"odoo",name:"Ahmed Abdelhak",role:"SAP FI/CO/SD | Odoo ERP Consultant | Business Analyst",img:"/assets/img/recommendations/abdelhak.jpeg",linkedin:"https://www.linkedin.com/in/ahmed-abdelhak-23855566/",q:"Mohamed demonstrated an exceptional ability to analyze business processes, design effective solutions, and successfully implement Odoo ERP projects. He stands out with his strong analytical skills, deep understanding of business needs, and ability to optimize operations using Odoo systems.",q_ar:"أثبت محمد قدرة استثنائية في تحليل العمليات التجارية وتصميم الحلول الفعّالة وتطبيق مشاريع Odoo ERP بنجاح. يتميز بمهاراته التحليلية القوية وفهمه العميق لاحتياجات الأعمال.",role_ar:"SAP FI/CO/SD | مستشار Odoo ERP | محلل أعمال"},
  {cat:"odoo",name:"Mohsen DIFALLAH",role:"Python / Odoo Developer",img:"/assets/img/recommendations/difallah.jpeg",linkedin:"https://www.linkedin.com/in/mohsen-difallah-496b35a4/",q:"He has exceptional analytical skills, a talent for solving complex challenges, and profound expertise in ERP systems, especially Odoo, with a focus on accounting and financial implementation. Mohamed is not only technically brilliant but also a great team player who consistently delivers results.",q_ar:"يتمتع بمهارات تحليلية استثنائية وموهبة في حل التحديات المعقدة وخبرة عميقة في أنظمة ERP ولا سيما Odoo مع تركيز على التطبيق المحاسبي والمالي.",role_ar:"مطور Python / Odoo"},
  {cat:"odoo",name:"Muhammad Mahmoud",role:"Sr. Odoo Functional Consultant | Certified v15,v16 | PM",img:"/assets/img/recommendations/muhammad_mahmoud.jpeg",linkedin:"https://www.linkedin.com/in/muhammad-m-abod/",q:"I have worked with Muhammad Abu Amira for nearly two years, and I recommend him to any company that needs a reliable person who has experience as a functional consultant, systems analyst, problem solver, multi-skilled, works under pressure, and also an expert in accounting.",q_ar:"عملت مع محمد أبو عميرة قرابة عامين، وأوصي به لأي شركة تحتاج شخصاً موثوقاً يمتلك خبرة المستشار الوظيفي ومحلل الأنظمة وحل المشكلات.",role_ar:"مستشار Odoo الوظيفي الأول | معتمد v15, v16 | مدير مشاريع"},
  {cat:"finance",name:"Abdulrahman Gwida",role:"DipIFR | FMVA | Odoo Specialist | Financial Modeling",img:"/assets/img/recommendations/gwida.jpeg",linkedin:"https://www.linkedin.com/in/abdelrahman-gwida/",q:"Muhamad is a hardworking, skilled, and dedicated professional whose eagerness to learn is limitless. His expertise and determination make him a remarkable asset to any team.",q_ar:"محمد محترف مجتهد وماهر ومتفانٍ، ولهفته للتعلم لا حدود لها. خبرته وعزيمته يجعلانه إضافة استثنائية لأي فريق.",role_ar:"دبلوم IFRS | FMVA | متخصص Odoo | النمذجة المالية"},
  {cat:"odoo",name:"Ahmed Elsayed",role:"Senior Python | Odoo Developer",img:"/assets/img/recommendations/ahmed.jpeg",linkedin:"https://www.linkedin.com/in/damhogy/",q:"Mohamed is one of the best Odoo Consultants I worked with. He has the ability to simplify any complex requirements and make sure it will be done with the best way and quality.",q_ar:"محمد من أفضل مستشاري Odoo الذين عملت معهم. يمتلك قدرة نادرة على تبسيط أي متطلبات معقدة وضمان تنفيذها بأفضل طريقة وأعلى جودة.",role_ar:"مطور Python / Odoo أول"},
  {cat:"odoo",name:"Nourhan Hazim",role:"Software Testing Engineer at Celfocus | Advansys",img:"/assets/img/recommendations/nourhan_hazim.jpeg",linkedin:"https://www.linkedin.com/in/nourhan-hazim/",q:"One of the best functional consultants I've ever worked with. Great co-worker and mentor.",q_ar:"من أفضل المستشارين الوظيفيين الذين عملت معهم على الإطلاق. زميل رائع ومرشد ممتاز.",role_ar:"مهندسة اختبار برمجيات @ Celfocus | Advansys"},
  {cat:"odoo",name:"Ayman Tobbala",role:"Senior Odoo Functional Consultant",img:"/assets/img/recommendations/ayman_tobbala.jpeg",linkedin:"https://www.linkedin.com/in/aymantobbala/",q:"Abu Emira is specialized in Accounting, performed Odoo implementation, support, and training for end users. He worked for clients in Egypt, Saudi Arabia, and Canada.",q_ar:"أبو عميرة متخصص في المحاسبة، ونفّذ تطبيق Odoo ودعمه وتدريب المستخدمين عليه. عمل مع عملاء في مصر والمملكة العربية السعودية وكندا.",role_ar:"مستشار Odoo الوظيفي الأول"},
  {cat:"odoo",name:"Ahmed Saeed",role:"Python Developer | Backend | AWS Cloud | Odoo Technical",img:"/assets/img/recommendations/ahmed_saeed.jpeg",linkedin:"https://www.linkedin.com/in/ahmed-saeed-75a2938b/",q:"Mohamed was one of the colleagues who helped me understand Odoo and business practices in general, and he is also one of the most dedicated coworkers.",q_ar:"كان محمد من الزملاء الذين ساعدوني في فهم Odoo وممارسات الأعمال بشكل عام، وهو أيضاً من أكثر زملاء العمل تفانياً.",role_ar:"مطور Python | Backend | AWS Cloud | مستشار Odoo التقني"},
  {cat:"odoo",name:"Bassant Hossam",role:"SAI and Automation Engineer",img:"/assets/img/recommendations/bassant_hossam.jpeg",linkedin:"https://www.linkedin.com/in/bassant-hossam-366403208/",q:"I highly recommend Mohamed Essam Abu Emira as an exceptional Odoo Functional Consultant. His expertise in Odoo, ability to analyze complex requirements, and bridge the gap between functional and technical aspects make him a valuable asset.",q_ar:"أوصي بشدة بمحمد عصام أبو عميرة بصفته مستشار Odoo الوظيفي المتميز.",role_ar:"مهندسة أتمتة SAI"},
  {cat:"odoo",name:"Muhammed Abdelfatah",role:"AI Track Supervisor at ITI",img:"/assets/img/recommendations/muhammed_abdelfatah.jpeg",linkedin:"https://www.linkedin.com/in/muhammed-abdelfatah-a45ab9104/",q:"During the time we worked together, Mohamed was highly professional, efficient, and an excellent Odoo consultant. He always aspired to improve himself in all aspects and went beyond expectations.",q_ar:"خلال فترة عملنا معاً كان محمد محترفاً وكفؤاً ومستشار Odoo متميزاً. كان يسعى دائماً لتطوير نفسه في جميع الجوانب ويتخطى التوقعات.",role_ar:"مشرف مسار الذكاء الاصطناعي @ ITI"},
  {cat:"odoo",name:"Mohamed Salah Helal",role:"Odoo Developer | Data Scientist | Session Lead",img:"/assets/img/recommendations/mohamed_salah_helal.jpeg",linkedin:"https://www.linkedin.com/in/mohamed-salah-helal/",q:"Mohamed and I worked together on several projects at Odootec, and I was lucky to call him my coworker. He consistently gave 100 percent effort to the team and played a significant role in ensuring we completed all tasks on time.",q_ar:"عمل محمد وأنا معاً على عدة مشاريع في OdooTec، وكنت محظوظاً أن أسميه زميلي. كان يعطي 100% من جهده للفريق.",role_ar:"مطور Odoo | عالم بيانات | قائد جلسات"},
  {cat:"odoo",name:"Mohamed Nayel",role:"Software Test Engineer @ Transflo",img:"/assets/img/recommendations/mohamed_nayel.jpeg",linkedin:"https://www.linkedin.com/in/momagdinayel/",q:"I'm thrilled that I had worked with Mohamed on several projects. He is one of the best people I had as a coworker. I highly recommend his expertise; he is a person who can tackle any problem remarkably with hard and smart work.",q_ar:"يسعدني أنني عملت مع محمد على عدة مشاريع. هو من أفضل الأشخاص الذين عملت معهم. أوصي بخبرته بشدة.",role_ar:"مهندس اختبار برمجيات @ Transflo"},
  {cat:"finance",name:"Mostafa Rohaim",role:"JDE Specialist at Exact Fabrication Services",img:"/assets/img/recommendations/avatar-1.png",linkedin:"#",q:"بشمهندس محمد واحد من أكثر الناس اللي قابلتهم تركيزا و تفانيا في الشغل و رغبة في تعلم الجديد و تطوير الذات دا بجانب خبرته الكبيرة في الحسابات و أودو طبعا.",q_ar:"محمد واحد من أكثر الناس اللي قابلتهم تركيزاً وتفانياً في الشغل، ورغبةً في تعلم الجديد وتطوير الذات، دا بجانب خبرته الكبيرة في الحسابات وأودو.",role_ar:"متخصص JDE @ Exact Fabrication Services"},
  {cat:"pm",name:"Heba Allam",role:"HR & Administration Manager at Nutriti Pharma",img:"/assets/img/recommendations/heba_allam.jpeg",linkedin:"https://www.linkedin.com/in/heba-allam-2194231b/",q:"Mohamed is a very dedicated, loyal person. He is always ready to take over all the work responsibility.",q_ar:"محمد شخص متفانٍ ومخلص جداً. دائماً مستعد لتحمّل مسؤولية جميع مهام العمل.",role_ar:"مدير موارد بشرية وإدارة @ Nutriti Pharma"},
  {cat:"odoo",name:"Yousef Ashraf",role:"Odoo Developer at Intalio-Everteam GS",img:"/assets/img/recommendations/yousef_ashraf.jpeg",linkedin:"https://www.linkedin.com/in/yousef-a-luka/",q:"I have worked with Mohamed for a while, he is so helpful in teamwork, and has never hesitated to share his knowledge with others.",q_ar:"عملت مع محمد لفترة؛ هو متعاون جداً في العمل الجماعي ولم يتردد يوماً في مشاركة معرفته مع الآخرين.",role_ar:"مطور Odoo @ Intalio-Everteam GS"},
  {cat:"client",name:"Caroline Farid",role:"EX Dentist, A Marketer",img:"/assets/img/recommendations/caroline_farid.jpeg",linkedin:"https://www.linkedin.com/in/caroline-farid-a39546221/",q:"Professional and can handle clients very well.",q_ar:"محترف ويتعامل مع العملاء باحترافية عالية.",role_ar:"طبيبة أسنان سابقة، متخصصة تسويق"},
  {cat:"odoo",name:"Mohamed Eldabbas",role:"Marketing and Technical Writer",img:"/assets/img/recommendations/avatar-1.png",linkedin:"https://www.linkedin.com/in/mohamed-eldabbas-6a1679151/",q:"I wholeheartedly recommend Mohamed Essam Abu Emira for any Odoo-related project. His expertise and dedication make him an asset to any team.",q_ar:"أوصي بمحمد عصام أبو عميرة من كل قلبي لأي مشروع متعلق بـ Odoo. خبرته وتفانيه يجعلانه أصلاً قيماً لأي فريق.",role_ar:"كاتب تسويقي وتقني"},
  {cat:"odoo",name:"Amr Farouk",role:"ERP Technical Support Manager",img:"/assets/img/recommendations/amr_farouk.jpeg",linkedin:"#",q:"Mr. Mohamed is one of the best colleagues I've worked with.",q_ar:"السيد محمد من أفضل الزملاء الذين عملت معهم.",role_ar:"مدير الدعم التقني ERP"},
  {cat:"finance",name:"Ahmed Ezzat Embaby",role:"Financial Analyst at Ebny Real Estate Development",img:"/assets/img/recommendations/ahmed_ezzat_embaby.jpeg",linkedin:"https://www.linkedin.com/in/ahmed-ezzat-embaby-11607645/",q:"He is a hard worker.",q_ar:"مجتهد في عمله.",role_ar:"محلل مالي @ Ebny Real Estate Development"}
];

/* ── RENDER MARQUEE ── */
function buildMarquee() {
  const track = document.getElementById('marqueeTrack');
  if(!track) return;
  const ar = document.documentElement.lang === 'ar';
  const all = [...TESTIMONIALS, ...TESTIMONIALS];
  track.innerHTML = all.map(t => {
    const q    = (ar && t.q_ar)    ? t.q_ar    : t.q;
    const role = (ar && t.role_ar) ? t.role_ar : t.role;
    return `
    <div class="test-card-mq">
      <div class="test-stars-mq">★★★★★</div>
      <p class="test-q-mq">"${q}"</p>
      <div class="test-author-mq">
        <img src="${t.img}" alt="${t.name}" class="test-av-mq" loading="lazy" onerror="this.style.opacity='0'">
        <div>
          <div class="test-name-mq">${t.name}</div>
          <div class="test-role-mq">${role}</div>
          ${t.linkedin && t.linkedin !== '#' ? `<a href="${t.linkedin}" target="_blank" class="test-li-mq">LinkedIn ↗</a>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
  const countEl = document.getElementById('testCount');
  if(countEl) {
    const arText = `· ${TESTIMONIALS.length}+ توصية على LinkedIn`;
    const enText = `· ${TESTIMONIALS.length}+ LinkedIn Recommendations`;
    countEl.textContent = ar ? arText : enText;
  }
}

/* ── REC MODAL ── */
const REC_CATEGORIES = {
  all:     { label: "All",             labelAr: "الكل",          icon: "" },
  odoo:    { label: "Odoo / ERP",      labelAr: "أودو / ERP",    icon: "" },
  finance: { label: "Finance",         labelAr: "المالية",       icon: "" },
  pm:      { label: "PM / Management", labelAr: "إدارة مشاريع", icon: "" },
  client:  { label: "Clients",         labelAr: "العملاء",       icon: "" }
};

let REC_ANNOTATED = null;
function buildRecAnnotated() {
  return TESTIMONIALS.map(t => ({ cat: t.cat || "odoo", ...t }));
}

let recsLoaded = false;
let recsActiveFilter = 'all';

let recModalOpener = null;
function openRecModal(){
  recModalOpener = document.activeElement;
  document.getElementById('recModal').classList.add('open');
  document.body.style.overflow='hidden';
  document.querySelector('#recModal .full-modal-close').focus();
  if (!recsLoaded) {
    recsLoaded = true;
    REC_ANNOTATED = buildRecAnnotated();
    const filterRow = document.getElementById('recsFilterRow');
    if(filterRow) {
      Object.entries(REC_CATEGORIES).forEach(([key, val]) => {
        const btn = document.createElement('button');
        btn.dataset.cat = key;
        btn.className = 'recs-filter-btn' + (key==='all'?' active':'');
        const AR = document.documentElement.dir === 'rtl';
        btn.textContent = AR ? val.labelAr : val.label;
        btn.addEventListener('click', () => {
          recsActiveFilter = key;
          filterRow.querySelectorAll('.recs-filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.cat === key);
          });
          renderRecsGrid();
        });
        filterRow.appendChild(btn);
      });
    }
    renderRecsGrid();
  }
}

function renderRecsGrid() {
  const grid = document.getElementById('recsGrid');
  if(!grid) return;
  const list = recsActiveFilter === 'all'
    ? REC_ANNOTATED
    : REC_ANNOTATED.filter(r => r.cat === recsActiveFilter);
  grid.style.opacity = '0';
  setTimeout(() => {
    grid.innerHTML = list.map((r, i) => `
      <div style="background:#fff;border:1px solid var(--gray-200);border-radius:var(--rl);padding:22px;display:flex;flex-direction:column;gap:14px;opacity:0;transform:translateY(16px);transition:opacity .35s ${i*30}ms ease,transform .35s ${i*30}ms ease;box-shadow:0 2px 8px rgba(0,0,0,.04);" class="rec-card-anim">
        <div style="color:#D97706;font-size:1rem;">★★★★★</div>
        <p style="font-size:.84rem;color:var(--gray-600);line-height:1.7;font-style:italic;flex:1;">"${r.q}"</p>
        <div style="display:flex;align-items:center;gap:12px;padding-top:10px;border-top:1px solid var(--gray-200);">
          <img src="${r.img}" alt="${r.name}" style="width:40px;height:40px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid rgba(1,126,132,.3);" onerror="this.style.opacity='0'">
          <div style="min-width:0;">
            <div style="font-size:.85rem;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r.name}</div>
            <div style="font-size:.72rem;color:var(--gray-400);line-height:1.4;margin-top:1px;">${r.role}</div>
            ${r.linkedin && r.linkedin !== '#' ? `<a href="${r.linkedin}" target="_blank" style="font-size:.72rem;color:var(--teal);font-weight:700;margin-top:3px;display:inline-block;">LinkedIn ↗</a>` : ''}
          </div>
        </div>
      </div>`).join('');
    requestAnimationFrame(() => {
      grid.style.opacity = '1';
      grid.querySelectorAll('.rec-card-anim').forEach(card => {
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      });
    });
  }, 120);
}

function closeRecModal(){
  const modal = document.getElementById('recModal');
  if (!modal.classList.contains('open')) return;
  modal.classList.remove('open');
  document.body.style.overflow='';
  if (recModalOpener) recModalOpener.focus();
}
document.addEventListener('keydown', function(e){
  if(e.key==='Escape') closeRecModal();
});

/* ── HOOK INTO LANG TOGGLE TO REBUILD MARQUEE ── */
document.addEventListener('DOMContentLoaded', () => {
  buildMarquee();
  // Patch toggleLang to also rebuild the marquee
  const origToggle = window.toggleLang;
  window.toggleLang = function() {
    if(origToggle) origToggle();
    setTimeout(buildMarquee, 50);
  };
});

// ─── LANGUAGE SYSTEM ──────────────────────────────────────────────
let currentLang = document.documentElement.lang === 'ar' ? 'ar' : 'en';

function applyLang(lang, save) {
  currentLang = lang;
  const isAr = lang === 'ar';

  // Body class & document direction
  document.body.classList.toggle('ar', isAr);
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  // Translate all .t elements
  document.querySelectorAll('.t[data-ar]').forEach(el => {
    el.innerHTML = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
  });

  // Translate placeholders
  document.querySelectorAll('.t-ph[data-ph-ar]').forEach(el => {
    el.placeholder = isAr ? el.getAttribute('data-ph-ar') : el.getAttribute('data-ph-en');
  });

  // Translate select options
  document.querySelectorAll('select option.t[data-ar]').forEach(opt => {
    opt.textContent = isAr ? opt.getAttribute('data-ar') : opt.getAttribute('data-en');
  });

  // Update toggle button
  const flag = document.querySelector('.lang-flag');
  const label = document.getElementById('langLabel');
  if (label) label.textContent = isAr ? 'English' : 'العربية';


  // Re-render pagination labels if projects are paginated
  if (typeof renderProjects === 'function') renderProjects();
}

function toggleLang() {
  location.href = document.getElementById('langBtn').getAttribute('href');
}

// ─── PROJECT FILTER + PAGINATION ─────────────────────────────────
const PAGE_SIZE = 9;
let currentCat = 'all';
let currentPage = 1;

function filterProj(btn, cat) {
  document.querySelectorAll('#fb .fbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = cat;
  currentPage = 1;
  renderProjects();
}

function renderProjects() {
  const allCards = Array.from(document.querySelectorAll('#pg .proj-card'));
  const filtered = allCards.filter(c => currentCat === 'all' || c.dataset.cat === currentCat);
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  // Show/hide cards
  allCards.forEach(c => c.style.display = 'none');
  filtered.slice(start, end).forEach(c => c.style.display = '');

  // Render pagination
  let pag = document.getElementById('proj-pagination');
  if (!pag) {
    pag = document.createElement('div');
    pag.id = 'proj-pagination';
    pag.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:8px;margin-top:28px;flex-wrap:wrap;';
    document.getElementById('pg').after(pag);
  }
  pag.innerHTML = '';

  if (totalPages <= 1) return;

  // Prev button
  const prev = document.createElement('button');
  prev.className = 'fbtn' + (currentPage === 1 ? '' : '');
  prev.style.cssText = 'min-width:36px;';
  prev.textContent = currentLang === 'ar' ? '→' : '←';
  prev.disabled = currentPage === 1;
  prev.style.opacity = currentPage === 1 ? '0.4' : '1';
  prev.onclick = () => { currentPage--; renderProjects(); };
  pag.appendChild(prev);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = 'fbtn' + (i === currentPage ? ' active' : '');
    btn.style.cssText = 'min-width:36px;';
    btn.textContent = i;
    btn.onclick = ((page) => () => { currentPage = page; renderProjects(); })(i);
    pag.appendChild(btn);
  }

  // Next button
  const next = document.createElement('button');
  next.className = 'fbtn';
  next.style.cssText = 'min-width:36px;';
  next.textContent = currentLang === 'ar' ? '←' : '→';
  next.disabled = currentPage === totalPages;
  next.style.opacity = currentPage === totalPages ? '0.4' : '1';
  next.onclick = () => { currentPage++; renderProjects(); };
  pag.appendChild(next);

  // Count label
  const lbl = document.createElement('span');
  lbl.style.cssText = 'font-size:11px;color:var(--gray-400);margin-right:4px;margin-left:4px;';
  const showing = Math.min(end, filtered.length);
  lbl.textContent = currentLang === 'ar'
    ? `عرض ${start+1}–${showing} من ${filtered.length}`
    : `${start+1}–${showing} of ${filtered.length}`;
  pag.appendChild(lbl);
}

// ─── CONTACT FORM ─────────────────────────────────────────────────
function submitForm() {
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();
  if (!name || !email || !msg) {
    alert(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields');
    return;
  }
  const mailto = `mailto:abuemira91@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + email)}`;
  window.open(mailto);
  document.getElementById('formSuccess').style.display = 'block';
  setTimeout(() => { document.getElementById('formSuccess').style.display = 'none'; }, 5000);
}

// ─── SCROLL ACTIVE NAV ────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 90) current = s.id; });
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.classList.toggle('active-link', a.getAttribute('href') === '#' + current);
  });
});

// ─── INIT ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang, false);
  renderProjects();
});
