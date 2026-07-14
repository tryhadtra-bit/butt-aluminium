/*=====================================
BUTT ALUMINIUM
SCRIPT.JS
=====================================*/

/*==========================
SCROLL REVEAL
==========================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const windowHeight = window.innerHeight;

const sectionTop = section.getBoundingClientRect().top;

if(sectionTop < windowHeight - 120){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

/*==========================
HEADER CHANGE
==========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 40){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*==========================
SMOOTH SCROLL
==========================*/

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
/*=====================================
COUNTER ANIMATION
=====================================*/

const counters = document.querySelectorAll(".feature h3");

let counterPlayed = false;

function startCounter(){

if(counterPlayed) return;

const about = document.querySelector(".about");

if(!about) return;

const aboutTop = about.getBoundingClientRect().top;

if(aboutTop < window.innerHeight - 100){

counterPlayed = true;

counters.forEach(counter=>{

const text = counter.innerText;

const target = parseInt(text.replace(/\D/g,""));

let count = 0;

const speed = target / 80;

function update(){

count += speed;

if(count < target){

if(text.includes("%")){

counter.innerText = Math.ceil(count) + "%";

}else if(text.includes("+")){

counter.innerText = Math.ceil(count) + "+";

}else{

counter.innerText = Math.ceil(count);

}

requestAnimationFrame(update);

}else{

counter.innerText = text;

}

}

update();

});

}

}

window.addEventListener("scroll",startCounter);

startCounter();

/*=====================================
MOBILE HEADER HIDE / SHOW
=====================================*/

let lastScroll = 0;

window.addEventListener("scroll",()=>{

if(window.innerWidth > 768) return;

const currentScroll = window.pageYOffset;

if(currentScroll > lastScroll && currentScroll > 120){

header.style.transform = "translateY(-100%)";

}else{

header.style.transform = "translateY(0)";

}

lastScroll = currentScroll;

});

/*=====================================
IMAGE FADE
=====================================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

}

});

},{
threshold:0.2
});

images.forEach(img=>{

imageObserver.observe(img);

});
/*=====================================
ACTIVE PAGE
=====================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("a").forEach(link=>{

const href = link.getAttribute("href");

if(href === currentPage){

link.classList.add("active");

}

});

/*=====================================
HERO PARALLAX
=====================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(!hero) return;

const scroll = window.pageYOffset;

hero.style.backgroundPositionY = scroll * 0.35 + "px";

});

/*=====================================
PRELOAD IMAGES
=====================================*/

window.addEventListener("load",()=>{

document.querySelectorAll("img").forEach(img=>{

const image = new Image();

image.src = img.src;

});

});

/*=====================================
REMOVE VIDEO IF NOT FOUND
=====================================*/

const heroVideo = document.querySelector(".hero video");

if(heroVideo){

heroVideo.onerror = function(){

this.style.display = "none";

};

}

/*=====================================
INITIALIZE
=====================================*/

window.addEventListener("DOMContentLoaded",()=>{

revealSections();
startCounter();

});

/*=====================================
END
=====================================*/
