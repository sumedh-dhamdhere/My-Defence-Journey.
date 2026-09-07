
/* ===== My Defence Journey — interactive UI layer ===== */
(function(){
  const storageKey='mdj_theme';
  const root=document.documentElement;
  const getTheme=()=>localStorage.getItem(storageKey)||'light';
  function applyTheme(theme){
    document.body.classList.toggle('theme-dark',theme==='dark');
    const b=document.getElementById('themeToggle');
    if(b){b.innerHTML=theme==='dark'?'☀️ <span>Light</span>':'🌙 <span>Dark</span>';b.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');}
  }
  function initTheme(){
    let theme=getTheme();
    if(theme==='system') theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
    applyTheme(theme);
    const b=document.getElementById('themeToggle');
    if(b)b.addEventListener('click',()=>{theme=getTheme()==='dark'?'light':'dark';localStorage.setItem(storageKey,theme);applyTheme(theme);showToast(theme==='dark'?'Dark mode enabled':'Light mode enabled');});
  }
  function showToast(text){
    let t=document.getElementById('mdjToast');
    if(!t){t=document.createElement('div');t.id='mdjToast';t.className='toast';document.body.appendChild(t)}
    t.textContent=text;t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),1800);
  }
  function initOpening(){
    const loader=document.createElement('div');loader.className='page-loader';loader.innerHTML='<div class="loader-inner"><div class="loader-mark" aria-hidden="true"></div><strong>MY DEFENCE JOURNEY</strong></div>';
    document.body.prepend(loader);
    window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),180));
  }
  function initScroll(){
    const bar=document.createElement('div');bar.className='scroll-progress';document.body.prepend(bar);
    const top=document.createElement('button');top.className='floating-top';top.innerHTML='↑';top.title='Back to top';top.setAttribute('aria-label','Back to top');document.body.appendChild(top);
    const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max>0?(scrollY/max)*100:0)+'%';top.classList.toggle('show',scrollY>420)};
    addEventListener('scroll',update,{passive:true});update();top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
  }
  function initReveal(){
    const els=document.querySelectorAll('main > section, main .card, main .panel, main .feature-card, main .exam-card, main .contact-card');
    els.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=Math.min(i*45,300)+'ms'});
    if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('revealed'));return}
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target)}}),{threshold:.08});
    els.forEach(e=>io.observe(e));
  }
  function initActive(){
    const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{if(a.dataset.page.toLowerCase()===file){a.classList.add('active');a.setAttribute('aria-current','page')}})
  }
  function initKeyboard(){
    document.addEventListener('keydown',e=>{
      if(e.key==='/' && !/input|textarea|select/i.test(document.activeElement.tagName)){e.preventDefault();const x=document.querySelector('input[type="search"],#searchInput');if(x)x.focus()}
    });
  }
  window.MDJUI={showToast};
  document.addEventListener('DOMContentLoaded',()=>{initOpening();initTheme();initScroll();initReveal();initActive();initKeyboard()});
})();

const SITE = {
  exams: {
    'NDA': {
      title: 'NDA & NA — National Defence Academy and Naval Academy Examination',
      summary: 'UPSC officer-entry examination for the National Defence Academy and Naval Academy routes. The exact course, wing, age and other conditions are controlled by the current UPSC notification.',
      source: 'https://www.upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026',
      points: [
        'Conducted by UPSC for the NDA/NA officer-entry pathway.',
        'Army Wing: 12th-class pass/equivalent. Air Force and Naval Wings: 12th with Physics, Chemistry and Mathematics.',
        'NDA & NA (II), 2026: notification 20 May 2026 and examination 13 September 2026.',
        'Written examination is followed by the applicable SSB/selection process and medical/merit requirements.',
        'Final age, nationality, marital-status and other conditions must be checked in the current notification.'
      ]
    },
    'Navy SSR': {
      title: 'Agniveer SSR — Indian Navy',
      summary: 'Indian Navy Agniveer SSR is a sailor-entry route with published academic, age, physical and selection conditions that can vary by recruitment cycle.',
      source: 'https://www.joinindiannavy.gov.in/',
      points: [
        'The official SSR criteria include 10+2 with Mathematics and Physics and 50% aggregate, plus specified diploma/vocational alternatives.',
        'The Navy published 2026 batch information for Agniveer SSR 01/2026 and 02/2026; recruitment timelines were described as tentative.',
        'Stage I uses the Indian Navy Entrance Test (INET); eligible candidates are then shortlisted for Stage II recruitment activities.',
        'The INET paper described in the official notice uses English, Science, Mathematics and General Awareness at 10+2 level.',
        'Use the latest Join Indian Navy notice for exact age, physical, medical, application and batch-specific conditions.'
      ]
    },
    'AFCAT': {
      title: 'AFCAT — Air Force Common Admission Test',
      summary: 'Indian Air Force officer-entry examination for applicable Flying and Ground Duty branches. Branch-wise education and age rules differ.',
      source: 'https://careerairforce.gov.in/afcat',
      points: [
        'Flying Branch: 10+2 with Mathematics and Physics plus a qualifying graduation/engineering route as specified in the notification.',
        'AFCAT 02/2026 lists 20–24 years for Flying Branch and 20–26 years for Ground Duty as on 1 July 2027, with a published CPL-related relaxation for Flying.',
        'Ground Duty branches have separate technical and non-technical qualification rules.',
        'Selection for applicable AFCAT entries includes AFCAT, AFSB, medical examination and final merit under the relevant rules.',
        'The Indian Air Force publishes branch-specific requirements; use the current notification for final details.'
      ]
    },
    'CDS': {
      title: 'CDS — Combined Defence Services Examination',
      summary: 'UPSC graduate-entry examination for the Indian Military Academy, Indian Naval Academy, Air Force Academy and Officers Training Academy according to the applicable course.',
      source: 'https://www.upsc.gov.in/exams-related-info/exam-notification/archives',
      points: [
        'IMA and OTA: degree of a recognised university or equivalent.',
        'INA: engineering degree or the other qualification route specified in the current notification.',
        'Air Force Academy: degree with Physics and Mathematics at 10+2 level or Bachelor of Engineering, subject to the notification.',
        'CDS (II), 2026: notification 20 May 2026 and examination 13 September 2026.',
        'Candidates who are studying in the final year/semester may be eligible under the notification conditions.',
        'Written examination is followed by SSB, medical examination and final merit as applicable.'
      ]
    }
  }
};

