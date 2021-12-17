$(document).ready(function(){

    // // homepage - things to do
    // $('.owl-carousel,.owl-things-to-do').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // })
    //
    // // Our fleet - compare
    // $('.owl-carousel,.owl-compare-rv').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // })


// cookie
    $(function () {
        if(localStorage.getItem('popState') != 'shown'){
            $("#cookie").delay(4000).fadeIn();
            localStorage.setItem('popState','shown')
        }

        $('.cookie-btn').click(function(e)
        {
            $('#cookie').fadeOut();
        });
    });



});


