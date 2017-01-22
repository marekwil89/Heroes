$(document).ready(function() {
  var heroSlide = 0
  
  function heroSlider(){
    $('.main-page-header').removeClass('bg-image'+ heroSlide)
    heroSlide = heroSlide + 1

    if(heroSlide >= 3){
      heroSlide = 0
    }
    
    $('.main-page-header').addClass('bg-image' + heroSlide)
  }
  setInterval( heroSlider, 10000 );

});