(function ($) {
"use strict";


    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay:true,
        animateOut:'slideOutDown',
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.project-active').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 0
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })


    $('.blog-active').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



   $('.test-active').owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


   $('.brand-active').owlCarousel({
        loop: true,
        nav: false,
        dots:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })



    $('.video-popup').magnificPopup({
  		type: 'iframe'
  // other options
	});


})(jQuery);	