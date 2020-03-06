(function ($) {
    "use strict";
/*--
    Commons Variables
-----------------------------------*/
var windows = $(window);
var windowWidth = windows.width();
var mainWrapper = $('.main-wrapper');


/*--
    Header Cart
-----------------------------------*/
var cartToggle = $('.header-cart-toggle');
var miniCart = $('.header-mini-cart');
// Toggle Header Cart
cartToggle.on("click", function () {
    miniCart.slideToggle();
});
// Closing the Header Cart by clicking in the menu button or anywhere in the screen
$('body').on('click', function (e) {
    var target = e.target;
    if (!$(target).is('.header-cart-toggle') && !$(target).parents().is('.header-cart-toggle')) {
        miniCart.slideUp();
    }
});
// Prevent closing Header Cart upon clicking inside the Header Cart
$('.header-mini-cart').on('click', function (e) {
    e.stopPropagation();
});
    
/*--
    Mobile Menu
-----------------------------------*/
var mainMenuNav = $('.main-menu');
mainMenuNav.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'left',
    meanMenuCloseSize: '0'
});

/*--
    Sliders
-----------------------------------*/
// Hero Slider
$('.hero-slider').slick({
    infinite: true,
    fade: true,
    dots: false,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
}); 
// Product Slider 4 Column
$('.product-slider-4').slick({
    rtl: true,
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-right"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-left"></i></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
// Product Slider 3 Column
$('.product-slider-3').slick({
    rtl: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-right"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-left"></i></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
// Single Product Slider
$('.single-product-slider').slick({
    rtl: true,
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-right"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-left"></i></button>',
});
// Single Product Slider
$('.single-product-slider-syn').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-right"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa fa-angle-left"></i></button>',
    asNavFor: '.single-product-thumb-slider-syn',
});
// Single Product Thumbnail Slider
$('.single-product-thumb-slider-syn').each(function() {
    var $vertical = $(this).attr('data-vertical') === 'true' ? true : false;
    var $verticalPrevArrow = $(this).attr('data-vertical') === 'true' ? 'up' : 'left';
    var $verticalNextArrow = $(this).attr('data-vertical') === 'true' ? 'down' : 'right';
    $(this).slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-'+$verticalPrevArrow+'"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-'+$verticalNextArrow+'"></i></button>',
        asNavFor: '.single-product-slider-syn',
        vertical: $vertical,
        responsive: [
            {
                breakpoint: 479,
                settings: {
                    arrows: false,
                    vertical: false,
                    prevArrow: '<button class="slick-prev"><i class="fa fa-angle-right"></i></button>',
                    nextArrow: '<button class="slick-next"><i class="fa fa-angle-left"></i></button>',
                }
            },
        ]
    });
});
// Brand Slider
$('.brand-slider').slick({
    rtl: true,
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});


/*----- 
    Quantity
--------------------------------*/
$('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
$('.pro-qty').append('<span class="inc qtybtn">+</span>');
$('.qtybtn').on('click', function() {
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        } else {
        newVal = 0;
      }
      }
    $button.parent().find('input').val(newVal);
});  
    
/*--
    Nice Select
-----------------------------------*/
$('.nice-select').niceSelect();

/*--
    Imageloaded & Masonry
-----------------------------------*/
var $masonryGird = $('.masonry-grid');
$masonryGird.imagesLoaded( function() {
    $masonryGird.masonry({
      // options
      itemSelector: '.masonry-grid > *',
    });
});

      
//off canvas toggle
//=====================
$('.off-canvas-toggle').on('click', function(event) {
      event.preventDefault();
      $('body').toggleClass('off-canvas-active');
      //$('.main').css("margin-right", "300px");
    });

    $(document).on('mouseup touchend', function(event) {
      var offCanvas = $('.off-canvas')
      if (!offCanvas.is(event.target) && offCanvas.has(event.target).length === 0) {
        $('body').removeClass('off-canvas-active')
        $('.main').css("margin-right", "0px");
      }
    });
    $( ".open" ).click(function() {
        $('.my-menu').toggleClass('off-canvas-active');
    });

    $('ul.my-menu').parent().prepend('<span class="plus-open mobico"><i class="fa fa-plus"></i></span>');
        $('ul.my-menu li ul.submenu').parent().prepend('<span class="plus-open subli"><i class="fa fa-plus"></i></span>');
        $('.subli').click(function(){
          $(this).parent().find('.submenu').slideToggle(100);
          $(this).find('i').toggleClass('rotate');
        }
        );
        $('.mobico').click(function(){
          $(this).parent().find('.my-menu').slideToggle(100);
          $(this).find('i').toggleClass('rotate');
        }
      );
    
     $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
    })
    
})(jQuery);	