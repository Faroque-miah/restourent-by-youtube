$(function(){
    AOS.init();
});
// toggler nav  start 
const navToggler = document.querySelector(".nav_togler");
navToggler.addEventListener("click",toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
// toggler nav ends

// when i click the navlist it will be remobe start
document.addEventListener('click',function(e){
    if(e.target.closest(".nav_item")){
        toggleNav();
    }
});
// when i click the navlist it will be remobe ends

// stiky header part stert 
window.addEventListener("scroll" , function(){
    if(this.pageYOffset > 60){
      document.querySelector(".header").classList.add("sticky");
    }else{
        document.querySelector(".header").classList.remove("sticky");
      };
  });
  
// stiky header part ends 



// menu tabs start 
// var munTabs = document.querySelector(".menu_tabs");
const munuTabs = document.querySelector(".menu_tabs");
munuTabs.addEventListener("click" , function(e){
   if(e.target.classList.contains("menu_tab_item") && !e.target.classList.contains("active")){
       const target = e.target.getAttribute("data-target");
       munuTabs.querySelector(".active").classList.remove("active");
       e.target.classList.add("active");

      const menuSection =document.querySelector(".menu_section");
      menuSection.querySelector('.menu_tab_content.active').classList.remove("active");
      menuSection.querySelector(target).classList.add('active');
   
   }
});
// menu tabs ends 
