/*=========================================
BUTT ALUMINIUM V2
Premium Script
=========================================*/

/*==============
LOADER
==============*/

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.classList.add("hide");

}, 700);

});

/*==============
SCROLL REVEAL
==============*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

const windowHeight = window.innerHeight;

reveals.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < windowHeight - 120){

section.classList.add("active");

}

});

}

window.addEventListener("scroll", revealSections);

revealSections();

/*==============
COUNTER
==============*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters(){

if(counterStarted) return;

const stats = document.querySelector(".statistics");

if(!stats) return;

const statsTop = stats.getBoundingClientRect().top;

if(statsTop < window.innerHeight - 100){

counterStarted = true;

counters.forEach(counter=>{

const target = +counter.dataset.target;

let count = 0;

const speed = target / 80;

const update = ()=>{

count += speed;

if(count < target){

counter.innerText = Math.ceil(count);

requestAnimationFrame(update);

}else{

if(target === 100){

counter.innerText = "100%";

}else{

counter.innerText = target + "+";

}

}

};

update();

});

}

}

window.addEventListener("scroll", runCounters);

runCounters();
/*=========================================
HEADER
=========================================*/

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

const currentScroll = window.pageYOffset;

/* Glass Effect */

if(currentScroll > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

/* Mobile Hide Navbar */

if(window.innerWidth <= 768){

if(currentScroll > lastScroll && currentScroll > 120){

header.classList.add("hide");

}else{

header.classList.remove("hide");

}

}else{

header.classList.remove("hide");

}

lastScroll = currentScroll;

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop;

const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});
/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

});

});

/*=========================================
HERO PARALLAX
=========================================*/

const heroVideo=document.querySelector(".hero video");

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

if(heroVideo){

heroVideo.style.transform=`translateY(${scroll*0.25}px) scale(1.08)`;

}

});

/*=========================================
PROJECT IMAGE EFFECT
=========================================*/

const projects=document.querySelectorAll(".project-card");

projects.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");
card.style.setProperty("--y",y+"px");

});

});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

const buttons=document.querySelectorAll(".btn-primary,.btn-secondary,.quote-btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});
/*=========================================
LAZY LOADING IMAGES
=========================================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

if(img.dataset.src){

img.src=img.dataset.src;

}

img.classList.add("loaded");

observer.unobserve(img);

}

});

});

images.forEach(img=>{

imageObserver.observe(img);

});

/*=========================================
BRAND LOGO ANIMATION
=========================================*/

const brands=document.querySelectorAll(".brand-slider img");

brands.forEach((brand,index)=>{

brand.style.animationDelay=`${index*0.15}s`;

brand.classList.add("fade-in");

});

/*=========================================
NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll",()=>{

if(window.pageYOffset>10){

header.style.boxShadow="0 18px 45px rgba(0,0,0,.20)";

}else{

header.style.boxShadow="none";

}

});

/*=========================================
PERFORMANCE
=========================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("loaded");

});

/*=========================================
INITIALIZE
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

revealSections();

runCounters();

});

/*=========================================
END OF SCRIPT
=========================================*/
