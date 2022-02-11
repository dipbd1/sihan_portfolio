// Manu-area start

jQuery(".bar").click(function() {
	jQuery(".one31 ul").slideToggle();
});

jQuery(window).resize(function() {
	var sceernWidth = jQuery(window).width();
	if(sceernWidth>768) {
		jQuery(".one31 ul").show();
	}
	else {
		jQuery(".one31 ul").hide();
	}
});
// Manu-area ends

