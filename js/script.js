$(document).ready(function () {
    $(window).scroll(function () {

        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY>500) {
            $('.scroll-up-btn').addClass("active");
        }
        else{
            $('.scroll-up-btn').removeClass("active");
        }

       
    });
    // Menu Toggle
    $('.menu-btn').click(function(){
        $('.flex').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
});
    // Typing Animation 
    var typed = new Typed(".typing",{
        strings:["WebDeveloper" , "Freelancer","Designer"  ," Blogger"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed2 = new Typed(".typing-2",{
        strings:["WebDeveloper" , "Freelancer","Designer"  ," Blogger"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    // Carousel Js
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            750:{
                items:2,
                nav:false
                
            },
            1200:{
                items:3,
                nav:false
            }
        }

    });



});
