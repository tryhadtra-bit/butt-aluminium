/*==================================================
BUTT ALUMINIUM
PREMIUM WEBSITE
MAIN.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Butt Aluminium Website Loaded");

    /*==============================================
    STICKY HEADER
    ==============================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

});
/*==============================================
SCROLL PROGRESS BAR
==============================================*/

const progress = document.querySelector(".progress");

if (progress) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const percentage = (scrollTop / docHeight) * 100;

        progress.style.width = percentage + "%";

    });

}
/*==============================================
GSAP ANIMATIONS
==============================================*/

gsap.registerPlugin(ScrollTrigger);

/*==============================================
HERO
==============================================*/

gsap.from(".hero-subtitle",{

    y:60,
    opacity:0,
    duration:1,
    ease:"power3.out"

});

gsap.from(".hero-title",{

    y:100,
    opacity:0,
    duration:1.2,
    delay:.2,
    ease:"power4.out"

});

gsap.from(".hero-description",{

    y:60,
    opacity:0,
    duration:1,
    delay:.5

});

gsap.from(".hero-buttons",{

    y:60,
    opacity:0,
    duration:1,
    delay:.7

});

gsap.from(".hero-stats",{

    y:60,
    opacity:0,
    duration:1,
    delay:.9

});

/*==============================================
SECTION TITLES
==============================================*/

gsap.utils.toArray(".section-title").forEach(section=>{

    gsap.from(section,{

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        },

        y:80,

        opacity:0,

        duration:1

    });

});
/*==============================================
ABOUT IMAGE
==============================================*/

gsap.from(".about-right",{

    scrollTrigger:{

        trigger:".about-right",

        start:"top 80%"

    },

    x:120,

    opacity:0,

    duration:1.3,

    ease:"power3.out"

});

gsap.from(".about-left",{

    scrollTrigger:{

        trigger:".about-left",

        start:"top 80%"

    },

    x:-120,

    opacity:0,

    duration:1.3,

    ease:"power3.out"

});

/*==============================================
STATISTICS
==============================================*/

gsap.utils.toArray(".stat-box").forEach((box,index)=>{

    gsap.from(box,{

        scrollTrigger:{

            trigger:box,

            start:"top 85%"

        },

        y:80,

        opacity:0,

        duration:.8,

        delay:index*0.15,

        ease:"power3.out"

    });

});

/*==============================================
SERVICE CARDS
==============================================*/

gsap.utils.toArray(".service-card").forEach((card,index)=>{

    gsap.from(card,{

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        },

        y:100,

        opacity:0,

        duration:.9,

        delay:index*0.15,

        ease:"power4.out"

    });

});

/*==============================================
PROJECTS
==============================================*/

gsap.utils.toArray(".project-row").forEach((project)=>{

    gsap.from(project,{

        scrollTrigger:{

            trigger:project,

            start:"top 80%"

        },

        y:120,

        opacity:0,

        duration:1.2,

        ease:"power3.out"

    });

});

/*==============================================
GALLERY
==============================================*/

gsap.utils.toArray(".gallery-item").forEach((item,index)=>{

    gsap.from(item,{

        scrollTrigger:{

            trigger:item,

            start:"top 90%"

        },

        scale:.85,

        opacity:0,

        duration:.8,

        delay:index*0.08,

        ease:"power3.out"

    });

});
/*==============================================
PARALLAX EFFECT
==============================================*/

gsap.utils.toArray(".showcase-image img, .project-image img").forEach((image)=>{

    gsap.to(image,{

        yPercent:15,

        ease:"none",

        scrollTrigger:{

            trigger:image,

            start:"top bottom",

            end:"bottom top",

            scrub:true

        }

    });

});

/*==============================================
FLOATING ANIMATION
==============================================*/

gsap.utils.toArray(".why-card, .service-card").forEach((card)=>{

    gsap.to(card,{

        y:-10,

        duration:2.5,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

});

/*==============================================
BUTTON HOVER SCALE
==============================================*/

document.querySelectorAll(".btn-primary, .btn-secondary").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        gsap.to(button,{

            scale:1.05,

            duration:.3,

            ease:"power2.out"

        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{

            scale:1,

            duration:.3,

            ease:"power2.out"

        });

    });

});

