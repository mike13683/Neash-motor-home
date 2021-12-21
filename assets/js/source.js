$(document).ready(function(){

    // homepage - things to do
    $('.owl-carousel,.owl-things-to-do').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
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

    // Our fleet - compare
    $('.owl-carousel,.owl-compare-rv').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
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

// cookie
        if(localStorage.getItem('popupState') != 'shown'){
            $("#cookie").delay(2000).fadeIn();
            localStorage.setItem('popupState','shown')
        }

        $(".cookie-btn").click(function(){ // You are clicking the close button
            $('#cookie').fadeOut(); // Now the popup is hidden.
        });


});