function byId(id){return document.getElementById(id)}
function setText(id, value){const el=byId(id); if(el) el.textContent=value}

function initNav(){
  const toggle=byId('navToggle'), links=byId('navLinks');
  if(toggle && links){
    toggle.addEventListener('click',()=>{
      const open=links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      links.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    }));
  }
  const path=location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{
    if(a.dataset.page===path){a.classList.add('active');a.setAttribute('aria-current','page')}
  });
  const brand=document.querySelector('[data-brand]');
  if(brand){
    brand.addEventListener('click',(e)=>{
      const current=location.pathname.split('/').pop() || 'index.html';
      if(current==='index.html'){e.preventDefault();window.location.reload()}
    });
  }
}

function initClickEffect(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.addEventListener('click',(e)=>{
    const el=document.createElement('span');
    el.className='click-ripple';
    el.style.left=e.clientX+'px'; el.style.top=e.clientY+'px';
    document.body.appendChild(el);
    window.setTimeout(()=>el.remove(),560);
  });
}

function openExam(name){
  const data=SITE.exams[name], modal=byId('examModal');
  if(!data || !modal) return;
  setText('modalTitle', data.title); setText('modalSummary', data.summary);
  const points=byId('modalPoints');
  if(points){points.innerHTML=''; data.points.forEach(point=>{const div=document.createElement('div');div.textContent='• '+point;points.appendChild(div)})}
  const source=byId('modalSource'); if(source){source.href=data.source}
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeExam(){const modal=byId('examModal');if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
window.openExam=openExam; window.closeExam=closeExam;
function initModals(){const modal=byId('examModal');if(!modal)return;modal.addEventListener('click',e=>{if(e.target===modal)closeExam()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeExam()})}

function checkEligibility(){
  const education=byId('education')?.value||'', stream=byId('stream')?.value||'', box=byId('eligibilityResult');
  if(!box)return;
  let rec=[], note='';
  if(education==='12th'){
    if(stream==='science') rec=['NDA (relevant wing conditions)','Agniveer SSR'];
    else rec=['NDA Army Wing (subject to current conditions)'];
    note='Your 12th-level education can open several routes, but subjects, marks, age and the exact notification matter.';
  }else if(education==='graduate'){
    rec=['CDS','AFCAT (branch-specific conditions)'];
    note='Graduate-level routes commonly include CDS and AFCAT, with branch-specific education, age and other conditions.';
  }else{
    box.innerHTML='<strong>Select your education level first.</strong><p>Then choose the closest stream so the tool can suggest what to explore.</p>';box.classList.add('visible');return;
  }
  box.innerHTML=`<strong>Good starting point</strong><p>${note}</p><p><b>Explore:</b> ${rec.join(' • ')}</p><small>This is guidance only. Check the official notification before applying.</small>`;
  box.classList.add('visible');
}
window.checkEligibility=checkEligibility;

function loadTasks(){try{return JSON.parse(localStorage.getItem('mdj_tasks')||'[]')}catch{return[]}}
function saveTasks(items){localStorage.setItem('mdj_tasks',JSON.stringify(items))}
function refreshTaskCount(){setText('dashTaskCount', String(loadTasks().length))}
function renderTasks(){
  const list=byId('taskList'); if(!list)return;
  const items=loadTasks(); list.innerHTML='';
  if(!items.length){list.innerHTML='<li class="task-item"><span class="empty-state">No tasks yet. Add one small target.</span></li>';refreshTaskCount();return}
  items.forEach((task,index)=>{
    const li=document.createElement('li'); li.className='task-item'+(task.done?' done':'');
    const cb=document.createElement('input'); cb.type='checkbox'; cb.checked=task.done; cb.setAttribute('aria-label','Complete '+task.text);
    const label=document.createElement('label'); label.textContent=task.text;
    const remove=document.createElement('button'); remove.type='button'; remove.className='task-remove'; remove.textContent='Delete';
    cb.addEventListener('change',()=>{const arr=loadTasks();arr[index].done=cb.checked;saveTasks(arr);renderTasks()});
    remove.addEventListener('click',()=>{const arr=loadTasks();arr.splice(index,1);saveTasks(arr);renderTasks()});
    li.append(cb,label,remove); list.appendChild(li);
  });
  refreshTaskCount();
}
function addTask(){const input=byId('taskInput');if(!input)return;const text=input.value.trim();if(!text){input.focus();return}const items=loadTasks();items.push({text,done:false});saveTasks(items);input.value='';renderTasks()}
window.addTask=addTask;

let countdownTimer;
function initCountdown(){
  const target=byId('targetDate'); if(!target)return;
  if(!target.value){const d=new Date();d.setDate(d.getDate()+45);d.setHours(9,0,0,0);target.value=toLocalDateTime(d)}
  const tick=()=>{const date=new Date(target.value),now=new Date();let diff=date-now;if(Number.isNaN(date.getTime()))diff=0;if(diff<0)diff=0;let rem=diff;const day=Math.floor(rem/86400000);rem%=86400000;const hour=Math.floor(rem/3600000);rem%=3600000;const min=Math.floor(rem/60000);rem%=60000;const sec=Math.floor(rem/1000);setText('days',String(day).padStart(2,'0'));setText('hours',String(hour).padStart(2,'0'));setText('minutes',String(min).padStart(2,'0'));setText('seconds',String(sec).padStart(2,'0'))};
  target.addEventListener('change',tick); tick(); clearInterval(countdownTimer);countdownTimer=setInterval(tick,1000);
}
function toLocalDateTime(d){const z=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}T${z(d.getHours())}:${z(d.getMinutes())}`}

function initProgress(){
  const sliders=[...document.querySelectorAll('[data-progress]')];if(!sliders.length)return;
  let saved={};try{saved=JSON.parse(localStorage.getItem('mdj_progress')||'{}')}catch{}
  sliders.forEach(s=>{if(saved[s.dataset.progress]!=null)s.value=saved[s.dataset.progress];s.addEventListener('input',renderProgress)});
  renderProgress();
  function renderProgress(){let sum=0;const values={};sliders.forEach(s=>{const v=Number(s.value);sum+=v;values[s.dataset.progress]=v;setText(s.dataset.progress+'Value',v+'%')});const avg=Math.round(sum/sliders.length);setText('overallProgress',avg+'%');setText('dashProgress',avg+'%');localStorage.setItem('mdj_progress',JSON.stringify(values));const bar=byId('overallBar');if(bar)bar.style.width=avg+'%'}
}

function initContact(){
  const form=byId('contactForm');if(!form)return;const msg=byId('formMessage');
  form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const name=String(data.get('name')||'').trim(),email=String(data.get('email')||'').trim(),subject=String(data.get('subject')||'').trim(),body=String(data.get('message')||'').trim();if(!name||!email||!subject||!body){msg.className='form-message error';msg.textContent='Please complete all fields before saving.';return}let items=[];try{items=JSON.parse(localStorage.getItem('mdj_contact_demo')||'[]')}catch{}items.push({name,email,subject,body,createdAt:new Date().toISOString()});localStorage.setItem('mdj_contact_demo',JSON.stringify(items));msg.className='form-message success';msg.textContent='Feedback saved locally in this browser. Connect a backend or form service for real delivery.';form.reset()});
}


function initFocusTimer(){
  const timeEl=byId('focusTime'),start=byId('focusStart'),pause=byId('focusPause'),reset=byId('focusReset'),status=byId('focusStatus');
  if(!timeEl||!start||!pause||!reset)return;
  const KEY='mdj_focus_seconds';
  let seconds=1500, timer=null;
  try{const saved=Number(localStorage.getItem(KEY));if(saved>0&&saved<=1500)seconds=saved}catch{}
  const paint=()=>{const m=Math.floor(seconds/60),s=seconds%60;timeEl.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')};
  const stop=()=>{if(timer){clearInterval(timer);timer=null}};
  const finish=()=>{stop();seconds=1500;localStorage.removeItem(KEY);paint();if(status)status.textContent='Session complete — take a short break and continue.';if(window.MDJUI)MDJUI.showToast('Focus session complete 🎉')};
  start.addEventListener('click',()=>{if(timer)return;if(status)status.textContent='Focus session running…';timer=setInterval(()=>{seconds--;localStorage.setItem(KEY,String(seconds));paint();if(seconds<=0)finish()},1000)});
  pause.addEventListener('click',()=>{stop();localStorage.setItem(KEY,String(seconds));if(status)status.textContent='Paused — resume when ready.'});
  reset.addEventListener('click',()=>{stop();seconds=1500;localStorage.removeItem(KEY);paint();if(status)status.textContent='Ready when you are.'});
  paint();
}

function init(){initNav();initClickEffect();initModals();renderTasks();initCountdown();initProgress();initContact();initFocusTimer()}
document.addEventListener('DOMContentLoaded',init);
