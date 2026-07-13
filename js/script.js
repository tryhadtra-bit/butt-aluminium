/*=========================================
BUTT ALUMINIUM
PROFESSIONAL JAVASCRIPT
=========================================*/

/*=============================
NAVBAR HIDE / SHOW
=============================*/

let lastScroll = 0;

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

let currentScroll = window.pageYOffset;

if(currentScroll > lastScroll && currentScroll > 120){

header.classList.add("hide");

}else{

header.classList.remove("hide");

}

lastScroll = currentScroll;

});


/*=============================
STICKY HEADER
=============================*/

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


/*=============================
SMOOTH SCROLL
=============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=============================
SCROLL REVEAL
=============================*/

const reveals=document.querySelectorAll(".fade-up");

window.addEventListener("scroll",()=>{

reveals.forEach(reveal=>{

const windowHeight=window.innerHeight;

const revealTop=reveal.getBoundingClientRect().top;

if(revealTop < windowHeight-120){

reveal.classList.add("show");

}

});

});
/*=====================================
ACTIVE NAVIGATION
=====================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});


/*=====================================
COUNTER ANIMATION
=====================================*/

const counters=document.querySelectorAll(".stat-box h3");

const speed=150;

const startCounter=()=>{

counters.forEach(counter=>{

const target=+counter.innerText.replace("+","");

let count=0;

const update=()=>{

const increment=target/speed;

if(count<target){

count+=increment;

counter.innerText=Math.ceil(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

};

let counterStarted=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".about-stats");

if(!stats) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100 && !counterStarted){

counterStarted=true;

startCounter();

}

});


/*=====================================
BACK TO TOP BUTTON
=====================================*/

const backTop=document.createElement("div");

backTop.innerHTML='<i class="fas fa-arrow-up"></i>';

backTop.className="back-top";

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/*=====================================
LOADING SCREEN
=====================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});


/*=====================================
HERO FADE ANIMATION
=====================================*/

const hero=document.querySelector(".hero-content");

if(hero){

hero.style.opacity="0";

hero.style.transform="translateY(60px)";

window.addEventListener("load",()=>{

setTimeout(()=>{

hero.style.transition="1.2s";

hero.style.opacity="1";

hero.style.transform="translateY(0px)";

},300);

});

}


/*=====================================
IMAGE HOVER EFFECT
=====================================*/

const images=document.querySelectorAll(".project-card img");

images.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08)";

image.style.transition=".5s";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});


/*=====================================
SCROLL PROGRESS BAR
=====================================*/

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});


/*=====================================
BUTTON RIPPLE EFFECT
=====================================*/

const buttons=document.querySelectorAll(".btn-primary,.btn-secondary");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

let ripple=document.createElement("span");

ripple.className="ripple";

this.appendChild(ripple);

let x=e.clientX-this.offsetLeft;

let y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*=====================================
PARALLAX HERO
=====================================*/

window.addEventListener("scroll",()=>{

const video=document.querySelector(".hero video");

if(video){

let value=window.scrollY;

video.style.transform=`translateY(${value*0.25}px)`;

}

});
/*=====================================
GALLERY FILTER
=====================================*/

const filterButtons=document.querySelectorAll(".filter-btn");

const galleryItems=document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.getAttribute("data-filter");

galleryItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}else if(item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});


/*=====================================
SERVICE CARD ANIMATION
=====================================*/

const cards=document.querySelectorAll(".service-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/*=====================================
PROJECT CARD ANIMATION
=====================================*/

const projects=document.querySelectorAll(".project-card");

projects.forEach(project=>{

project.addEventListener("mouseenter",()=>{

project.style.boxShadow="0 25px 60px rgba(0,0,0,.25)";

});

project.addEventListener("mouseleave",()=>{

project.style.boxShadow="none";

});

});


/*=====================================
NAVBAR BACKGROUND
=====================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

header.style.background="#111";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background="transparent";

header.style.boxShadow="none";

}

});


/*=====================================
SCROLL TO SECTION
=====================================*/

document.querySelectorAll("[data-scroll]").forEach(button=>{

button.addEventListener("click",()=>{

const target=document.querySelector(button.dataset.scroll);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=====================================
PREVENT IMAGE DRAG
=====================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});


/*=====================================
RIGHT CLICK DISABLE (OPTIONAL)
=====================================*/

// Uncomment if needed

// document.addEventListener("contextmenu",(e)=>{
// e.preventDefault();
// });

/*=====================================
GALLERY FILTER
=====================================*/

const filterButtons=document.querySelectorAll(".filter-btn");

const galleryItems=document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.getAttribute("data-filter");

galleryItems.forEach(item=>{

if(filter==="all"){

item.style.display="block";

}else if(item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});


/*=====================================
SERVICE CARD ANIMATION
=====================================*/

const cards=document.querySelectorAll(".service-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/*=====================================
PROJECT CARD ANIMATION
=====================================*/

const projects=document.querySelectorAll(".project-card");

projects.forEach(project=>{

project.addEventListener("mouseenter",()=>{

project.style.boxShadow="0 25px 60px rgba(0,0,0,.25)";

});

project.addEventListener("mouseleave",()=>{

project.style.boxShadow="none";

});

});


/*=====================================
NAVBAR BACKGROUND
=====================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

header.style.background="#111";

header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background="transparent";

header.style.boxShadow="none";

}

});


/*=====================================
SCROLL TO SECTION
=====================================*/

document.querySelectorAll("[data-scroll]").forEach(button=>{

button.addEventListener("click",()=>{

const target=document.querySelector(button.dataset.scroll);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=====================================
PREVENT IMAGE DRAG
=====================================*/

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});


/*=====================================
RIGHT CLICK DISABLE (OPTIONAL)
=====================================*/

// Uncomment if needed

// document.addEventListener("contextmenu",(e)=>{
// e.preventDefault();
// });

