$(document).ready(function() {


	//callback for click events on page to load hidden divs
	var showAlbum = function(event) {
      event.preventDefault();
      var contentDiv = $(this).attr("rel");
      console.log($("." + contentDiv));

		if ($("." + contentDiv).hasClass("show")) {
			return;
		}  else {
			$("." + contentDiv).siblings().removeClass("show");
			$("." + contentDiv).addClass("show");
		}
  }

	/* When clicking on nav link,
		show related page 
	*/
	$(".nav a").click(showAlbum);

	//scrolling through album pictures
	// $(".album1 img").click(function(event) {
	// 	event.preventDefault();
	// 	var $thisPicture = $(this);

	// 	$thisPicture.closest("li").siblings().toggle();
	// 	$thisPicture.toggleClass("magnify");
	// });

	// $(".album2 img").click(function(event) {
	// 	event.preventDefault();
	// 	var $thisPicture = $(this);

	// 	$thisPicture.closest("li").siblings().toggle();
	// 	$thisPicture.toggleClass("magnify");
	// });

	// $(".album3 img").click(function(event) {
	// 	event.preventDefault();
	// 	var $thisPicture = $(this);

	// 	$thisPicture.closest("li").siblings().toggle();
	// 	$thisPicture.toggleClass("magnify");
	// });

	/*
		 Left the above code commented out to show
		 how it can be condensed to these few lines of code
	 */
	$(".picAlbum").on("click", "img", function(event) {
		event.preventDefault();
		var $thisPicture = $(this);

		$thisPicture.closest("li").siblings().toggle();
		$thisPicture.toggleClass("magnify");
	});
});













