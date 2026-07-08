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
