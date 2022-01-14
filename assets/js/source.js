$(document).ready(function(){

    // Our fleet - compare
    $('.owl-compare-rv').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        // autoplay:true,
        // autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    })


    // Resources
    $('.owl-options').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        // autoplay:true,
        // autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }

    });

// cookie
        if(localStorage.getItem('popupState') != 'shown'){
            $("#cookie").delay(2000).fadeIn();
            localStorage.setItem('popupState','shown')
        }

        $(".cookie-btn").click(function(){ // You are clicking the close button
            $('#cookie').fadeOut(); // Now the popup is hidden.
        });


});


