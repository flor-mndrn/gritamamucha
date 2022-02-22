/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 
//$("#bg-img").delay(2000)
//       .fadeOut(3000);


             $(window).load(function() {
              $("#bg-img").css( "display", "block")
              .delay(2000)
              $("body").css("background-image", " url('img/fondo2.jpg')")
              $(".section-bg").css("display", "block")
              $("#manifiesto").css("display", "block")
              $("#bg-img").fadeOut(3000);
              $("#manifiesto").click(() => { 
                $("#manifiesto").fadeOut(500);
            });
            
          });
