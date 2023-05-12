// start nav bar responsive design

const barIcon = document.querySelector(".bar");
barIcon.onclick = () => {
  document.querySelector("nav").classList.toggle('show');
}
// end nav bar responsive design

// start nav project 
const navLinks = document.querySelectorAll(".nav-projects ul li");
const projectItems = Array.from(document.querySelectorAll(".projects .content div"))
navLinks.forEach(el => {
  el.addEventListener("click",addClassActive);
  el.addEventListener("click",filtering);
});
function addClassActive() {
  navLinks.forEach((el) => {
    el.classList.remove("active");
    this.classList.add("active");
  })
}
function filtering(){
  projectItems.forEach((element) => {
    element.style.display = "none";
  });
  document.querySelectorAll(this.dataset.category).forEach((el) => {
    el.style.display = 'flex';
  })
}
// end nav project 

// start statistics progress
const statistics = document.getElementById("statistics");
let button = document.querySelector(".scroll-to-top");
window.onscroll = () => {
  //statistics offset
  let statisticsOffsetTop = statistics.offsetTop;
  // window height
  let windowHeight = this.innerHeight;
  // outter height
  let outterHeight = statistics.offsetHeight;
  // window scroll top
  let windowScrollTop = this.pageYOffset;
  if(windowScrollTop > (statisticsOffsetTop + outterHeight - windowHeight)){
    let allStatistics = document.querySelectorAll(".progress .progress-icon");
    allStatistics.forEach(el => {
      el.style.width = el.dataset.progress
    })
  }
  // start scroll to top 
  if(this.scrollY >= 800){
      button.style.display = "flex";
    }else{
      button.style.display = "none";
    }
  button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior:"smooth",
  });
}
// end scroll to top 
}
// end statistics progress

// start swiper js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prevous',
  },
});

// end swiper js
