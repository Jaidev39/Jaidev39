const repos = [
  ['AI-mario-APP','AI / web build','https://github.com/Jaidev39/AI-mario-APP'],
  ['page-club-reflections-hub-72','Community / web','https://github.com/Jaidev39/page-club-reflections-hub-72'],
  ['advanced-website','Web development','https://github.com/Jaidev39/advanced-website'],
  ['AI-PING-PONG','Computer vision / game','https://github.com/Jaidev39/AI-PING-PONG'],
  ['AI-MARIO-GAME','AI / game','https://github.com/Jaidev39/AI-MARIO-GAME'],
  ['AI-OBJECT-FINDER','Computer vision','https://github.com/Jaidev39/AI-OBJECT-FINDER'],
  ['AI-VIDEO-SURVIENCE','Computer vision','https://github.com/Jaidev39/AI-VIDEO-SURVIENCE'],
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
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
