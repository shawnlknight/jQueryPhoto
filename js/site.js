$(document).ready(function() {


//callback for click events on page to load hidden divs
var showAlbum = function(event) {
      event.preventDefault();

      var contentDiv = $(this).attr("rel");

      console.log($("." + contentDiv));

      if($("." + contentDiv).hasClass("show")) {
        return;
      } else {
      $("." + contentDiv).siblings().removeClass("show");
      $("." + contentDiv).addClass("show");
      }
  }

//when clicking on nav link
//show related page 
$(".nav a").click(showAlbum);



//scrolling through album pictures
$(".album1 img").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      // console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});



$(".album2 img").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      // console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});


$(".album3 img").click(function(event) {
      event.preventDefault();
      var $thisPicture = $(this);

      // console.log($(this));

$thisPicture.closest("li").siblings().toggle();
$thisPicture.toggleClass("magnify");
});


});













