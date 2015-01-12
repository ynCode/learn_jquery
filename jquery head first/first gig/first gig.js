jQuery(document).ready(function($) {
	// .show && .hide 
	// $("button").click(function() {
	// 	$(".picture").show('slow', function() {
	// 		$(this).hide('slow');
	// 	});
	// });
	// toggle 
	$("button").click(function() {
		$(".picture").toggle('slow');
	});
});