var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

if(thisfilefullname == "sustainability.html"){
    $(window).scroll(function(){
        if($(document).scrollTop() != 0){
            $(".scrollarrow").css({opacity:0});
        }else if($(document).scrollTop() == 0){
            $(".scrollarrow").css({opacity:1});
        }
    })

    var $slideTab = $(".slide-tab button");
    var $slideWrap = $(".swiper-wrapper");
    var $slideItem = $(".swiper-wrapper .swiper-slide");

    $slideTab.click(function(){

        for(var i = 0 ; i < $slideTab.length; i++){
            $slideTab.eq(i).removeClass("active");
        }
        $(this).addClass("active");

        var idx = $slideTab.index(this);

        if(idx == 0){
            $slideWrap.css({
                'transform'  : 'translate3d(150px,0,0,)'
            });
            for(var i = 0;  i < $slideItem.length; i++){
                $slideItem.eq(i).removeClass("swiper-slide-prev");
                $slideItem.eq(i).removeClass("swiper-slide-active");
                $slideItem.eq(i).removeClass("swiper-slide-next");
            }
            $slideItem.eq(0).addClass("swiper-slide-active");
            $slideItem.eq(1).addClass("swiper-slide-next");
        }
        if(idx == 1){
            for(var i = 0;  i < $slideItem.length; i++){
                $slideItem.eq(i).removeClass("swiper-slide-prev");
                $slideItem.eq(i).removeClass("swiper-slide-active");
                $slideItem.eq(i).removeClass("swiper-slide-next");
            }
            $slideItem.eq(0).addClass("swiper-slide-prev");
            $slideItem.eq(1).addClass("swiper-slide-active");
            $slideItem.eq(2).addClass("swiper-slide-next");
        }
        if(idx == 2){
            for(var i = 0;  i < $slideItem.length; i++){
                $slideItem.eq(i).removeClass("swiper-slide-prev");
                $slideItem.eq(i).removeClass("swiper-slide-active");
                $slideItem.eq(i).removeClass("swiper-slide-next");
            }
            $slideItem.eq(1).addClass("swiper-slide-prev");
            $slideItem.eq(2).addClass("swiper-slide-active");
        }
    })
}