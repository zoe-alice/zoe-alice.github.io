
const iconToggle= document.querySelector('.toggle_icon');
const navbarMenu= document.querySelector('.menu');
const menuLinks= document.querySelectorAll('.menu_link');
const iconClose= document.querySelector('.close_icon');

iconToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', ()=>{
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink)=>{
    menuLink.addEventListener('click', ()=>{
        navbarMenu.classList.remove('active');
    })
})

//cambiar el fondo del encabezado

function scrollHeader(){
    const header=document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active'): header.classList.remove('active');
}

window.addEventListener('scroll', scrollHeader);

/* banner principalk - efecto */
const typed=document.querySelector('.typed');
if(typed){
    let typed_strings=typed.getAttribute('data-typed-items');
    typed_strings=typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

//activar link al bajar y subir
const sections=document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight=section.offsetHeight;
        const sectionTop=section.offsetTop - 50;

        let sectionId=section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *='+ sectionId+']').classList.add('active-link');
        } else{
            document.querySelector('.menu a[href *='+ sectionId+']').classList.remove('active-link');

        }
    });
}

window.addEventListener('scroll', scrollActive);

/*
OTRA MANERA DE USAR:
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(section =>{
        const sectionHeight=section.offsetHeight;
        const sectionTop=section.offsetTop - 50;

        let sectionId=section.getAttribute('id');
        sectionId = sectionId.replace(/\./g, '_'); // Reemplaza los puntos por guiones bajos

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *='+ sectionId+']').classList.add('active-link');
        } else{
            document.querySelector('.menu a[href *='+ sectionId+']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

*/

const pages=document.querySelectorAll('.page');
const resume=document.querySelector('.resume');

function resumeActive(){
   // const scrollY=window.pageYOffset;
    const scrollY=window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop -150;

        let sectionId = page.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        } else{
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');

        }
    });   
}

window.addEventListener('scroll', resumeActive);

//portafolio

let filterItems=document.querySelectorAll('.portfolio_filters li');

function activePorfolio(){
    filterItems.forEach(e1=>{
        e1.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(e1=>{
    e1.addEventListener('click', activePorfolio);
})

// =========

let mixerPortfolio=mixitup('.portfolio_wrap-container',{
   selectors: {
        target: '.portfolio_item'
   },
   animation: {
    duration: 300
   }
})

// testimonio swiper

let swiper = new Swiper(".mySwiper", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768:{
            slidesPerView: 2,
        }
    }
});

// SERVICIOS
let modalBtns = document.querySelectorAll('.services_button'),
modalViews=document.querySelectorAll('.services_modal'),
modalClose=document.querySelectorAll('.close_icon');

let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalClose.forEach(e1=>{
    e1.addEventListener('click', ()=>{
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})



/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
  
  /* ============= counter number animation ================ */
  function animate(obj, initVal, lastVal, duration) {
    let startTime = null;
  
    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();
  
    //pass the current timestamp to the step function
    const step = (currentTime) => {
      //if the start time is null, assign the current time to startTime
      if (!startTime) {
        startTime = currentTime;
      }
  
      //calculate the value to be used in calculating the number to be displayed
      const progress = Math.min((currentTime - startTime) / duration, 1);
  
      //calculate what to be displayed using the value gotten above
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
  
      //checking to make sure the counter does not exceed the last value (lastVal)
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };
    //start animating
    window.requestAnimationFrame(step);
  }