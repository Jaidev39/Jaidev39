
const activityData = [
  {category:'Innovation', title:'RuralConnect — Young Innovators Program, IIT Kharagpur', timeline:'Grade 9 / 2023', achievement:'4th place · Consolation Prize', details:'Led a 3-person team in the IIT Kharagpur Young Innovators Program; built a smart-village system using AI, IoT, Raspberry Pi, Arduino, sensors, and a resident-facing web app.'},
  {category:'Community', title:'The PAGE Club', timeline:'Current', achievement:'Founder & Executive Director · 15 newspaper outlets', details:'Founded a reading and awareness NGO promoting reading culture and awareness of harmful social-media use; led campaigns and conferences and gained recognition from former Vice President Venkaiah Naidu.'},
  {category:'Accessibility', title:'Indian Sign Language to Telugu AI App', timeline:'Current', achievement:'500-sample prototype · Google Play', details:'Developing a computer-vision application that translates Indian Sign Language into Telugu speech and text for students with hearing disabilities, inspired by teaching at HEAL Paradise.'},
  {category:'Teaching', title:'HEAL Paradise Orphanage School', timeline:'Since April 2025', achievement:'40+ students · 3–4 hrs weekly', details:'Teach AI, data science, Python, mathematics, and physics to rural students with disabilities at a nonprofit school, adapting instruction to different learning needs.'},
  {category:'Academic Enrichment', title:'NUS AI Internship for Young Achievers', timeline:'Grade 12', achievement:'Certificate of Merit · Faculty recommendation', details:'Worked on a telecommunications customer-churn problem using EDA, outlier treatment, model comparison, and iterative refinement with faculty feedback.'},
  {category:'Computer Science', title:'AI Computer Vision Portfolio', timeline:'Grade 7–Present', achievement:'10 self-built JavaScript projects', details:'Developed AI Ping Pong, object detection, face lock, gesture-controlled music, camera filters, and other real-time computer-vision systems independently.'},
  {category:'Programming', title:'Python Development', timeline:'Grades 9–11', achievement:'100/100 in CBSE Artificial Intelligence', details:'Learned Python through school AI and Informatics Practices coursework plus self-study, using it as a foundation for AI, data science, and machine learning work.'},
  {category:'Programming', title:'HTML, CSS & JavaScript Development', timeline:'Grade 7–Present', achievement:'Full-Stack Developer · Certified App Developer', details:'Self-learned web development and used it for numerous independent projects, including RuralConnect, AI computer-vision apps, and local-business websites.'},
  {category:'Programming', title:'SQL', timeline:'Grade 11', achievement:'CBSE Informatics Practices', details:'Learned SQL through Informatics Practices, developing database-querying and data-management skills.'},
  {category:'Programming', title:'R & Statistical Computing', timeline:'Since June 2025', achievement:'4 major analysis projects', details:'Self-learned R after the Plaksha Young Data Scientists program and applied it to healthcare, finance, markets, media, statistics, and visualization.'},
  {category:'Data Science', title:'Breast Cancer Data Analysis', timeline:'Independent', achievement:'R statistical analysis', details:'Analyzed a Kaggle breast-cancer dataset using statistical methods, analytical models, and visualizations.'},
  {category:'Data Science', title:'Spotify Songs Attributes Analysis', timeline:'Independent', achievement:'R exploratory analysis', details:'Analyzed relationships among Spotify song attributes with exploratory data analysis and visualizations.'},
  {category:'Data Science', title:'Stock Market Prediction', timeline:'Independent', achievement:'Regression modeling', details:'Built regression models in R to investigate relationships among market variables and evaluate quantitative prediction patterns and limitations.'},
  {category:'Research', title:'Exchange Rate Analysis', timeline:'Independent', achievement:'Local research competition prize', details:'Analyzed exchange-rate trends using R, quantitative models, and visualization; the project received local research-competition recognition.'},
  {category:'Research', title:'Hybrid Deep-Learning Stock Prediction Research', timeline:'Completed', achievement:'Completed historical research', details:'Completed historical research on hybrid deep-learning approaches to stock prediction.'},
  {category:'Research', title:'Fractional Distillation Research Paper', timeline:'Independent', achievement:'Research paper + prototype', details:'Researched fractional distillation as a low-cost coastal water-purification strategy that could also recover minerals with potential commercial value.'},
  {category:'Community', title:'Fractional Distillation Coastal Water Initiative', timeline:'Current', achievement:'Village demonstrations · Government acknowledgement', details:'Extended the fractional-distillation research into a community initiative, demonstrating a working prototype in villages and promoting affordable water purification and mineral recovery.'},
  {category:'Entrepreneurship', title:'Local Business Web Development Venture', timeline:'Current', achievement:'Founder & Full-Stack Web Developer', details:'Founded a side venture creating, deploying, maintaining, and supporting websites for local small businesses using HTML, CSS, and JavaScript.'},
  {category:'Leadership', title:'Head Boy', timeline:'Grade 12', achievement:'Schoolwide student leadership', details:'Elected Head Boy, represented the student body, coordinated initiatives, and served as a central link between students and school leadership.'},
  {category:'Leadership', title:'Student Government', timeline:'Grade 11', achievement:'STEM Secretary', details:'Served as STEM Secretary, representing STEM interests and helping coordinate school initiatives as part of a progression of student leadership.'},
  {category:'Leadership', title:'House Captain', timeline:'Grade 9', achievement:'Student leader', details:'Served as House Captain and helped organize inter-house activities, competitions, and student events.'},
  {category:'Leadership', title:'Data Science Club', timeline:'Current', achievement:'Founder & President', details:"Founded the school's Data Science Club and built a student community around statistics, R, machine learning, analysis, workshops, and peer learning."},
  {category:'Leadership', title:'STEM 101', timeline:'Current', achievement:'Founder & Lead STEM Mentor', details:'Founded an initiative exposing Grades 6–8 students to hands-on STEM, experimentation, engineering, curiosity, and problem solving.'},
  {category:'Leadership', title:'Debate & MUN Team', timeline:'2 years and running', achievement:'Head / Team Leader', details:'Led school Debate and Model United Nations preparation, training, and competition participation.'},
  {category:'MUN', title:'IIMUN & HMUN', timeline:'Current / relevant grade', achievement:'Head Delegate', details:'Selected by the school as Head Delegate for IIMUN and HMUN, leading delegation preparation and representation.'},
  {category:'Leadership', title:'School Newspaper', timeline:'Current', achievement:'Chief Editor', details:'Serve as Chief Editor, overseeing editorial content, reviewing submissions, and coordinating publication.'},
  {category:'Leadership', title:'Financial Newsletter', timeline:'Current', achievement:'Founder & Chief Editor · Biweekly', details:'Founded a financial newsletter published biweekly, curating submissions from local high-school and college students and economics professors.'},
  {category:'Community', title:'Dog Shelter Fundraising', timeline:'Community service', achievement:'Fundraising + hands-on volunteering', details:'Raised funding for nonprofit dog shelters and volunteered directly at two shelters.'},
  {category:'Science & Engineering', title:'Autonomous Robotic Cleaning Car', timeline:'Science fair', achievement:'1st place · State Science Fair finalist', details:'Built an autonomous cleaning robot using ultrasonic sensors, Arduino control, servo steering, and a rear vacuum mechanism.'},
  {category:'Science & Engineering', title:'RFID Arduino Card System', timeline:'Science fair', achievement:'1st place', details:'Designed and programmed an Arduino RFID card system for identification and access.'},
  {category:'Science & Engineering', title:'Electromagnetic Train', timeline:'Science fair', achievement:'1st place', details:'Built a working electromagnetic-train demonstration using copper coils and batteries.'},
  {category:'Science & Engineering', title:'State-Level Robotics Competition', timeline:'State level', achievement:'Top 6 finalist', details:'Built and programmed an AI-assisted maze-navigation robot integrating sensor input, decision-making, and movement.'},
  {category:'Sports', title:'Football', timeline:'School competitive', achievement:'Captain · Back-to-back local championships', details:'Captained the school football team to back-to-back local interschool tournament victories.'},
  {category:'Sports', title:'Badminton', timeline:'District / state', achievement:'District champion · Singles & Doubles', details:'Won district-level singles and doubles titles and progressed to state-level participation.'},
  {category:'Sports', title:'Taekwondo', timeline:'Competitive', achievement:'Black Belt · Inter-state', details:'Earned a Black Belt and progressed to inter-state competition, representing the district.'},
  {category:'Sports', title:'Basketball', timeline:'Regional', achievement:'South Zone Quarter-Finalist', details:'Competed at regional level and reached the South Zone quarter-finals.'},
  {category:'Sports', title:'Table Tennis', timeline:'District', achievement:'District winner', details:'Competed in organized district table-tennis competition and won a district prize.'},
  {category:'Sports', title:'Rifle Shooting', timeline:'State / district', achievement:'District winner', details:'Competed at state level and won at district level.'},
  {category:'Academic Enrichment', title:'Plaksha Young Data Scientists Program', timeline:'Grade 11 break', achievement:'1st prize', details:'Studied the intersection of data science, computer science, economics, finance, and statistics, sparking deeper quantitative work in R.'},
  {category:'Research', title:'Samshodhana 2026 Research Internship', timeline:'Grade 12', achievement:'Research internship', details:'Participated in a structured research internship program, expanding formal academic investigation experience.'},
  {category:'Research', title:'Polygence AI in STEM Research Program', timeline:'Grade 9', achievement:'AI research exposure', details:'Participated in a structured AI-in-STEM research program, gaining early exposure to independent inquiry.'},
  {category:'Academic Enrichment', title:'NUS AI Internship — Recognition Entry', timeline:'Grade 12', achievement:'Certificate of Merit', details:'Recognized for performance in the NUS AI Internship for Young Achievers, including applied data analysis and machine-learning work.'},
  {category:'Competition', title:'Young Innovators Program — Award Entry', timeline:'Grade 9 / 2023', achievement:'4th place · Consolation Prize', details:'The RuralConnect team progressed through the Young Innovators Program to the 6-team national finals and finished 4th.'},
  {category:'Competition', title:'SOF Olympiads', timeline:'Grades 9–10', achievement:'Regional distinctions · City Topper', details:'Earned regional distinctions and city-topper results in Mathematics, Science, and English Olympiads; records also include a regional bronze in Grade 10 Mathematics.'},
  {category:'Academic Competition', title:'Aryabhata National Mathematics Contest', timeline:'Grade 12', achievement:'National Top 20', details:'Reached the Top 20 nationally in Mathematics.'},
  {category:'Academic Recognition', title:'Global Quantum Mechanics Challenge', timeline:'Grade 12', achievement:'International Finalist · Silver Honour · Top 1%', details:'Completed four months of advanced quantum mechanics study including entanglement and interferometry and earned a Silver Honour.'},
  {category:'MUN', title:'Best Delegate — State-Level MUN', timeline:'State level', achievement:'Best Delegate', details:'Won Best Delegate at a state-level Model United Nations competition.'},
];

