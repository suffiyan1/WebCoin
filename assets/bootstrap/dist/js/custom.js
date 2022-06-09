// get html document ready
$(document).ready(function () {
    //   onclick hamburger function
    $(".navbar-toggler").on('click', function(){
        // add active class in header
        $(".navigation").toggleClass("active");
        // add active class in toggler button
        $(".navbar-toggler").toggleClass("active");
      });
      // Stat Slider 1
      $('.slick.marquee1').slick({
        speed: 7000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false
      });
      // Stat Slider 2
      $('.slick.marquee2').slick({
        speed: 7000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false
      });
});