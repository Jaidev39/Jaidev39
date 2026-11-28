
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
  {title:'Cognivance Inc. · International Internship Program', subtitle:'200 hours · AI, Machine Learning, DeepTech & Business Innovation', description:'Completed the selective international programme. Selected for a 15-student cohort from an initial pool of 350 participants.', image:null, document:'assets/evidence/Cognivance_International_Internship_Completion_Certificate.pdf', linkLabel:'OPEN INTERNSHIP CERTIFICATE ↗', prominent:true},
  {title:'YIP / IIT Kharagpur', subtitle:'Official Certificate of Appreciation · 2023', description:'IIT Kharagpur certificate recognising active participation and contribution to the Young Innovators Program 2023.', image:null, document:'assets/evidence/YIP_IIT_Kharagpur_Official_Certificate.pdf', linkLabel:'OPEN OFFICIAL YIP CERTIFICATE ↗'},
  {title:'Rural Pulsars · IIT Kharagpur', subtitle:'Project appreciation artifact', description:'Supporting appreciation page for the Rural Pulsars team and smart-village project. The team’s fourth-place result is described separately in the project entry.', image:'assets/evidence/certificate-04.jpg', document:'assets/evidence/certificate-04.jpg', linkLabel:'VIEW IIT APPRECIATION ↗'},
  {title:'GQMC', subtitle:'Silver Honour', description:'International final-round recognition with a Silver Honour, placing among the top 1% of participants.', image:'assets/evidence/gqmc-2026-silver-honour.jpg', document:'assets/evidence/gqmc-2026-silver-honour.jpg'},
  {title:'NUS AI Internship', subtitle:'AI / Data Analytics · Faculty recommendation', description:'Worked with the IBM Telco Customer Churn dataset and compared seven models. The tuned XGBoost model reached 0.846 ROC-AUC; K-means identified a 1,525-customer high-risk segment.', image:null, document:'assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf', linkLabel:'OPEN FACULTY RECOMMENDATION ↗', caseStudy:'nus-churn'},
  {title:'Plaksha YDS', subtitle:'Programme completion', description:'Completed the Young Data Scientists programme in data science and quantitative analysis.', image:'assets/evidence/plaksha-yds-certificate.jpg', document:'assets/evidence/plaksha-yds-certificate.jpg'},
  {title:'PAN IIT Summit', subtitle:'Original Library certificate scan', description:'Clean full-page scan of the original Certificate of Appreciation for contributions to the Quantum, AI & Semiconductor summit.', image:'assets/evidence/pan-iit-summit-2026-original.jpg', document:'assets/evidence/pan-iit-summit-2026-original.jpg', linkLabel:'VIEW ORIGINAL CERTIFICATE ↗'},
  {title:'SignSethu', subtitle:'Publicly released on Google Play', description:'Indian Sign Language-to-Telugu accessibility app built with MediaPipe and TensorFlow Lite, trained on 500 self-collected samples and deployed on Google Play.', image:null, document:'https://play.google.com/store/apps/developer?id=AVIRINENI+JAIDEV+CHOWDARY', linkLabel:'OPEN GOOGLE PLAY ↗'}
];

