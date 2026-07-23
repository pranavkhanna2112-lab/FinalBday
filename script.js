
const app=document.getElementById("app");
loading();
function loading(){
app.innerHTML=`<div class="screen">
<div class="logo">NOT AT ALL CREEPY</div>
<div class="subtitle" id="txt">Loading memories...</div>
<div class="loader"><div id="bar" class="progress"></div></div>
<div id="percent">0%</div></div>`;
let v=0,p=false;
let bar=barEl(),txt=id("txt"),pct=id("percent");
const t=setInterval(()=>{
 if(p)return;
 v++;bar.style.width=v+"%";pct.textContent=v+"%";
 if(v==20)txt.innerHTML="Finding Concert Memories...";
 if(v==45)txt.innerHTML="Looking for Yoshu...";
 if(v==69){txt.innerHTML="😏 Nice...<br>Loading Vietnam memories 🇻🇳";p=true;setTimeout(()=>p=false,1500);}
 if(v>=100){clearInterval(t);setTimeout(lockScreen,500);}
},40);
}
function barEl(){return id("bar")}
function id(x){return document.getElementById(x)}
function lockScreen(){
const d=new Date();
app.innerHTML=`<div class="screen">
<div class="logo" style="font-size:62px">${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}</div>
<div class="subtitle">Friday • 24 July</div>
<div class="notification" id="n">
<div style="display:flex;justify-content:space-between;color:#bbb;font-size:13px"><span>❤️ Messages</span><span>Now</span></div>
<div style="margin-top:8px;font-weight:600">Pranav</div>
<div style="margin-top:5px;color:#ddd">Happy Birthday Yoshu ❤️</div>
</div></div>`;
setTimeout(()=>id("n").classList.add("show"),500);
id("n").onclick=chat;
}
function chat(){
app.innerHTML=`<div class="screen"><div id="chat" class="chat"></div><button id="c" class="btn hidden">Continue ❤️</button></div>`;
const msgs=[
"Happy Birthday Yoshu ❤️",
"I wanted this to feel a little different.",
"So instead of sending you another boring text...I built this. 😊",
"And yes, This is what I've been working on at 2 AM for the past weeks.",
"I know you like everything to be just right...(Yes, you're a tiny bit of a control freak 😌)",
"But tomorrow, after HYROX, I have something special planned for you.",
"You already know about half the gifts...but I'm pretty sure this part will surprise you. ❤️",
"Ready?",
"Tap Continue to start the countdown. ❤️"
];
let i=0,c=id("chat");
function next(){
 if(i>=msgs.length){id("c").classList.remove("hidden");id("c").onclick=countdown;return;}
 const typ=document.createElement("div");
 typ.className="typing";
 typ.innerHTML='<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
 c.appendChild(typ);c.scrollTop=c.scrollHeight;
 setTimeout(()=>{
  typ.remove();
  const m=document.createElement("div");
  m.className="msg left";
  m.textContent=msgs[i++];
  c.appendChild(m);
  c.scrollTop=c.scrollHeight;
  next();
 },1200);
}
next();
}
function countdown(){
const target=new Date("2026-07-24T18:00:00");
app.innerHTML=`<div class="screen">
<div class="logo" style="font-size:54px">Dear Little Creepy Noni</div>
<div class="subtitle">The Surprise Begins In</div>
<div id="t" class="time"></div>
<div class="subtitle">Lemon Tree - Booked ✓<br>Party Planning - Done (Almost) ✓<br>Gifts - Ready  ✓<br><br>The only thing missing... You and you pretty litte ass ❤️</div>
<button id="b" class="btn hidden">I Love You!! Check your Whatsapp</button></div>`;
function tick(){
 let d=target-new Date();
 if(d<=0){id("t").textContent="00:00:00";id("b").classList.remove("hidden");id("b").onclick=finalCelebration;return;}
 let h=Math.floor(d/3600000);d%=3600000;
 let m=Math.floor(d/60000);d%=60000;
 let s=Math.floor(d/1000);
 id("t").textContent=[h,m,s].map(x=>String(x).padStart(2,"0")).join(":");
}
tick();setInterval(tick,1000);
}


// Added confetti celebration
function launchCelebration(){
 const c=document.createElement('canvas');
 c.style.position='fixed';c.style.inset='0';c.style.pointerEvents='none';c.width=innerWidth;c.height=innerHeight;
 document.body.appendChild(c);
 const ctx=c.getContext('2d');
 const parts=[...Array(220)].map(()=>({x:Math.random()*c.width,y:-Math.random()*c.height,r:2+Math.random()*5,vx:(Math.random()-.5)*4,vy:2+Math.random()*5}));
 let t=0;
 (function anim(){
   ctx.clearRect(0,0,c.width,c.height);
   parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=0.03;ctx.fillStyle=`hsl(${Math.random()*360},90%,60%)`;ctx.fillRect(p.x,p.y,p.r,p.r);});
   t++;
   if(t<300) requestAnimationFrame(anim); else c.remove();
 })();
 for(let i=0;i<18;i++){
   setTimeout(()=>{
    const d=document.createElement('div');
    d.textContent='🎆';
    d.style.position='fixed';
    d.style.left=(10+Math.random()*80)+'vw';
    d.style.top=(10+Math.random()*40)+'vh';
    d.style.fontSize='48px';
    d.style.pointerEvents='none';
    document.body.appendChild(d);
    setTimeout(()=>d.remove(),1800);
   },i*150);
 }
}
document.addEventListener('click',e=>{
 if(e.target && /yes/i.test(e.target.textContent||'')){setTimeout(launchCelebration,200);}
});

function finalCelebration(){
app.innerHTML=`<div class="screen"><div class="logo">I Love You ❤️</div><div class="subtitle">Check your Whatsapp</div></div>`;
const c=document.createElement('canvas');c.width=innerWidth;c.height=innerHeight;c.style.cssText='position:fixed;inset:0;pointer-events:none';document.body.appendChild(c);const x=c.getContext('2d');let a=Array.from({length:300},()=>({x:Math.random()*c.width,y:-Math.random()*c.height,vx:(Math.random()-.5)*6,vy:2+Math.random()*5,s:2+Math.random()*5,h:Math.random()*360}));let f=0;(function A(){x.clearRect(0,0,c.width,c.height);a.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=0.02;x.fillStyle=`hsl(${p.h},90%,60%)`;x.fillRect(p.x,p.y,p.s,p.s);});if(f++<360)requestAnimationFrame(A);})();
for(let i=0;i<30;i++)setTimeout(()=>{let e=document.createElement('div');e.textContent='🎇';e.style.cssText=`position:fixed;left:${10+Math.random()*80}vw;top:${5+Math.random()*35}vh;font-size:60px`;document.body.appendChild(e);setTimeout(()=>e.remove(),1500);},i*120);
}
