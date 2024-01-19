$(document).ready(function(){
    $('.customers-say .owl-carousel').owlCarousel({
        loop:true,
        margin:9,
        nav:false,
        dots:false,
        stagePadding: 150,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:2
            }
        }
    })
  
})
$(document).ready(function () {
    $(".app-section .owl-carousel").owlCarousel({
        items: 4,
        margin:20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});