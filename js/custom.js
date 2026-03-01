// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/neenanaidu1.jpg", 
	 		 "images/neenanaidu2.jpg",
			 "images/neenanaidu3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})