const researchItems = [
  {
    title:'Automated Adversarial Stress Testing Using Generative Adversarial Networks for Dynamic Risk Scenario Synthesis',
    caseStudy:'gan-stress',
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
    caseStudy:'rl-execution',
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
  {title:'Cognivance Inc. · International Internship Program', description:'Certificate of Internship Completion · AI, Machine Learning, DeepTech & Business Innovation · 200 hours · 25 April–30 May 2026 · 15 selected from an initial pool of 350 participants.', category:'program', image:null, document:'assets/evidence/Cognivance_International_Internship_Completion_Certificate.pdf', linkLabel:'OPEN INTERNSHIP CERTIFICATE ↗'},
  {title:'Young Innovators Program 2023 · IIT Kharagpur | Official Certificate', description:'Certificate of Appreciation for active participation and contribution to YIP 2023.', category:'program', image:null, document:'assets/evidence/YIP_IIT_Kharagpur_Official_Certificate.pdf', linkLabel:'OPEN OFFICIAL YIP CERTIFICATE ↗'},
  {title:'Rural Pulsars · IIT Kharagpur | Appreciation Artifact', description:'Supporting appreciation page for the Rural Pulsars smart-village project.', category:'program', image:'assets/evidence/certificate-04.jpg', document:'assets/evidence/certificate-04.jpg', linkLabel:'VIEW IIT APPRECIATION ↗'},
  {title:'Certificate of Merit', description:'School academic recognition · 2024–25', category:'academic', image:'assets/evidence/certificate-01.jpg', document:'assets/evidence/certificate-01.jpg'},
  {title:'Academic Excellence · 485/500', description:'AISSE 2025 academic recognition', category:'academic', image:'assets/evidence/certificate-02.jpg', document:'assets/evidence/certificate-02.jpg'},
  {title:'VIVA MUN · Delegate', description:'Futuristic Crisis Committee · 2024', category:'mun', image:'assets/evidence/certificate-03.jpg', document:'assets/evidence/certificate-03.jpg'},
  {title:'WhiteHat Jr · Full Stack Developer', description:'Certified Full Stack Developer · 2021', category:'technical', image:'assets/evidence/certificate-05.jpg', document:'assets/evidence/certificate-05.jpg'},
  {title:'Polygence · AI in STEM', description:'Certificate of Completion · 2024', category:'program', image:'assets/evidence/certificate-06.jpg', document:'assets/evidence/certificate-06.jpg'},
  {title:'Radiance Annual Day · Certificate of Merit', description:'School recognition · 2023–24', category:'academic', image:'assets/evidence/certificate-07.jpg', document:'assets/evidence/certificate-07.jpg'},
  {title:'IIMUN · Futuristic Crisis Committee', description:'Certificate of Participation · 2024', category:'mun', image:'assets/evidence/certificate-08.jpg', document:'assets/evidence/certificate-08.jpg'},
  {title:'Plaksha Young Data Scientists', description:'Programme completion certificate · 2025', category:'program', image:'assets/evidence/plaksha-yds-certificate.jpg', document:'assets/evidence/plaksha-yds-certificate.jpg'},
  {title:'GQMC 2026 · Silver Honour', description:'Final-round recognition · Top 1%', category:'academic', image:'assets/evidence/gqmc-2026-silver-honour.jpg', document:'assets/evidence/gqmc-2026-silver-honour.jpg'},
  {title:'PAN IIT Summit 2026', description:'Original Library scan · Certificate of Appreciation · Quantum, AI & Semiconductor', category:'program', image:'assets/evidence/pan-iit-summit-2026-original.jpg', document:'assets/evidence/pan-iit-summit-2026-original.jpg', linkLabel:'VIEW ORIGINAL CERTIFICATE ↗'}
];

const mediaGroups = [
  {
    gridId: 'yip-media-grid',
    title: 'YIP / IIT Kharagpur',
    items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22].map(id => ({
      id, src:`assets/media/drive-photo-archive/drive-photo-${String(id).padStart(2,'0')}.jpg`
    }))
  },
  {
    gridId: 'heal-media-grid',
    title: 'HEAL Paradise',
    items: [23,24,25].map(id => ({id, src:`assets/media/drive-photo-archive/drive-photo-${String(id).padStart(2,'0')}.jpg`}))
  },
  {
    gridId: 'page-club-media-grid',
    title: 'The PAGE Club',
    items: [20,26,27,28,29,30].map(id => ({
      id, src:id===20?'assets/media/drive-photo-archive/drive-photo-20.png':`assets/media/drive-photo-archive/drive-photo-${String(id).padStart(2,'0')}.jpg`
    }))
  },
  {
    gridId: 'headboy-media-grid',
    title: 'Head Boy',
    items: [
      {id:32, src:'assets/media/video-stills/headboy-ceremony-02.jpg'},
      {id:33, src:'assets/media/video-stills/headboy-ceremony-03.jpg'},
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
    <article class="proof-card ${item.prominent ? 'proof-card-prominent' : ''}" data-tilt data-reveal>
      <span class="proof-tag">${item.title}</span>
      <h3>${item.subtitle}</h3>
      <p>${item.description}</p>
      ${renderPreviewImage(item)}
      <a href="${item.document}" target="_blank" rel="noopener">${item.linkLabel || 'VIEW EVIDENCE ↗'}</a>
      ${item.caseStudy ? `<button type="button" class="case-study-trigger" data-case-id="${item.caseStudy}">OPEN PROJECT CASE STUDY ↗</button>` : ''}
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
      <button type="button" class="case-study-trigger" data-case-id="${item.caseStudy}">OPEN INTERACTIVE CASE STUDY ↗</button>
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
    {title:'Cognivance Inc. · International Internship Program', image:null, doc:'assets/evidence/Cognivance_International_Internship_Completion_Certificate.pdf', label:'OPEN INTERNSHIP CERTIFICATE ↗', note:'200-hour international programme in AI, Machine Learning, DeepTech & Business Innovation. Selected for a 15-student cohort from an initial pool of 350 participants.', prominent:true},
    {title:'YIP / IIT Kharagpur · Official Certificate', image:null, doc:'assets/evidence/YIP_IIT_Kharagpur_Official_Certificate.pdf', label:'OPEN OFFICIAL YIP CERTIFICATE ↗', note:'Certificate of Appreciation for active participation and contribution to YIP 2023.'},
    {title:'Rural Pulsars · IIT Kharagpur Appreciation', image:'assets/evidence/certificate-04.jpg', doc:'assets/evidence/certificate-04.jpg', label:'VIEW IIT APPRECIATION ↗', note:'Separate appreciation artifact for the Rural Pulsars project; the team’s fourth-place result is described in the RuralConnect project feature.'},
    {title:'NUS AI Internship', image:null, doc:'assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf', label:'OPEN FACULTY RECOMMENDATION ↗', note:'Direct faculty recommendation evidence.'},
    {title:'GQMC Silver Honour', image:'assets/evidence/gqmc-2026-silver-honour.jpg', doc:'assets/evidence/gqmc-2026-silver-honour.jpg'},
    {title:'Plaksha YDS', image:'assets/evidence/plaksha-yds-certificate.jpg', doc:'assets/evidence/plaksha-yds-certificate.jpg'},
    {title:'PAN IIT Summit · Original Library Scan', image:'assets/evidence/pan-iit-summit-2026-original.jpg', doc:'assets/evidence/pan-iit-summit-2026-original.jpg', label:'VIEW ORIGINAL CERTIFICATE ↗', note:'Clean full-page scan checked against the original held in your Library; the old redacted variants are no longer linked.'}
  ];
  el.innerHTML = featured.map(item => `
    <article class="evidence-feature ${item.prominent ? 'evidence-feature-prominent' : ''}" data-tilt data-reveal>
      ${item.image ? `<img src="${item.image}" alt="${item.title} evidence preview" loading="lazy">` : renderPreviewImage(item)}
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
      ${renderPreviewImage(item)}
      <div class="certificate-topline"><span>${item.category.toUpperCase()}</span><span>PROOF</span></div>
      <h4>${item.title}</h4>
      <div class="card-meta">${item.description}</div>
      <a href="${item.document}" target="_blank" rel="noopener">${item.linkLabel || 'OPEN PROOF ↗'}</a>
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


const caseStudyData = {
  'nus-churn': {
    eyebrow:'NUS AI INTERNSHIP · TELECOM CHURN',
    title:'When prediction quality is not the same as decision quality',
    intro:'A supervised-learning comparison using the IBM Telco Customer Churn dataset. The work examined model performance alongside the practical cost of missing customers likely to churn.',
    metrics:[
      {value:'7,043',label:'customer records'},
      {value:'26.5%',label:'baseline churn rate'},
      {value:'7',label:'models compared'},
      {value:'0.846',label:'tuned XGBoost ROC-AUC'}
    ],
    sections:[
      ['Problem framing','Estimate customer churn risk from service, billing, contract, and customer attributes.'],
      ['Model comparison','Compared seven approaches. The tuned XGBoost model improved ROC-AUC from 0.820 to 0.846. The MLP achieved the highest accuracy in the team comparison but had the weakest recall, illustrating why accuracy alone was insufficient.'],
      ['Segmentation insight','K-means highlighted a high-risk segment of 1,525 customers. This is a clustering result, not a count of customers flagged by the final XGBoost model.'],
      ['Takeaway','Evaluation should reflect the decision context: ranking quality, recall, and the cost of missed churn all matter.']
    ],
    tags:['Python','EDA','Outlier treatment','XGBoost','K-means','Model evaluation'],
    links:[['Faculty recommendation','assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf']]
  },
  'gan-stress': {
    eyebrow:'PUBLISHED RESEARCH · GENERATIVE AI',
    title:'Adversarial stress testing with generated financial scenarios',
    intro:'A framework exploring how generative models can synthesize challenging financial risk scenarios beyond those directly observed in historical data.',
    metrics:[
      {value:'0.79',label:'reported scenario-diversity score'},
      {value:'19.4%',label:'reported average portfolio loss in a generated stress scenario'}
    ],
    sections:[
      ['Research question','How can dynamic stress-testing frameworks generate diverse and severe scenarios for portfolio-risk analysis?'],
      ['Method','The paper combines GAN-based scenario generation, adversarial perturbation, and risk-propagation analysis using historical financial indicators.'],
      ['Reported findings','The paper reports a scenario-diversity score of 0.79 and an average portfolio loss of 19.4% for a generated stress scenario. These are reported experimental results, not evidence of a 19.4% improvement.'],
      ['Limitations','Generated scenarios and simulated portfolio responses do not by themselves establish how a live portfolio would behave.']
    ],
    tags:['GANs','Adversarial scenarios','Financial risk','Stress testing'],
    links:[['Journal article','https://ijcsmc.com/docs/papers/March2026/V15I3202609.pdf'],['Research paper','research/automated-adversarial-stress-testing.pdf']]
  },
  'rl-execution': {
    eyebrow:'PUBLISHED RESEARCH · REINFORCEMENT LEARNING',
    title:'Liquidity-weighted optimal trade execution',
    intro:'A simulated study of reinforcement learning for execution decisions that account for liquidity, order-book conditions, market impact, and slippage.',
    metrics:[
      {value:'4',label:'execution approaches in comparison'},
      {value:'3',label:'classic benchmarks: TWAP, VWAP, Almgren–Chriss'}
    ],
    sections:[
      ['Research question','Can a policy learn execution decisions that adapt to liquidity conditions rather than follow a fixed schedule?'],
      ['Method','The study frames a liquidity-weighted reward around order-book imbalance, market impact, slippage, and execution risk.'],
      ['Evaluation','The learned approach is compared with TWAP, VWAP, and Almgren–Chriss in simulated limit-order-book environments.'],
      ['Limitations','The study is simulation-based. It does not establish live-market profitability or execution superiority.']
    ],
    tags:['Reinforcement learning','Trade execution','Liquidity','TWAP','VWAP','Almgren–Chriss'],
    links:[['Journal article','https://www.propulsiontechjournal.com/index.php/journal/article/view/10595'],['Research paper','research/liquidity-weighted-optimal-trade-execution.pdf']]
  }
};

const projectData = {
  ruralconnect:{
    eyebrow:'YIP · IIT KHARAGPUR',
    title:'RuralConnect',
    intro:'A smart-village systems concept developed by a three-person team for the Young Innovators Program.',
    details:[['Role','Led the three-person team.'],['Recognition','Finished fourth nationally in YIP 2023.'],['System concept','Combined a village-services app with AI, sensors, Raspberry Pi, and Arduino.'],['Design intent','Connect digital services with practical village-level utility.']],
    tags:['AI','IoT','Raspberry Pi','Arduino','Sensors'],
    links:[['Official YIP certificate','assets/evidence/YIP_IIT_Kharagpur_Official_Certificate.pdf'],['IIT appreciation artifact','assets/evidence/certificate-04.jpg'],['YIP photo archive','#yip-media']]
  },
  signsethu:{
    eyebrow:'AI · COMPUTER VISION · ACCESSIBILITY',
    title:'SignSethu',
    intro:'An offline Indian Sign Language-to-Telugu accessibility app designed for on-device inference.',
    details:[['Technology','MediaPipe and TensorFlow Lite.'],['Training material','500 self-collected samples.'],['Deployment','Designed for offline, on-device inference.'],['Public release','Available through the Google Play developer account AVIRINENI JAIDEV CHOWDARY.']],
    tags:['MediaPipe','TensorFlow Lite','Computer Vision','Offline AI'],
    links:[['Google Play developer page','https://play.google.com/store/apps/developer?id=AVIRINENI+JAIDEV+CHOWDARY']]
  },
  'ai-object-finder':{
    eyebrow:'COMPUTER VISION · INTERACTIVE AI',
    title:'AI Object Finder',
    intro:'A real-time webcam detection project that identifies target objects and provides confidence and speech feedback.',
    details:[['Detection','Browser-based webcam object detection using COCO-SSD.'],['Interaction','Target-object matching and confidence labels.'],['Feedback','Speech feedback makes detections easier to notice.']],
    tags:['COCO-SSD','Computer Vision','Webcam','Speech feedback'],
    links:[['GitHub repository','https://github.com/Jaidev39/AI-OBJECT-FINDER']]
  },
  'ai-ping-pong':{
    eyebrow:'COMPUTER VISION · INTERACTIVE SYSTEMS',
    title:'AI Ping Pong',
    intro:'A gesture-controlled game that translates pose-estimation signals into a live paddle controller.',
    details:[['Input','Pose estimation tracks wrist movement.'],['Control','Movement is mapped to an interactive paddle.'],['Focus','Real-time computer vision and responsive gameplay.']],
    tags:['Pose estimation','MediaPipe','JavaScript','Interactive systems'],
    links:[['GitHub repository','https://github.com/Jaidev39/AI-PING-PONG']]
  },
  'page-club':{
    eyebrow:'COMMUNITY PRODUCT · WEB DEVELOPMENT',
    title:'PAGE Club Reflections Hub',
    intro:'A web application supporting a reading initiative through dedicated sections, routes, and gallery experiences.',
    details:[['Stack','React and TypeScript.'],['Purpose','Organises reading-program reflections and community experiences.'],['Product design','Dedicated sections, navigation routes, and gallery interfaces.']],
    tags:['React','TypeScript','Community','Web application'],
    links:[['GitHub repository','https://github.com/Jaidev39/page-club-reflections-hub-72']]
  },
  'real-time-detection':{
    eyebrow:'COMPUTER VISION · REAL-TIME SYSTEMS',
    title:'Real-Time Image Detection',
    intro:'A browser computer-vision prototype for continuous visual processing, detection labels, confidence scores, and live feedback.',
    details:[['Processing','Continuous visual processing in the browser.'],['Outputs','Detection labels and confidence scores.'],['Interaction','Live feedback as the camera feed changes.']],
    tags:['Computer Vision','Real-time','JavaScript'],
    links:[['GitHub repository','https://github.com/Jaidev39/Real-Time-Image-Detection']]
  }
};

function renderDialogContent(data, target, id) {
  if (!data || !target) return;
  target.innerHTML = `
    <span class="dialog-eyebrow">${data.eyebrow || ''}</span>
    <h2 id="${id}">${data.title}</h2>
    <p class="dialog-intro">${data.intro}</p>
    ${data.metrics ? `<div class="case-metrics">${data.metrics.map(m=>`<div class="case-metric"><strong>${m.value}</strong><span>${m.label}</span></div>`).join('')}</div>` : ''}
    ${data.sections ? `<div class="case-sections">${data.sections.map(([heading,body],i)=>`<article><span>0${i+1}</span><div><h3>${heading}</h3><p>${body}</p></div></article>`).join('')}</div>` : ''}
    ${data.details ? `<div class="case-sections">${data.details.map(([heading,body],i)=>`<article><span>0${i+1}</span><div><h3>${heading}</h3><p>${body}</p></div></article>`).join('')}</div>` : ''}
    <div class="dialog-tags">${(data.tags||[]).map(tag=>`<span>${tag}</span>`).join('')}</div>
    <div class="dialog-links">${(data.links||[]).map(([label,url])=>`<a href="${url}" ${/^https?:/.test(url)||url.endsWith('.pdf')||url.endsWith('.jpg')?'target="_blank" rel="noopener"':''}>${label} ↗</a>`).join('')}</div>
  `;
}

function openInteractiveDialog(dialog) {
  if (!dialog) return;
  dialog.classList.add('is-open');
  dialog.setAttribute('aria-hidden','false');
  document.body.classList.add('dialog-open');
  const closeButton=dialog.querySelector('.dialog-close');
  if (closeButton) closeButton.focus();
}
function closeInteractiveDialog(dialog) {
  if (!dialog) return;
  dialog.classList.remove('is-open');
  dialog.setAttribute('aria-hidden','true');
  if (!document.querySelector('.interactive-dialog.is-open,.command-palette.is-open')) {
    document.body.classList.remove('dialog-open');
  }
}
function initCaseStudiesAndProjects() {
  const caseDialog=document.getElementById('case-study-dialog');
  const caseContent=document.getElementById('case-study-content');
  const projectDialog=document.getElementById('project-dialog');
  const projectContent=document.getElementById('project-dialog-content');
  document.addEventListener('click',event=>{
    const caseTrigger=event.target.closest('[data-case-id]');
    const projectTrigger=event.target.closest('[data-project]');
    const closer=event.target.closest('[data-dialog-close]');
    if (caseTrigger) {
      const item=caseStudyData[caseTrigger.dataset.caseId];
      renderDialogContent(item,caseContent,'case-study-title');
      openInteractiveDialog(caseDialog);
    } else if (projectTrigger) {
      const item=projectData[projectTrigger.dataset.project];
      renderDialogContent(item,projectContent,'project-dialog-title');
      openInteractiveDialog(projectDialog);
    } else if (closer) {
      closeInteractiveDialog(closer.closest('.interactive-dialog'));
    }
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape') {
      closeInteractiveDialog(caseDialog);
      closeInteractiveDialog(projectDialog);
    }
  });
}

const commandItems = [
  {title:'Research papers',detail:'GAN stress testing and reinforcement-learning execution',href:'#research',icon:'⌘',keywords:'research publication paper gan rl finance'},
  {title:'NUS AI internship case study',detail:'Telecom churn · seven models · XGBoost',action:'nus-churn',icon:'◈',keywords:'nus internship churn xgboost machine learning'},
  {title:'GAN stress-testing case study',detail:'Generative scenarios · portfolio risk',action:'gan-stress',icon:'◉',keywords:'gan adversarial stress financial risk'},
  {title:'Reinforcement-learning case study',detail:'Liquidity-weighted trade execution',action:'rl-execution',icon:'⌁',keywords:'reinforcement learning twap vwap almgren chriss'},
  {title:'Technical projects',detail:'SignSethu, RuralConnect and computer vision builds',href:'#work',icon:'⌘',keywords:'projects software signsethu ruralconnect computer vision'},
  {title:'Achievements and evidence',detail:'Certificates, awards and programme recognition',href:'#evidence',icon:'✳',keywords:'awards achievements certificate proof'},
  {title:'The journey',detail:'Selected milestones across the portfolio',href:'#journey',icon:'↗',keywords:'timeline milestones journey'},
  {title:'Community impact',detail:'HEAL Paradise and PAGE Club',href:'#impact',icon:'✦',keywords:'heal page club teaching volunteering'},
  {title:'GitHub repositories',detail:'Code, prototypes and engineering work',href:'#github',icon:'⌘',keywords:'github repositories code'},
  {title:'Media archive',detail:'Photographs grouped by activity',href:'#media',icon:'▧',keywords:'photos media archive yip heal page club head boy'},
  {title:'Visual Lab',detail:'Compare creative interface directions',href:'visual-lab.html',icon:'◌',keywords:'visual lab design animations styles'}
];
let commandSelection=0;
function renderCommandResults(query='') {
  const results=document.getElementById('command-results');
  if(!results)return;
  const q=query.trim().toLowerCase();
  const matches=commandItems.filter(item=>`${item.title} ${item.detail} ${item.keywords}`.toLowerCase().includes(q));
  commandSelection=0;
  results.innerHTML=matches.length?matches.map((item,index)=>`
    <button type="button" class="command-result${index===0?' is-selected':''}" role="option" aria-selected="${index===0}" data-command-index="${index}" data-command-action="${item.action||''}" data-command-href="${item.href||''}">
      <span class="command-result-icon">${item.icon}</span><span class="command-result-copy"><strong>${item.title}</strong><small>${item.detail}</small></span><kbd>↵</kbd>
    </button>
  `).join(''):`<p class="command-empty">No matching destination. Try “research”, “project” or “evidence”.</p>`;
  results._matches=matches;
}
function closeCommandPalette() {
  const palette=document.getElementById('command-palette');
  if(!palette)return;
  palette.classList.remove('is-open');
  palette.setAttribute('aria-hidden','true');
  if(!document.querySelector('.interactive-dialog.is-open'))document.body.classList.remove('dialog-open');
}
function openCommandPalette() {
  const palette=document.getElementById('command-palette');
  const input=document.getElementById('command-input');
  if(!palette||!input)return;
  palette.classList.add('is-open');
  palette.setAttribute('aria-hidden','false');
  document.body.classList.add('dialog-open');
  renderCommandResults('');
  input.value='';
  input.focus();
}
function initCommandPalette() {
  const input=document.getElementById('command-input');
  const results=document.getElementById('command-results');
  const palette=document.getElementById('command-palette');
  if(!input||!results||!palette)return;
  document.querySelectorAll('[data-open-command]').forEach(button=>button.addEventListener('click',openCommandPalette));
  document.addEventListener('keydown',event=>{
    if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k') {
      event.preventDefault();openCommandPalette();return;
    }
    if(event.key==='Escape')closeCommandPalette();
    if(!palette.classList.contains('is-open'))return;
    const matches=results._matches||[];
    if(event.key==='ArrowDown'||event.key==='ArrowUp') {
      event.preventDefault();
      if(matches.length===0)return;
      commandSelection=(commandSelection+(event.key==='ArrowDown'?1:-1)+matches.length)%matches.length;
      updateCommandSelection();
    }
    if(event.key==='Enter') {
      event.preventDefault();
      const selected=matches[commandSelection];
      if(selected)activateCommand(selected);
    }
  });
  input.addEventListener('input',()=>renderCommandResults(input.value));
  results.addEventListener('click',event=>{
    const button=event.target.closest('[data-command-index]');
    if(!button)return;
    const item=(results._matches||[])[Number(button.dataset.commandIndex)];
    if(item)activateCommand(item);
  });
  palette.addEventListener('click',event=>{
    if(event.target.closest('[data-command-close]'))closeCommandPalette();
  });
}
function updateCommandSelection() {
  const buttons=[...document.querySelectorAll('.command-result')];
  buttons.forEach((button,index)=>{
    const active=index===commandSelection;
    button.classList.toggle('is-selected',active);
    button.setAttribute('aria-selected',String(active));
    if(active)button.scrollIntoView({block:'nearest'});
  });
}
function activateCommand(item) {
  closeCommandPalette();
  if(item.action) {
    const data=caseStudyData[item.action];
    renderDialogContent(data,document.getElementById('case-study-content'),'case-study-title');
    openInteractiveDialog(document.getElementById('case-study-dialog'));
  } else if(item.href) {
    if(item.href.startsWith('#')) {
      const target=document.querySelector(item.href);
      if(target)target.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
      history.replaceState(null,'',item.href);
    } else location.href=item.href;
  }
}

function initNeuralCanvas() {
  const canvas=document.getElementById('neural-canvas');
  if(!canvas)return;
  const context=canvas.getContext('2d');
  if(!context)return;
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse=window.matchMedia('(pointer: coarse)').matches;
  let width=0,height=0,particles=[],raf=0,visible=true;
  const pointer={x:-1000,y:-1000};
  const count=coarse?34:58;
  function resize() {
    const rect=canvas.getBoundingClientRect();
    const dpr=Math.min(window.devicePixelRatio||1,1.6);
    width=rect.width;height=rect.height;
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);
    context.setTransform(dpr,0,0,dpr,0,0);
    particles=Array.from({length:count},(_,i)=>({
      x:Math.random()*width,y:Math.random()*height,
      vx:(Math.random()-.5)*.24,vy:(Math.random()-.5)*.24,
      r:1.2+Math.random()*1.5,phase:Math.random()*Math.PI*2
    }));
    draw(0);
  }
  function draw(time) {
    context.clearRect(0,0,width,height);
    const maxDist=coarse?105:145;
    for(let i=0;i<particles.length;i++){
      const p=particles[i];
      if(!reduce&&visible){p.x+=p.vx;p.y+=p.vy;
        if(p.x<0||p.x>width)p.vx*=-1;
        if(p.y<0||p.y>height)p.vy*=-1;
      }
      if(!coarse){
        const dx=p.x-pointer.x,dy=p.y-pointer.y,dist=Math.hypot(dx,dy);
        if(dist<125&&dist>0&&!reduce){p.x+=dx/dist*.14;p.y+=dy/dist*.14;}
      }
      for(let k=i+1;k<particles.length;k++){
        const q=particles[k],dx=p.x-q.x,dy=p.y-q.y,dist=Math.hypot(dx,dy);
        if(dist<maxDist){
          context.strokeStyle=`rgba(126,224,207,${(1-dist/maxDist)*.15})`;
          context.lineWidth=.7;context.beginPath();context.moveTo(p.x,p.y);context.lineTo(q.x,q.y);context.stroke();
        }
      }
      const pulse=reduce?1:0.78+Math.sin(time*.001+p.phase)*.18;
      context.fillStyle=`rgba(157,238,224,${pulse*.7})`;
      context.beginPath();context.arc(p.x,p.y,p.r,0,Math.PI*2);context.fill();
    }
    if(!reduce&&visible)raf=requestAnimationFrame(draw);
  }
  canvas.addEventListener('pointermove',event=>{
    const r=canvas.getBoundingClientRect();pointer.x=event.clientX-r.left;pointer.y=event.clientY-r.top;
  },{passive:true});
  canvas.addEventListener('pointerleave',()=>{pointer.x=-1000;pointer.y=-1000;});
  window.addEventListener('resize',resize,{passive:true});
  if('IntersectionObserver'in window) {
    new IntersectionObserver(entries=>{
      visible=entries[0].isIntersecting;
      if(visible&&!reduce&&!raf)raf=requestAnimationFrame(draw);
      if(!visible&&raf){cancelAnimationFrame(raf);raf=0;}
    }).observe(canvas);
  }
  resize();
  if(!reduce)raf=requestAnimationFrame(draw);
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
      if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
  initNeuralCanvas();
  initCaseStudiesAndProjects();
  initCommandPalette();
}

init();