/*==============================================
IMAGE HOVER
==============================================*/

document.querySelectorAll(".gallery-item img, .project-image img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        gsap.to(img,{

            scale:1.08,

            duration:.5

        });

    });

    img.addEventListener("mouseleave",()=>{

        gsap.to(img,{

            scale:1,

            duration:.5

        });

    });

});
/*==============================================
SMOOTH SCROLL LINKS
==============================================*/

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

/*==============================================
ACTIVE NAVIGATION
==============================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/*==============================================
COUNTER ANIMATION
==============================================*/

const counters=document.querySelectorAll(".stat-box h2");

const counterObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=parseInt(counter.innerText);

            let count=0;

            const speed=target/100;

            const update=()=>{

                count+=speed;

                if(count<target){

                    counter.innerText=Math.ceil(count)+"+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=target+"+";

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});
/*==============================================
PREMIUM PAGE LOADER
==============================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

gsap.to(loader,{

opacity:0,

duration:.8,

delay:.5,

onComplete:()=>{

loader.style.display="none";

}

});

}

});

/*==============================================
INTRO ANIMATION
==============================================*/

const tl=gsap.timeline();

tl.from(".header",{

y:-100,

opacity:0,

duration:1,

ease:"power4.out"

})

.from(".hero-subtitle",{

y:50,

opacity:0,

duration:.8

},"-=0.5")

.from(".hero-title",{

y:80,

opacity:0,

duration:1

},"-=0.4")

.from(".hero-description",{

y:40,

opacity:0,

duration:.8

},"-=0.5")

.from(".hero-buttons",{

y:40,

opacity:0,

duration:.8

},"-=0.5")

.from(".hero-stats",{

y:40,

opacity:0,

duration:.8

},"-=0.5");

/*==============================================
TEXT PARALLAX
==============================================*/

gsap.utils.toArray(".hero-title").forEach(title=>{

gsap.to(title,{

yPercent:20,

ease:"none",

scrollTrigger:{

trigger:title,

start:"top top",

end:"bottom top",

scrub:true

}

});

});

/*==============================================
ROTATING ICONS
==============================================*/

gsap.utils.toArray(".why-icon").forEach(icon=>{

gsap.to(icon,{

rotation:360,

duration:15,

repeat:-1,

ease:"none"

});

});

/*==============================================
FOOTER FADE
==============================================*/

gsap.from(".footer",{

scrollTrigger:{

trigger:".footer",

start:"top 90%"

},

y:120,

opacity:0,

duration:1.2

});
/*==============================================
MOUSE PARALLAX
==============================================*/

const hero=document.querySelector(".hero");

if(hero){

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;
const y=(window.innerHeight/2-e.clientY)/40;

gsap.to(".hero-title",{

x:x,
y:y,
duration:1.2,
ease:"power3.out"

});

gsap.to(".hero-description",{

x:x*0.6,
y:y*0.6,
duration:1.2,
ease:"power3.out"

});

});

}

/*==============================================
IMAGE REVEAL
==============================================*/

gsap.utils.toArray(".project-image").forEach((image)=>{

gsap.from(image,{

clipPath:"inset(100% 0% 0% 0%)",

duration:1.4,

ease:"power4.out",

scrollTrigger:{

trigger:image,

start:"top 85%"

}

});

});

/*==============================================
TEXT REVEAL
==============================================*/

gsap.utils.toArray("h2,h3").forEach((heading)=>{

gsap.from(heading,{

y:80,

opacity:0,

duration:1,

ease:"power3.out",

scrollTrigger:{

trigger:heading,

start:"top 90%"

}

});

});

/*==============================================
BUTTON GLOW
==============================================*/

document.querySelectorAll(".btn-primary").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

gsap.to(btn,{

boxShadow:"0 0 40px rgba(200,169,106,.6)",

duration:.3

});

});

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{

boxShadow:"0 0 0 rgba(0,0,0,0)",

duration:.3

});

});

});
/*==============================================
CARD TILT EFFECT
==============================================*/

document.querySelectorAll(".service-card,.why-card,.stat-box").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;
const rotateX=((y/rect.height)-0.5)*-12;

gsap.to(card,{

rotationY:rotateY,

rotationX:rotateX,

transformPerspective:1000,

duration:.4,

ease:"power2.out"

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{

rotationX:0,

rotationY:0,

duration:.5,

ease:"power2.out"

});

});

});

