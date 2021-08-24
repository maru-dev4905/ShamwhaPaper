var $hambugerBtn = $(".hambuger-btn");
var $menu = $(".hambuger-menu");
var $body = $("body");

$hambugerBtn.click(function(){

    if($(this).hasClass("close")){

        if($(".header-content").hasClass("header-white")){
            if($(".header-content").hasClass("product")){
                if($(window).scrollTop() >= $(window).height()){
                    $(".header-content").addClass("header-white-down");
                    $("header").css("height","222px");
                }
            }
        }

        $(this).removeClass("close");
        $(this).addClass("open");
        $body.removeClass("menu-white");
        $menu.removeClass("show");
        
    }else{
        if($(".header-content").hasClass("header-white-down")){
            $(".header-content").removeClass("header-white-down");
        }
        $(this).addClass("close");
        $menu.addClass("show");
        $body.addClass("menu-white");
    }
})