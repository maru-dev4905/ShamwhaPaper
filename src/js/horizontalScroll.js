var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

var $rendezvousBtn = $(".rendezvous-btn");
var $rendezvousCloseBtn = $(".rendezvous-close-btn");
var $wrap = $("#wrap");
var $rendezvous = $(".rendezvous-content");

var winX = $(window).width();
var whiteBagLeft;

if(winX >= 2560){
    whiteBagLeft = 40;
}else if(winX <= 1920){
    whiteBagLeft = 38.5;
}else if(winX <= 1600){
    whiteBagLeft = 36.5;
}

var trigger = $("#trigger25");

$rendezvousBtn.click(function(){
    $rendezvous.addClass("show");
    $rendezvous.removeClass("hide");
    $rendezvousCloseBtn.css({right:"40px"});
    $rendezvous.find("ul").css({transform:"translate3d(0,0,0)"});

    $(".fix").not(".hambuger-menu, .bag .white-bag, .bag .red-bag").addClass("hide");
    $("header").css({
        transition:"1.5s",
        transform:"translateX(-100%)"
    })
    $(".rendezvous-cover-box").addClass("hide")
    $(".rendezvous-cover-box").removeClass("show")
    $(".rendezvous .rendezvous-text").css({
        left:"-100%",
    })


})

$rendezvousCloseBtn.click(function(){
    $rendezvous.addClass("hide");
    $rendezvous.removeClass("show");
    $rendezvousCloseBtn.css({right:"-40%"});
    $(".fix").not(".hambuger-menu").removeClass("hide");
    $(".rendezvous-cover-box").removeClass("hide")
    $(".rendezvous-cover-box").addClass("show")

    if($(window).width() > 1920){
        $("html,body").animate({
            scrollTop: trigger.offset().top + $(window).height() / 4 + 500
        },0)
    }
    else if($(window).width() <= 1920){
        $("html,body").animate({
            scrollTop: trigger.offset().top + $(window).height()
        },0)
    }

    $("header").css({
        transition:"1.5s",
        transform:"translateX(0)"
    })

    $(".rendezvous .rendezvous-text").css({
        left:"0"
    })
})