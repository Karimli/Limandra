$(document).ready(function(){

    //toggle menu responsive mode
    $('.menu-toggle').click(function () {
        $(this).toggleClass('is-active');
        $('.header-holder-navigation').slideToggle(300);
    });
        //animating scroll
        $('.header [data-scroll], .main-content [data-scroll], .footer [data-scroll]').click(function (e) {
            e.preventDefault();
            var scrollSection = $(this).data('scroll');
            var scrollTop = $('section[data-scroll="' + scrollSection + '"] , footer[data-scroll="' + scrollSection + '"] ').offset().top - 0;
            $('html, body').animate({
              scrollTop: scrollTop - 50
            }, 1000);
        
          });
          
        

          // Vimeo Videoplayer script //
  // Videoplayer //
  var trigger = $('.videoModalTriger');
  trigger.click(function() {
    var theModal = $(this).data('target');
    var videoSRC = $(this).attr('data-videoModal');
    var videoSRCauto = videoSRC + '';
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal).on('hidden.bs.modal', function(e) {
      $(theModal + ' iframe').attr('src', '');
    });
  });


  $('.date-mask').mask('00/00/0000');
  $('.phone-mask').mask('(00) 000-00-00');
})

