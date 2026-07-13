const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 80;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            if(target==100){

                counter.innerText="100%";

            }else{

                counter.innerText=target+"+";

            }

        }

    };

    updateCounter();

});
/* Scroll Animation */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(reveal=>{

const top=reveal.getBoundingClientRect().top;

const visible=window.innerHeight-120;

if(top<visible){

reveal.classList.add("active");

}

});

});
const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    // Desktop: navbar hamesha show
    if (window.innerWidth > 768) {
        header.style.transform = "translateY(0)";
        return;
    }

    // Shadow
    if(currentScroll > 20){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

    // Top of page
    if(currentScroll <= 0){
        header.style.transform = "translateY(0)";
        return;
    }

    // Scroll Down → Hide
    if(currentScroll > lastScroll && currentScroll > 80){
        header.style.transform = "translateY(-110%)";
    }

    // Scroll Up → Show
    else{
        header.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;

});
