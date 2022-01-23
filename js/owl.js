
//count up
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

 // 19. Masonary Js
//imageLoader with isotope
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
    // 10. Team Slider Js
$('.team__slider ').owlCarousel({
    loop:true,
    margin:30,
    autoplay:false,
    autoplayTimeout:3000,
    smartSpeed:500,
    items:6,
    navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3
        },
        1600:{
            items:3
        }
    }
});


















////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////
    // 07. Testimonial Slider Js
	$('.testimonial__slider').owlCarousel({
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:3
			},
			1200:{
				items:2
			},
			1600:{
				items:2
			}
		}
	});

	////////////////////////////////////////////////////
    // 08. Testimonial Slider 3 Js
	$('.testimonial__slider-3').owlCarousel({
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			767:{
				items:2
			},
			992:{
				items:2
			},
			1200:{
				items:3
			},
			1600:{
				items:3
			}
		}
	});

	////////////////////////////////////////////////////
    // 09. Testimonial Slider 5 Js
	$('.testimonial__slider-5').owlCarousel({
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:6,
		navText:['<button><i class="fa fa-angle-left"></i>PREV</button>','<button>NEXT<i class="fa fa-angle-right"></i></button>'],
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
			1600:{
				items:1
			}
		}
	});



