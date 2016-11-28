// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();    
//     if (scroll <= 500) {
//         $(".text-pop").addClass("fadeIn");
//         $("#myCarousel").addClass("fadeIn");
//     }
//     if (scroll <= 800){
//         $(".text-pop").addClass("fadeIn");
//         $("#myCarouse12").addClass("fadeIn");
//     }
// });



function isVisible($el) {
  var winTop = $(window).scrollTop();
  var winBottom = winTop + $(window).height();
  var elTop = $el.offset().top;
  var elBottom = elTop + $el.height();
  return ((elBottom<= winBottom) && (elTop >= winTop));
}

$(window).scroll(function () {
    
    if (isVisible($('#anchor1')) == true ) {
        $('#row1').addClass('fadeIn');
    }
      
    if (isVisible($('#anchor2')) == true ) {
      $('#row2').addClass('fadeIn');
    }
    if (isVisible($('#anchor3')) == true ) {
      $('#row3').addClass('fadeIn');
    }
   


});

$('.makeItFly').on('click', function(){
  $(this).addClass('zoomOutRight');
});

