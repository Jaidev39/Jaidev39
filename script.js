
const repos = [
  ['AI-mario-APP','AI / web build','https://github.com/Jaidev39/AI-mario-APP'],
  ['page-club-reflections-hub-72','Community / web','https://github.com/Jaidev39/page-club-reflections-hub-72'],
  ['advanced-website','Web development','https://github.com/Jaidev39/advanced-website'],
  ['AI-PING-PONG','Computer vision / game','https://github.com/Jaidev39/AI-PING-PONG'],
  ['AI-MARIO-GAME','AI / game','https://github.com/Jaidev39/AI-MARIO-GAME'],
  ['AI-OBJECT-FINDER','Computer vision','https://github.com/Jaidev39/AI-OBJECT-FINDER'],
  ['AI-VIDEO-SURVILENCE','Computer vision','https://github.com/Jaidev39/AI-VIDEO-SURVILENCE'],
  ['AI-BABY-MONINTERING-APP','Computer vision / monitoring','https://github.com/Jaidev39/AI-BABY-MONINTERING-APP'],
  ['Real-Time-Image-Detection','Computer vision','https://github.com/Jaidev39/Real-Time-Image-Detection'],
  ['Real-Time-Object-Identification','Computer vision','https://github.com/Jaidev39/Real-Time-Object-Identification'],
  ['OBJECT-DETECTION-ON-IMAGES','Computer vision','https://github.com/Jaidev39/OBJECT-DETECTION-ON-IMAGES'],
  ['OBJECT-DETECTOR','Computer vision','https://github.com/Jaidev39/OBJECT-DETECTOR'],
  ['AI-DJ-','AI / creative app','https://github.com/Jaidev39/AI-DJ-'],
  ['AI-DJ-APP','AI / audio','https://github.com/Jaidev39/AI-DJ-APP'],
  ['AI-DJ-MUSIC-WEB-APP','AI / web app','https://github.com/Jaidev39/AI-DJ-MUSIC-WEB-APP'],
  ['FONT-MAINPULATOR','Creative coding','https://github.com/Jaidev39/FONT-MAINPULATOR'],
  ['realTimeDrawing','Creative coding','https://github.com/Jaidev39/realTimeDrawing'],
  ['REAL-TIME-DRAWING','Creative coding','https://github.com/Jaidev39/REAL-TIME-DRAWING'],
  ['FONT-MANIPULATER','Creative coding','https://github.com/Jaidev39/FONT-MANIPULATER'],
  ['CASE-STUDY','Analysis / case study','https://github.com/Jaidev39/CASE-STUDY'],
  ['real-time-image-identification-using-mobile-net','MobileNet / CV','https://github.com/Jaidev39/real-time-image-identification-using-mobile-net'],
  ['real-time-image-identification-app','Real-time CV app','https://github.com/Jaidev39/real-time-image-identification-app'],
  ['REAL-TIME-IMAGE-IDENTIFIER','Computer vision','https://github.com/Jaidev39/REAL-TIME-IMAGE-IDENTIFIER'],
  ['FILTER-WEB-APP-JAIDEV','Web / camera filters','https://github.com/Jaidev39/FILTER-WEB-APP-JAIDEV'],
  ['Filter-web-app','Web / camera filters','https://github.com/Jaidev39/Filter-web-app'],
  ['filter-app','Web / camera filters','https://github.com/Jaidev39/filter-app']
];