/*==============================================
BACK TO TOP
==============================================*/

const backTop=document.querySelector(".back-to-top");

if(backTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

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

}

/*==============================================
FADE IMAGES
==============================================*/

gsap.utils.toArray("img").forEach(img=>{

gsap.from(img,{

opacity:0,

duration:1,

scrollTrigger:{

trigger:img,

start:"top 92%"

}

});

});
/*==============================================
HEADER SCROLL EFFECT
==============================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
/*==============================================
END
==============================================*/

console.log("Luxury Website Loaded Successfully");
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active").classList.remove("active");

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projects.forEach(project => {

            if(filter === "all"){

                project.style.display = "block";

            }

            else if(project.classList.contains(filter)){

                project.style.display = "block";

            }

            else{

                project.style.display = "none";

            }

        });

    });

});
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projects.forEach(project => {

            if (filter === "all") {

                project.style.display = "block";

            } else if (project.classList.contains(filter)) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});
/*=========================================
PROJECT GALLERY DATA
=========================================*/

const projectImages = {

project1:[
"images/project1/1.jpg",
"images/project1/2.jpg",
"images/project1/3.jpg",
"images/project1/4.jpg",
"images/project1/5.jpg"
],

project2:[
"images/project2/1.jpg",
"images/project2/2.jpg",
"images/project2/3.jpg",
"images/project2/4.jpg"
],

project3:[
"images/project3/1.jpg",
"images/project3/2.jpg",
"images/project3/3.jpg"
],

project4:[
"images/project4/1.jpg"
],

project5:[
"images/project5/1.jpg"
],

project6:[
"images/project6/1.jpg"
]

};

let currentProject = [];
let currentIndex = 0;

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

const galleryItems = document.querySelectorAll(".gallery-item");
/*=========================================
OPEN PROJECT
=========================================*/

galleryItems.forEach(item=>{

item.addEventListener("click",()=>{

const project=item.dataset.project;

currentProject=projectImages[project];

currentIndex=0;

lightbox.classList.add("active");

lightboxImage.src=currentProject[currentIndex];
resetZoom();
document.querySelector(".image-counter").innerHTML =
(currentIndex+1)+" / "+currentProject.length;

});

});

/*=========================================
NEXT IMAGE
=========================================*/

document.querySelector(".next").onclick=function(){

let next=currentIndex+1;

if(next>=currentProject.length){

next=0;

}

changeImage(next);

};

resetZoom();
document.querySelector(".image-counter").innerHTML =
(currentIndex+1)+" / "+currentProject.length;
;

/*=========================================
PREVIOUS IMAGE
=========================================*/

document.querySelector(".prev").onclick=function(){

let prev=currentIndex-1;

if(prev<0){

prev=currentProject.length-1;

}

changeImage(prev);

};

resetZoom();
document.querySelector(".image-counter").innerHTML =
(currentIndex+1)+" / "+currentProject.length;
/*=========================================
CLOSE LIGHTBOX
=========================================*/

document.querySelector(".close").onclick = function(){

    lightbox.classList.remove("active");

};

/*=========================================
CLICK OUTSIDE CLOSE
=========================================*/

lightbox.addEventListener("click",function(e){

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

/*=========================================
KEYBOARD SUPPORT
=========================================*/

document.addEventListener("keydown",function(e){

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        document.querySelector(".next").click();

    }

    if(e.key==="ArrowLeft"){

        document.querySelector(".prev").click();

    }

});
/*=========================================
DOUBLE CLICK ZOOM
=========================================*/

lightboxImage.addEventListener("dblclick",function(){

    lightboxImage.classList.toggle("zoom");

});

/*=========================================
RESET ZOOM ON IMAGE CHANGE
=========================================*/

function resetZoom(){

    lightboxImage.classList.remove("zoom");

}
function changeImage(index){

lightboxImage.classList.add("fade");

setTimeout(()=>{

currentIndex=index;

lightboxImage.src=currentProject[currentIndex];

document.querySelector(".image-counter").innerHTML=
(currentIndex+1)+" / "+currentProject.length;

resetZoom();

lightboxImage.classList.remove("fade");

},180);

}
