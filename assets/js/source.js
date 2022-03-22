$(document).ready(function(){
    // vechicle options
    $('.owl-options-gallery').owlCarousel({
        loop:true,
        nav:true,
        center:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    // motorhome-options
    $('.owl-carousel-motorhome-options ').owlCarousel({
        loop:true,
        nav:false,
        center:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


    // Our fleet - compare
    $('.owl-compare-rv').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
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
    })

    // Resources
    $('.owl-options').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
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

    // GSAP
    // homepage intro
    const IntroController = new ScrollMagic.Controller()

    const IntroTween = gsap.timeline()
    IntroTween.fromTo("#h-intro .intro--bg-image", {autoAlpha:0, x:"-20px"}, {autoAlpha:1, x:0, duration:0.6,})
    IntroTween.fromTo("#h-intro .intro__content", {autoAlpha:0, y:"-20px"}, {autoAlpha:1, y:0, duration:2.5,})

    const IntroScene = new ScrollMagic.Scene({
        triggerElement: ".h-intro",
        reverse:false
    })
        .setTween(IntroTween)
        .addTo(IntroController)


    // fade left to right
    $(".js-leftRight").each(function(){

        const fadeLeftController = new ScrollMagic.Controller()

        const fadeLeftTween = gsap.timeline()
        fadeLeftTween.fromTo(this, {autoAlpha:0, x:"-20px"}, {autoAlpha:1, x:0, duration:0.6})

        const fadeLeftControllerScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse:false
        })
            .setTween(fadeLeftTween)
            .addTo(fadeLeftController)
    })

    // fade top to bottom
    $(".js-top").each(function(){
        const fadetopController = new ScrollMagic.Controller()

        const fadetopTween = gsap.timeline()
        fadetopTween.fromTo(this, {autoAlpha:0, y:"-20px"}, {autoAlpha:1, y:0, duration:0.7})

        const fadetopControllerScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse:false

    })
            .setTween(fadetopTween)
            .addTo(fadetopController)
    })

    // fade bottom to top
    $(".js-bottom").each(function(){
        const fadebottomController = new ScrollMagic.Controller()

        const fadebottomTween = gsap.timeline()
        fadebottomTween.fromTo(this, {autoAlpha:0, y:"20px"}, {autoAlpha:1, y:0, duration:0.7})

        const fadebottomControllerScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse:false
        })
            .setTween(fadebottomTween)
            .addTo(fadebottomController)
    })

    // stagger effect
    $(".js-stagger img").each(function(){
        const fadestaggerController = new ScrollMagic.Controller()

        const fadestaggerTween = gsap.timeline()
        fadestaggerTween.fromTo(this, {autoAlpha:0, x:"10px"}, {autoAlpha:1, x:0, duration:0.5, stagger:1.5})

        const fadestaggerControllerScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse:false
        })
            .setTween(fadestaggerTween)
            .addTo(fadestaggerController)
    })

    // intro top of most pages
    $(".js-intro").each(function(){
        const IntroController = new ScrollMagic.Controller()

        const IntroTween = gsap.timeline()
        IntroTween.fromTo(".utility-bg-image", {autoAlpha:0, x:"-20px"}, {autoAlpha:1, x:0, duration:0.6,})
        IntroTween.fromTo(".utility__content", {autoAlpha:0, y:"-20px"}, {autoAlpha:1, y:0, duration:2.3,})

        const IntroScene = new ScrollMagic.Scene({
            triggerElement: ".intro",
            reverse:false
        })
            .setTween(IntroTween)
            .addTo(IntroController)
    })


});