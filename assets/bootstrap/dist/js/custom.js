// get html document ready
$(document).ready(function () {
    // function to detect scroll behavior of page
    $(window).on('scroll' ,function(){
        // variable to indcate header
        var sticky = $('#Nav'),
        scroll = $(window).scrollTop();
        // variable to indcate  account page so it can be added 'bodyup' class
        var body = $('.account');
        // if scroll detected then add classes
        if (scroll >= 1) {
            sticky.addClass('sticky');
            body.addClass('bodyup');
        }
        // if scroll is zero then remove classes
        else {
            sticky.removeClass('sticky');
            body.removeClass('bodyup');
        }
      });
});