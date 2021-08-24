var scrollBtn = $(".scrollarrow");

var height = $(window).height();

if($(".about-fullpage").length){
    $(".scrollarrow").click(function(){

        if($("body").hasClass("fp-viewing-0")){

            $("body").removeClass("fp-viewing-0");
            $("body").addClass("fp-viewing-1");
            $(".about-fullpage").css("transform",'translate3d(0px,-'+ height +'px,0px)')
            $(".about-fullpage").css("transform",'translate3d(0px,-'+ height +'px,0px)')
            $(".about-sec0").removeClass("active fp-completely");
            $(".about-sec1").addClass("active fp-completely"); 

        }else if($("body").hasClass("fp-viewing-1")){
            $("body").removeClass("fp-viewing-1");
            $("body").addClass("fp-viewing-2");
            $(".about-fullpage").css("transform",'translate3d(0px,-'+ height*2 +'px,0px)')
            $(".about-sec1").removeClass("active fp-completely");
            $(".about-sec2").addClass("active fp-completely"); 

        }else if($("body").hasClass("fp-viewing-2")){
            $("body").removeClass("fp-viewing-2");
            $("body").addClass("fp-viewing-3");
            $(".about-fullpage").css("transform",'translate3d(0px,-'+ height*3 +'px,0px)')
            $(".about-sec2").removeClass("active fp-completely");
            $(".about-sec3").addClass("active fp-completely"); 
        }
    });
};

var winHeight = $(window).height();

$(".scroll-btn").click(function(){
    var scrollY = $(window).scrollTop();
    $("html, body").animate({
        scrollTop:scrollY + winHeight
    },1000)
})