const activityArchive = document.getElementById('activity-archive');
const activitySearch = document.getElementById('activity-search');
const activityCategory = document.getElementById('activity-category');
const activityCount = document.getElementById('activity-count');
const categories = [...new Set(activityData.map(item => item.category))].sort();
categories.forEach(category => {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  activityCategory.appendChild(option);
});
function renderActivityArchive(){
  const query = activitySearch.value.trim().toLowerCase();
  const selectedCategory = activityCategory.value;
  const filtered = activityData.filter(item => {
    const haystack = `${item.category} ${item.title} ${item.timeline} ${item.achievement} ${item.details}`.toLowerCase();
    return (!query || haystack.includes(query)) && (!selectedCategory || item.category === selectedCategory);
  });
  activityArchive.innerHTML = '';
  activityCount.textContent = filtered.length;
  if(!filtered.length){
    activityArchive.innerHTML = '<div class="activity-empty">No matching profile entries. Try a broader search or reset the category.</div>';
    return;
  }
  filtered.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'activity-card';
    card.innerHTML = `<div class="activity-top"><span class="activity-index">${String(index + 1).padStart(2,'0')}</span><span class="activity-category">${item.category}</span></div><h3>${item.title}</h3><p>${item.details}</p><div class="activity-meta"><span>${item.timeline}</span><span>${item.achievement}</span></div>`;
    activityArchive.appendChild(card);
  });
}
renderActivityArchive();
activitySearch.addEventListener('input', renderActivityArchive);
activityCategory.addEventListener('change', renderActivityArchive);

