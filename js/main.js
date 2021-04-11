$ = jQuery.noConflict();//Fix

var hour_s = '00';
var minutes_s = 59;
var seconds_s = 59;
$(document).ready(function () {
    act_timer();

$('.slider-carousel-1').slick({
   dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
});



$('.box-banner-carousel').slick({
   dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.opinions-carousel').slick({
   dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    //intialize flickity
    // $('.big-g-carousel').flickity({
    //     cellAlign: 'center',
    //     adaptiveHeight: true,
    //     prevNextButtons: false,
    //     resize: true,
    //     contain: true,
    //     pageDots: false,
    //     imagesLoaded: true,
    //     autoPlay: 4000,
    //     wrapAround: true
    // });
    // $('.slider-carousel-1').flickity({
    //     cellAlign: 'center',
    //     adaptiveHeight: true,
    //     prevNextButtons: false,
    //     resize: true,
    //     contain: true,
    //     pageDots: false,
    //     imagesLoaded: true,
    //     autoPlay: 4000,
    //     wrapAround: true
    // });

    // $('.opinions-carousel').flickity({
    //     cellAlign: 'center',
    //     adaptiveHeight: true,
    //     prevNextButtons: false,
    //     resize: true,
    //     contain: true,
    //     pageDots: false,
    //     imagesLoaded: true,
    //     autoPlay: 4000,
    //     wrapAround: true
    // });
    // $('.box-banner-carousel').flickity({
    //     cellAlign: 'center',
    //     adaptiveHeight: true,
    //     prevNextButtons: false,
    //     resize: true,
    //     contain: true,
    //     pageDots: false,
    //     imagesLoaded: true,
    //     autoPlay: 4000,
    //     /*wrapAround: true,*/
    //     pauseAutoPlayOnHover: false
    // });
    // $('.image-grid-carousel-1').flickity({
    //     cellAlign: 'center',
    //     adaptiveHeight: true,
    //     prevNextButtons: false,
    //     resize: true,
    //     contain: true,
    //     pageDots: false,
    //     imagesLoaded: true,
    //     autoPlay: 4000,
    //     /*wrapAround: true,*/
    //     pauseAutoPlayOnHover: false,
    // });
    // $('.image-grid-carousel-2').flickity({
    //     cellAlign: 'center',
    //     adaptiveHeight: true,
    //     prevNextButtons: false,
    //     resize: true,
    //     contain: true,
    //     pageDots: false,
    //     imagesLoaded: true,
    //     autoPlay: 4000,
    //     /*wrapAround: true,*/
    //     pauseAutoPlayOnHover: false
    // });
    //scroll to order
    $(document).on('click', '.scroll_to_order', function(event) {
        event.preventDefault();
        var jump = $(this).attr('href');
        var new_position = $(jump).offset();
        $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
    });
    //initialize fluidvids
    // fluidvids.init({
    //     selector: ['iframe'],
    //     players: ['www.youtube.com']
    // });
});

function act_timer() {
    if (!(minutes_s == '00' && seconds_s == '00')) {
        seconds_s--;
        if (seconds_s == -01) {
            seconds_s = 59;
            minutes_s = minutes_s - 1;
        } else minutes_s = minutes_s;
        if (seconds_s <= 9) seconds_s = "0" + seconds_s;
        minutes_sh = minutes_s;
        if (minutes_s < 10) minutes_sh = '0' + minutes_s;
        $('#time ul').html("<li>" + hour_s + "<div class='podp'>ORE</div>" + "</li><li>" + minutes_sh + "<div class='podp'>MINUTI</div>" + "</li><li>" + seconds_s + "<div class='podp'>SECONDI</div>" + "</li>");
        setTimeout("act_timer()", 1000);
    } else {//finish
        $(window).scrollTop($('#order_frame').offset().top);
    }
}