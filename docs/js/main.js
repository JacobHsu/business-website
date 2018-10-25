jQuery(document).ready(function() {
	smoothScroll();
	onScroll();
});

function smoothScroll() {
	jQuery("a[href^='#']").click(function() {
		
		mainMenuHeight = jQuery('.main-menu').innerHeight();
		
		jQuery('html, body').animate({
			scrollTop: jQuery(jQuery(this).attr('href')).offset().top - mainMenuHeight
		}, 1000);
	});
}

function onScroll() {
	var sections = jQuery('.section');
	var mainMenu = jQuery('.main-menu');
	var mainMenuHeight = jQuery('.main-menu').innerHeight();

	jQuery(window).on('scroll', function() {
		var cur_pos = jQuery(this).scrollTop();
		
		sections.each(function() {
			var top = jQuery(this).offset().top - mainMenuHeight;
			
			if(cur_pos >= top) {
				mainMenu.find('a').removeClass('active');
				mainMenu.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
			}
		})
	});
}