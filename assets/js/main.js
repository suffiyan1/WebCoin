$(document).ready(function () {
    $(window).scroll(function(){
        var sticky = $('#Nav'),
            scroll = $(window).scrollTop();
        var body = $('.account');

        if (scroll >= 1) {
            sticky.addClass('sticky');
            body.addClass('bodyup');
        }
        else {
            sticky.removeClass('sticky');
            body.removeClass('bodyup');
        }
      });
});