/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Search Js
03. Info Bar Js
04. Sticky Header Js
05. Data-Background Js
06. Mobile Menu Js
07. Scroll To Top Js
08. Hero Slider Js
09. Testimonial Js
10. Product Slider Js
11. Product Slider 2 Js
12. Product Slider 3 Js
13. Product Slider 4 Js
14. Sale Slider Js 
15. Sale Slider 2 Js 
16. Client Slider Js
17. Blog Slider Js
18. Product Offer SLider Js 
19. Masonary Js
20. WoW Js
21. Cart Plus Minus Js
22. Range Slider Js
23. Show Login Toggle Js
24. Show Coupon Toggle Js
25. Create An Account Toggle Js
26. Shipping Box Toggle Js
****************************************************/

(function ($) {
    "use strict";

    var windowOn = $(window);
    ////////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on('load', function () {
        $("#loading").fadeOut(500);
    });

    // btn Js
    $('.m-btn').on('mouseenter, mouseout', function (e) {
        var elOffset = $(this).offset(),
            dX = e.pageX - elOffset.left,
            dY = e.pageY - elOffset.top;
        $(this).find('span').css({
            top: dY,
            left: dX
        });
    });

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fa fa-plus"></i>'],
    });


    $("#sidebar-toggle").on("click", function () {
        $(".sidebar__area").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".sidebar__close-btn").on("click", function () {
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });


    ////////////////////////////////////////////////////
    // 02. Cart Toggle Js
    $(".cart-toggle-btn").on("click", function () {
        $(".cartmini__wrapper").addClass("opened");
        $(".body-overlay").addClass("opened");
    });
    $(".cartmini__close-btn").on("click", function () {
        $(".cartmini__wrapper").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });
    
    $(".body-overlay").on("click", function () {
        $(".cartmini__wrapper").removeClass("opened");
        $(".sidebar__area").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

     // 00. Search Js
	$(".searchOpen").on("click", function () {
		$(".search-wrapper").addClass("search-open");
		$(".body-overlay").addClass("opened");
	});
	$(".search-close").on("click", function () {
		$(".search-wrapper").removeClass("search-open");
		$(".body-overlay").removeClass("opened");
	});




    ////////////////////////////////////////////////////
    // 04. Sticky Header Js
    windowOn.on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });

    ////////////////////////////////////////////////////
    // 05. Data-Background Js
    $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            '@0.75': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '@1.00': {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            '@1.50': {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    });


    $('.owl-carousel ').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        items: 6,
        navText: ['<button><i class="fa fa-angle-left"></i>PREV</button>', '<button>NEXT<i class="fa fa-angle-right"></i></button>'],
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 2
            },
            1600: {
                items: 2
            }
        }
    });


    ////////////////////////////////////////////////////
    // 07. Scroll To Top Js
    function smoothSctollTop() {
        $('.smooth-scroll a').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
            }
        });
    }
    smoothSctollTop();

    // Show or hide the sticky footer button
    windowOn.on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('#scroll').fadeIn(200)
        } else {
            $('#scroll').fadeOut(200)
        }
    });

    //Animate the scroll to yop
    $('#scroll').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });




    ////////////////////////////////////////////////////
    // 19. Masonary Js
    $('.grid').imagesLoaded(function () {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });


        // filter items on button click
        $('.masonary-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.masonary-menu button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });


    ////////////////////////////////////////////////////
    // 20. WoW Js
    new WOW().init();

    ////////////////////////////////////////////////////
    // 21. Cart Plus Minus Js
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });




    ////////////////////////////////////////////////////
    // 23. Show Login Toggle Js
    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 24. Show Coupon Toggle Js
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 25. Create An Account Toggle Js
    $('#cbox').on('click', function () {
        $('#cbox_info').slideToggle(900);
    });

    ////////////////////////////////////////////////////
    // 26. Shipping Box Toggle Js
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle(1000);
    });


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    if ($('.scene').length > 0) {
        $('.scene').parallax({
            scalarX: 10.0,
            scalarY: 15.0,
        });
    };

    ////////////////////////////////////////////////////
    // 15. InHover Active Js
    $('.price__item').on('mouseenter', function () {
        $(this).addClass('active').parent().siblings().find('.price__item').removeClass('active');
    });

})(jQuery);