const proofItems = [
  {title:'GQMC', subtitle:'Silver Honour', description:'International final-round recognition with a Silver Honour, placing among the top 1% of participants.', image:'assets/evidence/gqmc-2026-silver-honour.jpg', document:'assets/evidence/gqmc-2026-silver-honour.jpg'},
  {title:'YIP / IIT Kharagpur', subtitle:'Final Round · 4th Place', description:'Reached the YIP 2023 final round and finished 4th. The displayed proof is the IIT Kharagpur appreciation artifact, not a separate 4th-place certificate.', image:'assets/evidence/certificate-04.jpg', document:'assets/evidence/certificate-04.jpg', linkLabel:'VIEW IIT APPRECIATION ↗'},
  {title:'NUS AI Internship', subtitle:'AI / Data Analytics · Faculty recommendation', description:'Built a churn-prediction pipeline across 7 models with a 26.5% baseline, 0.846 ROC-AUC, and 1,525 at-risk customers flagged, backed by direct NUS faculty recommendation.', image:null, document:'assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf', linkLabel:'OPEN FACULTY RECOMMENDATION ↗'},
  {title:'Plaksha YDS', subtitle:'1st Prize', description:'Young Data Scientists recognition for applied work in data science and quantitative analysis.', image:'assets/evidence/plaksha-yds-certificate.jpg', document:'assets/evidence/plaksha-yds-certificate.jpg'},
  {title:'Pan IIT Summit', subtitle:'Certificate of Appreciation', description:'Recognition in quantum, AI, and semiconductor conversations and public research-oriented engagement.', image:'assets/evidence/pan-iit-summit-2026-certificate.png', document:'assets/evidence/pan-iit-summit-2026-certificate.pdf'},
  {title:'SignSethu', subtitle:'Publicly deployed · 10+ downloads', description:'Indian Sign Language-to-Telugu accessibility app built with MediaPipe and TensorFlow Lite, trained on 500 self-collected samples and deployed on Google Play.', image:null, document:'https://play.google.com/store/apps/developer?id=AVIRINENI+JAIDEV+CHOWDARY', linkLabel:'OPEN GOOGLE PLAY ↗'}
];

const researchItems = [
  {
    title:'Automated Adversarial Stress Testing Using Generative Adversarial Networks for Dynamic Risk Scenario Synthesis',
    area:'Generative AI · Financial Risk',
    summary:'Builds a three-part framework for scenario generation, adversarial stress amplification, and risk propagation using historical financial indicators to synthesize severe, previously unobserved risk states.',
    methods:'GAN scenario generation · adversarial perturbation · systemic risk modeling',
    findings:'Reported results include 19.4% stress-loss blind spots and a 0.79 diversity score in the scenario-generation evaluation.',
    contribution:'Framed the architecture and experiments for dynamic adversarial stress synthesis.',
    document:'research/automated-adversarial-stress-testing.docx',
    preview:null,
    articleUrl:'https://ijcsmc.com/docs/papers/March2026/V15I3202609.pdf',
    journalUrl:'https://ijcsmc.com/index.php/volume-15-issue-3-march-2026/'
  },
  {
    title:'Reinforcement Learning for Liquidity-Weighted Optimal Trade Execution Strategies',
    area:'Reinforcement Learning · Trade Execution',
    summary:'Introduces a liquidity-weighted execution framework using order-book imbalance, market impact, slippage, and execution risk for policy learning in quantitative trading.',
    methods:'Policy learning · liquidity-aware reward · trade optimization',
    findings:'The study compares learned execution against TWAP, VWAP, and Almgren–Chriss benchmarks in simulated limit-order-book environments.',
    contribution:'Designed the trade-execution framing and quantitative experiment structure for the study.',
    document:'research/liquidity-weighted-optimal-trade-execution.pdf',
    preview:null,
    articleUrl:'https://www.propulsiontechjournal.com/index.php/journal/article/view/10595',
    journalUrl:'https://propulsiontechjournal.com/index.php/journal/issue/view/33'
  }
];

const recommendationItems = [
  {
    title:'NUS AI Internship',
    subtitle:'Faculty Recommendation',
    image:null,
    pdf:'assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf',
    docx:'assets/recommendations/NUS-Faculty-Recommendation-Editable.docx'
  },
  {
    title:'HEAL',
    subtitle:'Recommendation',
    image:null,
    pdf:'assets/recommendations/HEAL Letter.pdf',
    docx:'assets/recommendations/HEAL-Recommendation-Editable.docx'
  }
];