const repos = [
  ['AI-mario-APP','AI / web build','https://github.com/Jaidev39/AI-mario-APP'],
  ['advanced-website','Web development','https://github.com/Jaidev39/advanced-website'],
  ['AI-PING-PONG','Computer vision / game','https://github.com/Jaidev39/AI-PING-PONG'],
  ['AI-MARIO-GAME','AI / game','https://github.com/Jaidev39/AI-MARIO-GAME'],
  ['AI-OBJECT-FINDER','Computer vision','https://github.com/Jaidev39/AI-OBJECT-FINDER'],
  ['AI-BABY-MONINTERING-APP','Computer vision / monitoring','https://github.com/Jaidev39/AI-BABY-MONINTERING-APP'],
  ['Real-Time-Image-Detection','Computer vision','https://github.com/Jaidev39/Real-Time-Image-Detection'],
  ['Real-Time-Object-Identification','Computer vision','https://github.com/Jaidev39/Real-Time-Object-Identification'],
  ['OBJECT-DETECTION-ON-IMAGES','Computer vision','https://github.com/Jaidev39/OBJECT-DETECTION-ON-IMAGES'],
  ['OBJECT-DETECTOR','Computer vision','https://github.com/Jaidev39/OBJECT-DETECTOR'],
  ['AI-DJ-','AI / creative app','https://github.com/Jaidev39/AI-DJ-'],
  ['AI-DJ-APP','AI / audio','https://github.com/Jaidev39/AI-DJ-APP'],
  ['AI-DJ-MUSIC-WEB-APP','AI / web app','https://github.com/Jaidev39/AI-DJ-MUSIC-WEB-APP'],
  ['FONT-MAINPULATOR','Creative coding','https://github.com/Jaidev39/FONT-MAINPULATOR'],
  ['REAL-TIME-DRAWING','Creative coding','https://github.com/Jaidev39/REAL-TIME-DRAWING'],
  ['FONT-MANIPULATER','Creative coding','https://github.com/Jaidev39/FONT-MANIPULATER'],
  ['CASE-STUDY','Analysis / case study','https://github.com/Jaidev39/CASE-STUDY'],
  ['real-time-image-identification-app','Real-time CV app','https://github.com/Jaidev39/real-time-image-identification-app'],
  ['REAL-TIME-IMAGE-IDENTIFIER','Computer vision','https://github.com/Jaidev39/REAL-TIME-IMAGE-IDENTIFIER'],
  ['FILTER-WEB-APP-JAIDEV','Web / camera filters','https://github.com/Jaidev39/FILTER-WEB-APP-JAIDEV'],
  ['Filter-web-app','Web / camera filters','https://github.com/Jaidev39/Filter-web-app'],
  ['filter-app','Web / camera filters','https://github.com/Jaidev39/filter-app']
];

const repoGrid = document.getElementById('repo-grid');
const search = document.getElementById('repo-search');
function renderRepos(filter=''){
  const q=filter.trim().toLowerCase();
  repoGrid.innerHTML='';
  repos.filter(([name,desc])=>`${name} ${desc}`.toLowerCase().includes(q)).forEach(([name,desc,url])=>{
    const card=document.createElement('article');
    card.className='repo-card';
    card.innerHTML=`<div><h3>${name}</h3><p>${desc}</p></div><a href="${url}" target="_blank" rel="noopener">Open on GitHub ↗</a>`;
    repoGrid.appendChild(card);
  });
}
renderRepos();
search.addEventListener('input',e=>renderRepos(e.target.value));

const modal=document.getElementById('image-modal');
const modalImage=document.getElementById('modal-image');
document.querySelectorAll('.evidence-tile').forEach(tile=>tile.addEventListener('click',()=>{modalImage.src=tile.dataset.full;modal.classList.add('open');}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});

const menuToggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('site-nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
