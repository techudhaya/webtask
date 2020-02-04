$(document).ready(function(){

    $("section article").hide();

    
    $("section article:nth-of-type(1)").fadeIn(2000);
    $("section article:nth-of-type(2)").fadeIn(4000);
    $("section article:nth-of-type(3)").fadeIn(6000);


    $(".space").click(function(){

        $(".space p").slideToggle();

    });

    $(".travel").click(function(){

        $(".travel p").slideToggle();

    });

    $(".cities").click(function(){

        $(".cities p").slideToggle();

    });

});