const certificateItems = [
  {title:'Certificate of Merit', description:'School academic recognition · 2024–25', category:'academic', image:'assets/evidence/certificate-01.jpg', document:'assets/evidence/certificate-01.jpg'},
  {title:'Academic Excellence · 485/500', description:'AISSE 2025 academic recognition', category:'academic', image:'assets/evidence/certificate-02.jpg', document:'assets/evidence/certificate-02.jpg'},
  {title:'VIVA MUN · Delegate', description:'Futuristic Crisis Committee · 2024', category:'mun', image:'assets/evidence/certificate-03.jpg', document:'assets/evidence/certificate-03.jpg'},
  {title:'WhiteHat Jr · Full Stack Developer', description:'Certified Full Stack Developer · 2021', category:'technical', image:'assets/evidence/certificate-05.jpg', document:'assets/evidence/certificate-05.jpg'},
  {title:'Polygence · AI in STEM', description:'Certificate of Completion · 2024', category:'program', image:'assets/evidence/certificate-06.jpg', document:'assets/evidence/certificate-06.jpg'},
  {title:'Radiance Annual Day · Certificate of Merit', description:'School recognition · 2023–24', category:'academic', image:'assets/evidence/certificate-07.jpg', document:'assets/evidence/certificate-07.jpg'},
  {title:'IIMUN · Futuristic Crisis Committee', description:'Certificate of Participation · 2024', category:'mun', image:'assets/evidence/certificate-08.jpg', document:'assets/evidence/certificate-08.jpg'},
  {title:'Plaksha Young Data Scientists', description:'Programme completion certificate · 2025', category:'program', image:'assets/evidence/plaksha-yds-certificate.jpg', document:'assets/evidence/plaksha-yds-certificate.jpg'},
  {title:'GQMC 2026 · Silver Honour', description:'Final-round recognition · Top 1%', category:'academic', image:'assets/evidence/gqmc-2026-silver-honour.jpg', document:'assets/evidence/gqmc-2026-silver-honour.jpg'},
  {title:'PAN IIT Summit 2026', description:'Certificate of Appreciation · Quantum, AI & Semiconductor', category:'program', image:'assets/evidence/pan-iit-summit-2026-certificate.png', document:'assets/evidence/pan-iit-summit-2026-certificate.pdf'}
];

const mediaGroups = [
  {
    gridId: 'yip-media-grid',
    title: 'YIP / IIT Kharagpur',
    items: Array.from({length:22}, (_,i) => {
      const id = i + 1;
      return {id, src:`assets/media/drive-photo-archive/drive-photo-${String(id).padStart(2,'0')}${id===20?'.png':'.jpg'}`};
    })
  },
  {
    gridId: 'heal-media-grid',
    title: 'HEAL Paradise',
    items: [23,24,25].map(id => ({id, src:`assets/media/drive-photo-archive/drive-photo-${String(id).padStart(2,'0')}.jpg`}))
  },
  {
    gridId: 'page-club-media-grid',
    title: 'The PAGE Club',
    items: [26,27,28,29,30].map(id => ({id, src:`assets/media/drive-photo-archive/drive-photo-${String(id).padStart(2,'0')}.jpg`}))
  },
  {
    gridId: 'headboy-media-grid',
    title: 'Head Boy',
    items: [
      {id:32, src:'assets/media/video-stills/headboy-ceremony-02.jpg'},
      {id:33, src:'assets/media/video-stills/headboy-ceremony-03.jpg'},
      {id:34, src:'assets/media/video-stills/headboy-ceremony-04.jpg'},
      {id:35, src:'assets/media/video-stills/headboy-ceremony-05.jpg'}
    ]
  }
];

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const prevButton = document.getElementById('prev-image');
const nextButton = document.getElementById('next-image');
let currentGallery = [];
let currentIndex = 0;

