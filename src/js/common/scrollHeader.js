var header = $("header");
var headerContent = $(".header-content");
var dropdown = $(".dropdown-menu");

var scrollY;

$(window).on("scroll",function(){
    scrollY = $(window).scrollTop();
    if(headerContent.hasClass("product")){
        if(scrollY > $(window).height()){
            headerContent.addClass("scroll");
        }else if(scrollY < $(window).height()){
            headerContent.removeClass("scroll");
        }
    }else if(headerContent.hasClass("default-header")){
        if(scrollY == 0){
            headerContent.removeClass("scroll");
        }else{
            headerContent.addClass("scroll");
        }
    }
})