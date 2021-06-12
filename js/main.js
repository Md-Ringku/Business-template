$(window).scroll(function(){
  $("nav").toggleClass("scrolled",$(this).scrollTop()>100)
 });
 $(window).scroll(function(){
  $(".third-img").toggleClass("third-active",$(this).scrollTop()>10)
 });
 $(window).scroll(function(){
  $(".forth-img").toggleClass("third-active",$(this).scrollTop()>10)
 });


$(document).ready(function(){
  $(".count").counterUp({
    delay: 10,
    time: 1000
});
$('.owl-testimonial').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1140:{
          items:1
      }
  }
}); 
});