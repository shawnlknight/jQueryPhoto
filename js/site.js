$(document).ready(function() {

  var $album1 = $(".album1");
  var $album2 = $(".album2");
  var $album3 = $(".album3");

  // var $pic1 = $(".pic1");
  // var $pic2 = $(".pic2");
  // var $pic3 = $(".pic3");
  // var $pic4 = $(".pic4");
  // var $pic5 = $(".pic5");
  // var $pic6 = $(".pic6");
  // var $pic7 = $(".pic7");
  // var $pic8 = $(".pic8");
  // var $pic9 = $(".pic9");

  //album 1 

  $(".album1Link").click(function(event) {
      event.preventDefault();
      if($album1.hasClass("show")) {
        return;
      } else { console.log("I'm in album 1")
        $album1.siblings().removeClass("show");
        $album1.addClass("show");
      }
  });

  //album 2

    $(".album2Link").click(function(event) {
      event.preventDefault();
      if($album2.hasClass("show")) {
        return;
      } else { console.log("I'm in album 2")
        $album2.siblings().removeClass("show");
        $album2.addClass("show");
      }
  });

  //album 3

  $(".album3Link").click(function() {
      event.preventDefault();

      if($album3.hasClass("show")) {
        return;
      } else { console.log("I'm in album3")
        $album3.siblings().removeClass("show");
        $album3.addClass("show");
      }
  });
});

  // $("button").click(function()) {
  //     $("a").toggle();
  // });

// for album 1 photos
 
// $(document).ready(function() {

//   var $pic1 = $(".pic1");
//   var $pic2 = $(".pic2");
//   var $pic3 = $(".pic3");

  // $(".pic1").click(function(event) {
  //     event.preventDefault();
  //     if($pic1.hasClass("show")) {
  //       return;
  //     } else { console.log("pic 1")
  //       $pic1.siblings().removeClass("show");
  //       $pic1.addClass("show");
  //     }
  // });

//     $(".pic2").click(function(event) {
//       event.preventDefault();
//       if($pic2.hasClass("show")) {
//         return;
//       } else { console.log("pic 2")
//         $pic2.siblings().removeClass("show");
//         $pic2.addClass("show");
//       }
//   });

//   $(".pic3").click(function() {
//       event.preventDefault();

//       if($pic3.hasClass("show")) {
//         return;
//       } else { console.log("pic 3")
//         $pic3.siblings().removeClass("show");
//         $pic3.addClass("show");
//       }
//   });
// });









