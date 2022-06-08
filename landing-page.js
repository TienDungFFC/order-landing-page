 $(function(){
   $("[data-hieuung='tooltip']").tooltip();

   $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:20,
          nav:true,
          responsive:{
              576:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              }
          }
      })
   });

   $('.tieude').click(function(event) {
   $(this).toggleClass('mauxanh');
   // click cho nd hiện ra
   $(this).next().slideToggle(500);
   //chuyển nd
   $('html,body').animate({scrollTop: ($(this).offset().top)},900);

    });
   $('.ndkhoi').slideUp();

   $('.header_main-icon').on('click', function(event) {
        event.preventDefault();
        $('.menuTop--dc').toggle();
   });

    $(document).on('click', function (e) {
      if ($(e.target).hasClass('menuTop--dc')) {
         alert(123)
      }
    });
})  
 