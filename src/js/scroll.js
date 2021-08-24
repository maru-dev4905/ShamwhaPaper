var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

if(thisfilefullname == "index.html" || thisfilefullname == "index.html#" || thisfilefullname == ""){
    
    var trigger2 = $("#trigger2");

    var $bagRedText = $(".bag_red .text");
    var $bagRed = $(".bag_red");
    var $bagRedWinY = $bagRed.offset().top;
    var $bagFadeText = $(".bag_fade");
    var $makeup = $(".makeup");
    var $makeupWinY = $makeup.offset().top;
    var $makeupText = $(".makeup .makeup-intro");
    var $circlebox = $(".circlebox");
    var $circleboxWinY = $circlebox.offset().top;
    var $rectBox = $(".rectbox .rectbox-bg-green");
    var $rectBoxText = $(".rectbox .rectbox-bg-green .rectbox-text1");
    var $box = $(".box");
    var $boxWinY = $box.offset().top;
    var $rectBoxText2 = $(".rectbox .rectbox-bg-choco .rectbox-text2");
    var $boxDrawer = $(".chocobox-close-drawer");
    
    var $embossing = $(".embossing");
    var $embossingImg = $(".embossing-img-bg");
    var $embossingText = $(".embossing-text");
    var $embossingBox2 = $(".embossing-box2");
    var $embossingBox3 = $(".embossing-box3");
    var $embossingBox4 = $(".embossing-box4");
    var $embossingBox5 = $(".embossing-box5");
    
    var $rendezvousImg = $(".rendezvous-img img");
    var $rendezvousText = $(".rendezvous-text");
    
    var $scrollBtn = $(".scroll-btn");
    
    var $ending = $(".ending");
    
    var $body = $("body");
    
    var $pager = $(".right li"); 
    
    var scrollY;
    
    var winH = $(window).height();
    
    var $scrollUpBtn = $(".scroll-up-btn");

    $scrollUpBtn.click(function(){
        $("html, body").animate({
            scrollTop:0
        },3000)
    })

    $scrollBtn.click(function(){
        scrollY = $(window).scrollTop();
        $("html, body").animate({scrollTop:winH + scrollY},1000)
    })
    
    $(window).scroll(function(){
    
        var $embossingShowCheck = $embossing.css("opacity");
        var $boxDrawerCloseCheck = $boxDrawer.css("left");
        var $embossomgImgClearCheck = $embossingImg.css("opacity");
        var $embossingBox2ShowCheck = $embossingBox2.css("bottom");
        var $embossingBox3ShowCheck = $embossingBox3.css("bottom");
        var $embossingBox4ShowCheck = $embossingBox4.css("bottom");
        var $embossingBox5ShowCheck = $embossingBox5.css("bottom");
    
        var $rendezvousTextCheck = $rendezvousText.hasClass("show");
        var $rendezvousImgCheck = $rendezvousImg.css("background-color");
    
        var $endingShowCheck = $ending.css("bottom");
        $endingShowCheck = $endingShowCheck.split("px")[0];
    
        scrollY = $(window).scrollTop();
        
        if(scrollY >= $bagRedWinY){
            $bagRed.find(".text").addClass("hide");
            $bagRed.find(".text").removeClass("show");
            $bagFadeText.addClass("show");
            $bagFadeText.removeClass("hide");
            $body.addClass("white");
            $(".bottom").css("opacity","0");
            
        }else if(scrollY < $bagRedWinY){
            $bagRed.find(".text").removeClass("hide");
            $bagRed.find(".text").addClass("show");
            $bagFadeText.removeClass("show");
            $bagFadeText.addClass("hide");
            $body.removeClass("white");
            $(".bottom").css("opacity","1");
        }

        if(scrollY >= $(".makeup").offset().top){
            $(".makeup").addClass("show");
        }else if(scrollY  < $(".makeup").offset().top){
            $(".makeup").removeClass("show");
        }

        if(scrollY >= $circleboxWinY){
            $circlebox.addClass("show");
            $circlebox.removeClass("hide");
    
        }else if(scrollY < $circleboxWinY){
            if($circlebox.hasClass("show")){
                $circlebox.addClass("hide");
                $circlebox.removeClass("show");
            }
        }
    
        if($rectBox.css("bottom") == "0px"){
            $rectBoxText.addClass("show");
            $rectBoxText.removeClass("hide");
        
        }else{
            $rectBoxText.addClass("hide");
            $rectBoxText.removeClass("show");
        }
    
        if($boxDrawerCloseCheck == "222.72px"){
            $rectBoxText2.addClass("show");
            $rectBoxText2.removeClass("hide");
        }else{
            $rectBoxText2.addClass("hide");
            $rectBoxText2.removeClass("show");
        }
    
        if($(window).scrollTop() >= $(".embossing").offset().top){
            $embossingText.eq(0).addClass("show");
            $embossingText.eq(0).removeClass("hide");
        }else{
            $embossingText.eq(0).addClass("hide");
            $embossingText.eq(0).removeClass("show");
        }
    
        if($embossingBox2ShowCheck == "0px"){
            $embossingText.eq(1).addClass("show");
            $embossingText.eq(1).removeClass("hide");
        }else{
            $embossingText.eq(1).addClass("hide");
            $embossingText.eq(1).removeClass("show");
        }
    
        if($embossingBox3ShowCheck == "0px"){
            $embossingText.eq(2).addClass("show");
            $embossingText.eq(2).removeClass("hide");
        }else{
            $embossingText.eq(2).addClass("hide");
            $embossingText.eq(2).removeClass("show");
        }
    
        if($embossingBox4ShowCheck == "0px"){
            $embossingText.eq(3).addClass("show");
            $embossingText.eq(3).removeClass("hide");
        }else{
            $embossingText.eq(3).addClass("hide");
            $embossingText.eq(3).removeClass("show");
        }
    
        if($embossingBox5ShowCheck == "0px"){
            $embossingText.eq(4).addClass("show");
            $embossingText.eq(4).removeClass("hide");
        }else{
            $embossingText.eq(4).addClass("hide");
            $embossingText.eq(4).removeClass("show");
        }
        if($rendezvousImgCheck == "rgb(255, 255, 255)"){
            $rendezvousText.addClass("show");
            $rendezvousText.removeClass("hide");
        }else{
            $rendezvousText.addClass("hide");
            $rendezvousText.removeClass("show");
        }

        if($(".bottom").css("opacity") == 1 || scrollY == 0){
            $makeupText.addClass("show");
            $makeupText.removeClass("hide");
            
            for(var i = 0; i < $pager.length; i++){
                $pager.removeClass("active");
            }
            $pager.eq(0).addClass("active");
        }

        if(scrollY >= $(".makeup").offset().top){
            $makeupText.addClass("show");
            $makeupText.removeClass("hide");
            
            for(var i = 0; i < $pager.length; i++){
                $pager.removeClass("active");
            }
            $pager.eq(1).addClass("active");
        }
        
        if($(".circlebox").hasClass("show")){
            for(var i = 0; i < $pager.length; i++){
                $pager.removeClass("active");
            }
            $pager.eq(2).addClass("active");
        }
        
        if($embossingShowCheck == "1"){
            for(var i = 0; i < $pager.length; i++){
                $pager.removeClass("active");
            }
            $pager.eq(3).addClass("active");
        }
    
        if($(".rendezvous-text").hasClass("show")){
            for(var i = 0; i < $pager.length; i++){
                $pager.removeClass("active");
            }
            $pager.eq(4).addClass("active");
        }

        if(scrollY >= $(".ending").offset().top){
            for(var i = 0; i < $pager.length; i++){
                $pager.removeClass("active");
            }
            $pager.eq(5).addClass("active");
        }
    })
}