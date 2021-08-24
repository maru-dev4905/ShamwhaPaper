var headerContent = $(".header-content");
var dropdown = $(".dropdown-menu");

headerContent.find(".gnb").hover(function(){
    if(headerContent.hasClass("default-header")){
        dropdown.addClass("show");
        headerContent.addClass("drop");

    }else if(headerContent.hasClass("visual-header")){
        dropdown.addClass("show");
        headerContent.addClass("drop");
    }else if(headerContent.hasClass("main-header")){
        dropdown.addClass("show");
        headerContent.addClass("drop");
    }
},function(){
    if(headerContent.hasClass("drop")){
        dropdown.removeClass("show");
        headerContent.removeClass("drop");
    }else if(headerContent.hasClass("visual-header")){
        dropdown.removeClass("show");
        headerContent.removeClass("drop");
    }else if(headerContent.hasClass("main-header")){
        dropdown.removeClass("show");
        headerContent.removeClass("drop");
    }
})

dropdown.hover(function(){
    if(headerContent.hasClass("default-header")){
        dropdown.addClass("show");
        headerContent.addClass("drop");
    }else if(headerContent.hasClass("visual-header")){
        dropdown.addClass("show");
        headerContent.addClass("drop");
    }else if(headerContent.hasClass("main-header")){
        dropdown.addClass("show");
        headerContent.addClass("drop");
    }
},function(){
    if(headerContent.hasClass("default-header")){
        dropdown.removeClass("show");
        headerContent.removeClass("drop");
    }else if(headerContent.hasClass("visual-header")){
        dropdown.removeClass("show");
        headerContent.removeClass("drop");
    }else if(headerContent.hasClass("main-header")){
        dropdown.removeClass("show");
        headerContent.removeClass("drop");
    }
})