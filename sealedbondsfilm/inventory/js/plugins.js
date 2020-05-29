$(document).ready(function(){

	// Global Variables

		var toggle_primary_button = $('.nav_toggle_button i'),
				toggle_primary_icon = $('.nav_toggle_button i'),
				toggle_secondary_button = $('nav li span'),
				toggle_secondary_icon = $('nav li span i'),
				primary_menu = $('nav'),
				secondary_menu = $('nav ul ul'),
				webHeight = $(document).height(),
				window_width = $(window).width(),
				window_height = $(window).height();

	//Multi-line Tab
	toggle_secondary_button.each(function(){
		$(this).click(function(){
			$(this).parent("li").children("ul").slideToggle();
			$(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");;
		});
	});

	// Basic functionality for nav_toggle_button
	var hamburger = $(".hamburger");
    hamburger.each(function(){
        $(this).click(function(){
         $(this).toggleClass("is-active");
        });
      });

	hamburger.click(function(){
		primary_menu.stop().slideToggle();
		toggle_primary_icon.toggleClass("fa-times").toggleClass("fa-navicon");
	});
	// Add class to tab having drop down
	$( "nav li:has(ul)").find('span i').addClass("fa-caret-down");
		$(window).resize(function(){

		if(window_width > 600 && primary_menu.is(':visible') || primary_menu.is(':hidden')) {
				primary_menu.removeAttr('style');
				hamburger.removeClass('is-active');
		}

	});

	$(".rslides").responsiveSlides({

	});

	var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 0,
		loop: true,
		autoplay: true,
		nav: true,
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 2
		  },
		  800: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
	  $('.owl-carousel').find('.owl-nav').removeClass('disabled');

	  $('.owl-carousel').on('changed.owl.carousel', function(event) {
		  $(this).find('.owl-nav').removeClass('disabled');
	  });

	  
	// Reset all configs when width > 760
	$(window).resize(function(){

		var window_width = $(window).width();

		if(window_width > 760) {
			primary_menu.removeAttr('style');
			toggle_primary_icon.removeClass("fa-times").addClass("fa-navicon");

			secondary_menu.removeAttr('style');
			toggle_secondary_icon.removeClass("fa-caret-up").addClass("fa-caret-down");
		}

	});

	$('.back_top').click(function () { // back to top
		$("html, body").animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	$(window).scroll(function(){  // fade in fade out button
		var windowScroll = $(this).scrollTop();

		if (windowScroll > (webHeight * 0.5) ) {
			$(".back_top").fadeIn();
		} else{
			$(".back_top").fadeOut()
		};
	});

	// Parallax Scroll Mid Background
	$(window).scroll(function () {
		$("#middle").css("background-position","50% " + ($(this).scrollTop() / -10) + "px");
	});

	$(window).scroll(function () {
		$("#bottom3").css("background-position","50% " + ($(this).scrollTop() / -16) + "px");
	});

	// About Accordion Page
	$(".accordion").on("click", ".accordion-header", function() {
		$(this).toggleClass("active").next().slideToggle();
	});
	
});
