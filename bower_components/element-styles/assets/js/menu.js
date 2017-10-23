jQuery(document).ready(function(){
	jQuery('#toggle-menu').click(function(){
		jQuery('nav.main').toggleClass('open');
	});
	jQuery(function() {
		jQuery("#primary-menu").swipe( {
			//Generic swipe handler for all directions
			swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
				jQuery("nav.main.open").removeClass('open');
			}
		});
	});
});