function openModal(imageSet, index = 0) {
  currentGallery = imageSet;
  currentIndex = index;
  modalImage.src = currentGallery[currentIndex];
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

function renderPreviewImage(item) {
  if (item && item.image && /\.(png|jpe?g|gif|webp|svg)$/i.test(item.image)) {
    return `<img src="${item.image}" alt="${item.title} preview" loading="lazy">`;
  }
  return `<div class="document-preview"><span>${item ? item.title : 'Document'}<br>Read document</span></div>`;
}

function renderProof() {
  const grid = document.getElementById('proof-grid');
  grid.innerHTML = proofItems.map(item => `
    <article class="proof-card" data-tilt data-reveal>
      <span class="proof-tag">${item.title}</span>
      <h3>${item.subtitle}</h3>
      <p>${item.description}</p>
      ${renderPreviewImage(item)}
      <a href="${item.document}" target="_blank" rel="noopener">${item.linkLabel || 'VIEW EVIDENCE ↗'}</a>
    </article>
  `).join('');
}

function renderResearch() {
  const grid = document.getElementById('research-grid');
  grid.innerHTML = researchItems.map(item => `
    <article class="research-card" data-tilt data-reveal>
      <div class="paper-index">${researchItems.indexOf(item)+1}</div>
      <span class="meta-tag">${item.area}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="detail-list">
        <div><strong>Methods:</strong> ${item.methods}</div>
        <div><strong>Verified findings:</strong> ${item.findings}</div>
        <div><strong>Contribution:</strong> ${item.contribution}</div>
      </div>
      ${item.preview ? `<img src="${item.preview}" alt="${item.title} preview" loading="lazy">` : `<div class="document-preview"><span>${item.title}<br>Research paper</span></div>`}
      <div class="paper-actions">
        <a href="${item.document}" target="_blank" rel="noopener">READ PAPER ↗</a>
        <a href="${item.articleUrl}" target="_blank" rel="noopener">JOURNAL ARTICLE ↗</a>
        <a href="${item.journalUrl}" target="_blank" rel="noopener">JOURNAL ISSUE ↗</a>
      </div>
    </article>
  `).join('');
}

function renderRecommendations() {
  const grid = document.getElementById('recommendation-grid');
  grid.innerHTML = recommendationItems.map(item => `
    <article class="recommendation-card" data-tilt data-reveal>
      <span class="recommendation-tag">${item.title}</span>
      <h3>${item.subtitle}</h3>
      ${item.image ? `<img src="${item.image}" alt="${item.title} recommendation preview" loading="lazy">` : `<div class="document-preview"><span>${item.title}<br>${item.subtitle}</span></div>`}
      <div class="recommendation-actions">
        <a href="${item.pdf}" target="_blank" rel="noopener">OPEN PDF ↗</a>
        <a href="${item.docx}" target="_blank" rel="noopener">OPEN DOCX ↗</a>
      </div>
    </article>
  `).join('');
}

function renderFeaturedEvidence() {
  const el = document.getElementById('featured-evidence');
  const featured = [
    {title:'GQMC Silver Honour', image:'assets/evidence/gqmc-2026-silver-honour.jpg', doc:'assets/evidence/gqmc-2026-silver-honour.jpg'},
    {title:'YIP / IIT Kharagpur', image:'assets/evidence/certificate-04.jpg', doc:'assets/evidence/certificate-04.jpg', label:'VIEW IIT APPRECIATION ↗', note:'Final-round result: 4th Place. Displayed proof is the IIT Kharagpur appreciation artifact, not a separate 4th-place certificate.'},
    {title:'NUS AI Internship', image:null, doc:'assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf', label:'OPEN FACULTY RECOMMENDATION ↗', note:'Direct faculty recommendation evidence.'},
    {title:'Plaksha YDS', image:'assets/evidence/plaksha-yds-certificate.jpg', doc:'assets/evidence/plaksha-yds-certificate.jpg'},
    {title:'Pan IIT Summit', image:'assets/evidence/pan-iit-summit-2026-certificate.png', doc:'assets/evidence/pan-iit-summit-2026-certificate.png'}
  ];
  el.innerHTML = featured.map(item => `
    <article class="evidence-feature" data-tilt data-reveal>
      ${item.image ? `<img src="${item.image}" alt="${item.title} evidence preview" loading="lazy">` : `<div class="document-preview"><span>${item.title}<br>Faculty recommendation</span></div>`}
      <div class="feature-copy">
        <span class="meta-tag">FEATURED EVIDENCE</span>
        <h3>${item.title}</h3>
        <p>${item.note || 'Direct proof for the claim and corresponding achievement.'}</p>
        <a href="${item.doc}" target="_blank" rel="noopener">${item.label || 'VIEW EVIDENCE ↗'}</a>
      </div>
    </article>
  `).join('');
}

function renderCertificates(filter = 'all') {
  const el = document.getElementById('certificate-grid');
  const items = filter === 'all' ? certificateItems : certificateItems.filter(item => item.category === filter);
  el.innerHTML = items.map(item => `
    <article class="certificate-card" data-tilt data-reveal>
      <img src="${item.image}" alt="${item.title} preview" loading="lazy">
      <div class="certificate-topline"><span>${item.category.toUpperCase()}</span><span>PROOF</span></div>
      <h4>${item.title}</h4>
      <div class="card-meta">${item.description}</div>
      <a href="${item.document}" target="_blank" rel="noopener">OPEN PROOF ↗</a>
    </article>
  `).join('');
}

function renderMediaGrid() {
  mediaGroups.forEach(group => {
    const el = document.getElementById(group.gridId);
    if (!el) return;
    el.innerHTML = group.items.map((item, index) => `
      <article class="media-card" data-tilt data-reveal>
        <img src="${item.src}" alt="${group.title} photograph ${String(item.id).padStart(2,'0')}" loading="lazy" data-index="${index}">
        <div class="media-caption"><span>${group.title.toUpperCase()} · ${String(item.id).padStart(2,'0')}</span><span>Open ↗</span></div>
      </article>
    `).join('');
    el.querySelectorAll('img').forEach(img => {
      img.addEventListener('click', () => {
        openModal(group.items.map(item => item.src), Number(img.dataset.index));
        modalImage.alt = `${group.title} photograph ${img.alt}`;
      });
    });
  });
}

function renderRepos(filter = '') {
  const grid = document.getElementById('repo-grid');
  const q = filter.trim().toLowerCase();
  grid.innerHTML = repos.filter(([name, desc]) => `${name} ${desc}`.toLowerCase().includes(q)).map(([name, desc, url]) => `
    <article class="repo-card" data-tilt data-reveal>
      <div>
        <h3>${name}</h3>
        <p>${desc}</p>
      </div>
      <a href="${url}" target="_blank" rel="noopener">Open on GitHub ↗</a>
    </article>
  `).join('');
}

function bindModal() {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
    if (event.key === 'ArrowLeft' && modal.classList.contains('open')) {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      modalImage.src = currentGallery[currentIndex];
    }
    if (event.key === 'ArrowRight' && modal.classList.contains('open')) {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      modalImage.src = currentGallery[currentIndex];
    }
  });
  prevButton.addEventListener('click', () => {
    if (currentGallery.length) {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      modalImage.src = currentGallery[currentIndex];
    }
  });
  nextButton.addEventListener('click', () => {
    if (currentGallery.length) {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      modalImage.src = currentGallery[currentIndex];
    }
  });
}

function bindMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  menuToggle.addEventListener('click', () => {
    const expanded = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(expanded));
  });
  nav.querySelectorAll('a').forEach((anchor) => anchor.addEventListener('click', () => nav.classList.remove('open')));
}

function bindEvidenceTiles() {
  document.querySelectorAll('.certificate-card img, .proof-card img, .recommendation-card img, .evidence-feature img').forEach((img) => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      openModal([src], 0);
    });
  });
}



function bindCertificateFilters() {
  const buttons = document.querySelectorAll('.filter-chip');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      renderCertificates(button.dataset.filter);
      bindEvidenceTiles();
      bindMotion();
    });
  });
}

function bindMotion() {
  const revealItems = document.querySelectorAll('[data-reveal]:not(.motion-bound)');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  revealItems.forEach((el, index) => {
    el.classList.add('motion-bound');
    el.style.setProperty('--reveal-delay', `${Math.min(index * 45, 320)}ms`);
    observer.observe(el);
  });

  document.querySelectorAll('[data-tilt]:not(.tilt-bound)').forEach(card => {
    card.classList.add('tilt-bound');
    card.addEventListener('pointermove', (event) => {
      if (window.matchMedia('(pointer: coarse)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      card.style.setProperty('--rx', `${(-y * 3).toFixed(2)}deg`);
      card.style.setProperty('--ry', `${(x * 3).toFixed(2)}deg`);
      card.style.setProperty('--mx', `${(x * 50 + 50).toFixed(0)}%`);
      card.style.setProperty('--my', `${(y * 50 + 50).toFixed(0)}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx','0deg');
      card.style.setProperty('--ry','0deg');
    });
  });

  if (!window.__jaidevMotionEventsBound) {
    window.__jaidevMotionEventsBound = true;

    const progress = document.querySelector('.scroll-progress span');
    const setProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    window.addEventListener('scroll', setProgress, {passive:true});
    setProgress();

    const sections = [...document.querySelectorAll('main section[id]')];
    const navLinks = [...document.querySelectorAll('.nav a')];
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
        }
      });
    }, {rootMargin:'-35% 0px -50% 0px', threshold:0});
    sections.forEach(section => navObserver.observe(section));

    const hero = document.querySelector('.hero');
    const heroVisual = document.querySelector('.hero-visual');
    if (hero && heroVisual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.addEventListener('scroll', () => {
        const y = Math.min(window.scrollY, 500);
        heroVisual.style.transform = `translate3d(0,${y * 0.06}px,0)`;
      }, {passive:true});
    }
  }
}


function bindDynamicPolish() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-magnetic]').forEach(el => {
    if (el.dataset.magneticBound) return;
    el.dataset.magneticBound = '1';
    el.addEventListener('pointermove', (event) => {
      if (prefersReduced || window.matchMedia('(pointer: coarse)').matches) return;
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      el.style.transform = `translate3d(${x * 5}px,${y * 4}px,0)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  const spotlight = document.querySelector('.cursor-spotlight');
  if (spotlight && !prefersReduced && window.matchMedia('(pointer:fine)').matches && !window.__spotlightBound) {
    window.__spotlightBound = true;
    window.addEventListener('pointermove', (event) => {
      spotlight.style.transform = `translate3d(${event.clientX - 180}px,${event.clientY - 180}px,0)`;
    }, {passive:true});
  }

  document.querySelectorAll('[data-count]').forEach(el => {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target) || prefersReduced) return;
    let start = null;
    const duration = 850;
    const tick = (time) => {
      if (start === null) start = time;
      const p = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${Math.round(target * eased)}+`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });

  document.querySelectorAll('.filter-chip').forEach(button => {
    if (button.dataset.transitionBound) return;
    button.dataset.transitionBound = '1';
    const original = button.onclick;
    button.addEventListener('click', () => {
      if (document.startViewTransition && !prefersReduced) {
        const grid = document.getElementById('certificate-grid');
        if (grid) {
          grid.style.viewTransitionName = 'certificate-grid';
          window.setTimeout(() => { grid.style.viewTransitionName = ''; }, 550);
        }
      }
    }, {capture:true});
  });
}

function init() {
  renderProof();
  renderResearch();
  renderRecommendations();
  renderFeaturedEvidence();
  renderCertificates();
  renderMediaGrid();
  renderRepos();
  bindModal();
  bindMenu();
  bindEvidenceTiles();
  document.getElementById('repo-search').addEventListener('input', (e) => renderRepos(e.target.value));
  bindCertificateFilters();
  bindMotion();
  bindDynamicPolish();
}

init();
