var winY;
var winX;

var chocoboxCloseTopNumber;
var chocoboxCloseLeftNumber;

calc_winY();
calc_winX();

$(window).resize(function(){
    winY = calc_winY();
    winX = calc_winX();
})

function calc_winY(){
    winY = $(window).height();
    return winY;
}

function calc_winX(){
    winX = $(window).width();
    return winX;
}

var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

var controller = new ScrollMagic.Controller();

if(thisfilefullname == "index.html" || thisfilefullname == "index.html#" || thisfilefullname == ""){

    if(winX <= 1024){
        chocoboxCloseTopNumber = 17.6;
        chocoboxCloseLeftNumber = 11.8;
    }
    else if(winX <= 1240){
        chocoboxCloseTopNumber = 21.8;
        chocoboxCloseLeftNumber = 12.3;
    }
    else if(winX <= 1920){
        chocoboxCloseTopNumber = 13.3;
        chocoboxCloseLeftNumber = 11.8;
    }
    else if(winX <= 2133){
        chocoboxCloseTopNumber = 13.8;
        chocoboxCloseLeftNumber = 11.7;
    }
    else if(winX >= 2560){
        chocoboxCloseTopNumber = 13.7;
        chocoboxCloseLeftNumber = 11.6;
    }
    
    var makeup = gsap.timeline();
    makeup.to(".makeup-bg",{filter:"grayScale(0)"})
          .to(".makeup-dim",{backgroundColor:"rgba(255,255,255,0)"})
          .to(".makeup-intro",{opacity:"0"});

    var makeup2 = gsap.timeline();
    makeup2.to(".makeup",{backgroundColor:"#33048B"})
    
    var makeup3 = gsap.timeline();
    makeup3.to(".makeup-dim",{backgroundColor:"rgba(51,4,139,0.7)"})
           .to(".makeup-bg",{filter:"grayScale(100%)"})
           .to(".makeup",{backgroundColor:"transparent"})

    var circleboxLidClose = TweenMax.to(".circlebox-lid",1,{top:50+"%"})
    var circleboxMoveText = TweenMax.to(".circlebox-text",1,{duration: 1000 , ease: Linear.easeNone, left:"-120%"})
    var circleboxPaperClear = TweenMax.to(".circlebox-paper",1,{opacity:0})
    var circleboxOrange = TweenMax.to(".circlebox-orange",1,{opacity:1})
    var circleboxFillOrange = TweenMax.to(".circlebox-bg-orange",1,{bottom:0})
    var circleboxGreen = TweenMax.to(".circlebox-green",1,{opacity:1})
    var circleboxFillGreen = TweenMax.to(".circlebox-bg-green",1,{bottom:0})
    var rectboxFillGreen = TweenMax.to(".rectbox-bg-green",1,{bottom:0})
    var rectboxFillChoco = TweenMax.to(".rectbox-bg-choco",1,{bottom:0})
    var rectboxTextClear = TweenMax.to(".rectbox-text1",1,{opacity:0})
    var rectboxClose = TweenMax.to(".chocobox-close-drawer",1,{
        top: chocoboxCloseTopNumber + "vw",
        left: chocoboxCloseLeftNumber + "vw"
    });
    var rectboxTextClear2 = TweenMax.to(".rectbox-text2",1,{opacity:0});
    var rectboxClear = TweenMax.to(".box",1,{opacity:0});
    var embossingShow = TweenMax.to(".embossing",1,{opacity:1});
    var embossingTextScale = TweenMax.to(".embossing-img-bg",1,{
        transform:"scale(200)",
        top:"-100%",
        left:"-200%"
    })
    var embossingTextClear = TweenMax.to(".embossing-img p",1,{opacity:0})
    var embossingTextScaleClear = TweenMax.to(".embossing-img-bg",1,{opacity:0})
    var embossingboxshow1 = TweenMax.to(".embossing-box2",1,{bottom:0})
    var embossingboxshow2 = TweenMax.to(".embossing-box3",1,{bottom:0})
    var embossingboxshow3 = TweenMax.to(".embossing-box4",1,{bottom:0})
    var embossingboxshow4 = TweenMax.to(".embossing-box5",1,{bottom:0})
    var embossingboxTextClear = TweenMax.to(".embossing-text",1,{opacity:0})

    var agent = navigator.userAgent.toLowerCase();
    var iey;
    var iet;
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
        iey = "-50%"
        iet = "50%"
    }else{
        iey = "-47%"
        iet = "50.5%"
    }
    let rendezvousZoomText = TweenMax.to(".rendezvous-img img",1,{
        top:iet,
        left:"-0.1%",
        backgroundColor:"#fff",
        transform:"scale(1)",
        y:iey
    })

    var rendezvousBgScale = TweenMax.to(".rendezvous-bg",1,{
        transform:"scale(1.5)",
        filter:"blur(5px)"
    })
    var rendezvousTextClear1 = TweenMax.to(".rendezvous-text h3",1,{color:"rgba(255,255,255,0)"})
    var rendezvousTextClear2 = TweenMax.to(".rendezvous-text p",1,{color:"rgba(255,255,255,0)"})
    var rendezvousCoverShow = TweenMax.to(".rendezvous-cover-box",{top:"52.5%"})
    
    var endingShow = TweenMax.to(".ending",1,{bottom:0});
    
    var leftText1 = gsap.to(".left p", {
        duration: 2,
        text: {
            value:"TRULY YOURS"
        }
    });
    
    var leftText2 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "bespoke soluton"
        }
    });
    
    var leftText3 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "bespoke color"
        }
    });
    
    var leftText4 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "samwha paper"
        }
    });
    
    var leftText5 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "perfect embossing"
        }
    });
    
    var leftText6 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "leathack"
        }
    });
    
    var leftText7 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "tant"
        }
    });
    
    var leftText8 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "dimple"
        }
    });
    
    var leftText9 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "mermaid"
        }
    });
    
    var leftText10 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "rendezvous"
        }
    });
    
    var leftText11 = gsap.to(".left p", {
        duration: 5,
        text: {
            value: "bespoke solution"
        }
    });
    
    var leftTextChange1 = new ScrollMagic.Scene({
        triggerElement : "#trigger1",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange1"}) 
    .setTween(leftText1)
    .addTo(controller)
    
    var leftTextChange2 = new ScrollMagic.Scene({
        triggerElement : "#trigger2",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange2"})
    .setTween(leftText2)
    .addTo(controller)
    
    var leftTextChange3 = new ScrollMagic.Scene({
        triggerElement : "#trigger6",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange3"})
    .setTween(leftText3)
    .addTo(controller)
    
    var leftTextChange4 = new ScrollMagic.Scene({
        triggerElement : "#trigger13",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange4"})
    .setTween(leftText4)
    .addTo(controller)
    
    var leftTextChange5 = new ScrollMagic.Scene({
        triggerElement : "#trigger15",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange5"})
    .setTween(leftText5)
    .addTo(controller)
    
    var leftTextChange6 = new ScrollMagic.Scene({
        triggerElement : "#trigger17",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange6"})
    .setTween(leftText6)
    .addTo(controller)
    
    var leftTextChange7 = new ScrollMagic.Scene({
        triggerElement : "#trigger18",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange7"})
    .setTween(leftText7)
    .addTo(controller)
    
    var leftTextChange8 = new ScrollMagic.Scene({
        triggerElement : "#trigger19",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange8"})
    .setTween(leftText8)
    .addTo(controller)
    
    var leftTextChange9 = new ScrollMagic.Scene({
        triggerElement : "#trigger20",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange9"})
    .setTween(leftText9)
    .addTo(controller)
    
    var leftTextChange10 = new ScrollMagic.Scene({
        triggerElement : "#trigger22",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange10"})
    .setTween(leftText10)
    .addTo(controller)
    
    var leftTextChange11 = new ScrollMagic.Scene({
        triggerElement : "#trigger26",
        duration:"10%"
    })
    // .addIndicators({name:"leftTextChange11"})
    .setTween(leftText11)
    .addTo(controller)
    
    
    var scene = new ScrollMagic.Scene({
        triggerElement : "#trigger1", 
        duration : "200%"
    })
    .setPin("#pin1")
    .addTo(controller)
    
    var scene2 = new ScrollMagic.Scene({
        triggerElement : "#trigger1",
        duration : "200%"
    })
    .setPin("#pin2")
    .addTo(controller)
    
    var scene3 = new ScrollMagic.Scene({
        triggerElement : "#trigger1",
        duration : "200%"
    })
    .setPin("#pin3")
    .addTo(controller)
    
    var scene4 = new ScrollMagic.Scene({
        triggerElement : "#trigger1",
        duration : "200%"
    })
    .setPin("#pin4")
    // .addIndicators({name: "ShopingBag (duration:500"})
    .addTo(controller)
    
    
    var scene5 = new ScrollMagic.Scene({
        triggerElement : "#trigger1",
        duration : "200%"
    })
    .setPin("#pin5")
    .addTo(controller)
    
    var scene6 = new ScrollMagic.Scene({
        triggerElement : "#trigger1",
        duration : "200%"
    })
    .setPin("#pin6")
    .addTo(controller)

    var scene7 = new ScrollMagic.Scene({
        triggerElement : "#triggerFade",
        duration : "100%"
    })
    .setPin("#pin7")
    .addTo(controller)
    
    var makeupPin = new ScrollMagic.Scene({
        triggerElement : "#trigger2",
        duration : "250%"
    })
    // .addIndicators({name: "makeupPin (duration:350%)"})
    .setPin("#makeup-pin")
    .addTo(controller)

    var scene8 = new ScrollMagic.Scene({
        triggerElement : "#trigger3",
        duration : "50%"
    })
    // .addIndicators({name: "filterClear (duration:100%)"})
    .setTween(makeup)
    .addTo(controller)

    var scene9 = new ScrollMagic.Scene({
        triggerElement : "#trigger4",
        duration : "50%"
    })
    .setTween(makeup2)
    .addTo(controller)
    
    var scene10 = new ScrollMagic.Scene({
        triggerElement : "#trigger5",
        duration : "50%"
    })
    .setTween(makeup3)
    .addTo(controller)
    
    var scene16 = new ScrollMagic.Scene({
        triggerElement : "#trigger6",
        duration : "200%"
    })
    // .addIndicators({name: "circleboxLidClose (duration:50%)"})
    .setTween(circleboxLidClose)
    .addTo(controller)
    
    var scene17 = new ScrollMagic.Scene({
        triggerElement : "#trigger6",
        duration : "200%"
    })
    // .addIndicators({name: "circleboxMoveText (duration:50%)"})
    .setTween(circleboxMoveText)
    .addTo(controller)
    
    var scene18 = new ScrollMagic.Scene({
        triggerElement : "#trigger7",
        duration : "15%"
    })
    // .addIndicators({name: "circleboxPaperClear (duration:15%)"})
    .setTween(circleboxPaperClear)
    .addTo(controller)
    
    var scene19 = new ScrollMagic.Scene({
        triggerElement : "#trigger8",
        duration : "100%"
    })
    // .addIndicators({name: "circleboxOrange (duration:100%)"})
    .setTween(circleboxOrange)
    .addTo(controller)
    
    var scene20 = new ScrollMagic.Scene({
        triggerElement : "#trigger8",
        duration : "100%"
    })
    // .addIndicators({name: "circleboxFillOrange (duration:100%)"})
    .setTween(circleboxFillOrange)
    .addTo(controller)
    
    var scene21 = new ScrollMagic.Scene({
        triggerElement : "#trigger9",
        duration : "100%"
    })
    // .addIndicators({name: "circleboxGreen (duration:100%)"})
    .setTween(circleboxGreen)
    .addTo(controller)
    
    var scene22 = new ScrollMagic.Scene({
        triggerElement : "#trigger9",
        duration : "100%"
    })
    // .addIndicators({name: "circleboxFillGreen (duration:100%)"})
    .setTween(circleboxFillGreen)
    .addTo(controller)
    
    var scene23 = new ScrollMagic.Scene({
        triggerElement : "#trigger10",
        duration : "100%"
    })
    // .addIndicators({name: "rectboxFillGreen (duration:100%)"})
    .setTween(rectboxFillGreen)
    .addTo(controller)
    
    var scene24 = new ScrollMagic.Scene({
        triggerElement : "#trigger12",
        duration : "100%"
    })
    // .addIndicators({name: "rectboxFillChoco (duration:100%)"})
    .setTween(rectboxFillChoco)
    .addTo(controller)
    
    var scene25 = new ScrollMagic.Scene({
        triggerElement : "#trigger12",
        duration : "100%"
    })
    // .addIndicators({name: "rectboxTextClear (duration:100%)"})
    .setTween(rectboxTextClear)
    .addTo(controller)
    
    var scene26 = new ScrollMagic.Scene({
        triggerElement : "#trigger13",
        duration : "100%"
    })
    // .addIndicators({name: "rectboxClose (duration:100%)"})
    .setTween(rectboxClose)
    .addTo(controller)
    
    var scene27 = new ScrollMagic.Scene({
        triggerElement : "#trigger14",
        duration : "100%"
    })
    // .addIndicators({name: "rectboxTextClear2 (duration:100%)"})
    .setTween(rectboxTextClear2)
    .addTo(controller)
    
    var scene28 = new ScrollMagic.Scene({
        triggerElement : "#trigger14",
        duration : "100%"
    })
    // .addIndicators({name: "rectboxClear (duration:100%)"})
    .setTween(rectboxClear)
    .addTo(controller)
    
    var scene29 = new ScrollMagic.Scene({
        triggerElement : "#trigger14",
        duration : "100%"
    })
    // .addIndicators({name: "embossingShow (duration:100%)"})
    .setTween(embossingShow)
    .addTo(controller)
    
    var scene30 = new ScrollMagic.Scene({
        triggerElement : "#trigger15",
        duration : "200%"
    })
    // .addIndicators({name: "embossingTextScale (duration:200%)"})
    .setTween(embossingTextScale)
    .addTo(controller)
    
    var scene31 = new ScrollMagic.Scene({
        triggerElement : "#trigger15",
        duration : "10%"
    })
    // .addIndicators({name: "embossingTextClear (duration:10%)"})
    .setTween(embossingTextClear)
    .addTo(controller)
    
    var scene32 = new ScrollMagic.Scene({
        triggerElement : "#trigger16",
        duration : "1%"
    })
    // .addIndicators({name: "embossingTextScaleClear (duration:1%)"})
    .setTween(embossingTextScaleClear)
    .addTo(controller)
    
    var scene33 = new ScrollMagic.Scene({
        triggerElement : "#trigger17",
        duration : "100%"
    })
    // .addIndicators({name: "embossingboxshow1 (duration:100%)"})
    .setTween(embossingboxshow1)
    .addTo(controller)
    
    var scene34 = new ScrollMagic.Scene({
        triggerElement : "#trigger18",
        duration : "100%"
    })
    // .addIndicators({name: "embossingboxshow2 (duration:100%)"})
    .setTween(embossingboxshow2)
    .addTo(controller)
    
    var scene35 = new ScrollMagic.Scene({
        triggerElement : "#trigger19",
        duration : "100%"
    })
    // .addIndicators({name: "embossingboxshow3 (duration:100%)"})
    .setTween(embossingboxshow3)
    .addTo(controller)
    
    var scene36 = new ScrollMagic.Scene({
        triggerElement : "#trigger20",
        duration : "100%"
    })
    // .addIndicators({name: "embossingboxshow4 (duration:100%)"})
    .setTween(embossingboxshow4)
    .addTo(controller)
    
    var scene37 = new ScrollMagic.Scene({
        triggerElement : "#trigger21",
        duration : "25%"
    })
    // .addIndicators({name: "embossingboxTextClear (duration:25%)"})
    .setTween(embossingboxTextClear)
    .addTo(controller)
    
    var scene38 = new ScrollMagic.Scene({
        triggerElement : "#trigger22",
        duration : "200%"
    })
    // .addIndicators({name: "rendezvousZoomText (duration:200%)"})
    .setTween(rendezvousZoomText)
    .addTo(controller)
    
    var scene39 = new ScrollMagic.Scene({
        triggerElement : "#trigger23",
        duration : "50%"
    })
    // .addIndicators({name: "rendezvousBgScale (duration:50%)"})
    .setTween(rendezvousBgScale)
    .addTo(controller)
    
    var scene40 = new ScrollMagic.Scene({
        triggerElement : "#trigger24",
        duration : "50%"
    })
    // .addIndicators({name: "rendezvousTextClear1 (duration:50%)"})
    .setTween(rendezvousTextClear1)
    .addTo(controller)
    
    var scene41 = new ScrollMagic.Scene({
        triggerElement : "#trigger24",
        duration : "50%"
    })
    // .addIndicators({name: "rendezvousTextClear2 (duration:50%)"})
    .setTween(rendezvousTextClear2)
    .addTo(controller)
    
    var scene42 = new ScrollMagic.Scene({
        triggerElement : "#trigger25",
        duration : "100%"
    })
    // .addIndicators({name: "rendezvousCoverShow (duration:100%)"})
    .setTween(rendezvousCoverShow)
    .addTo(controller)
    
    var scene43 = new ScrollMagic.Scene({
        triggerElement : "#trigger26",
        duration : "100%"
    })
    // .addIndicators({name: "endingShow (duration:100%)"})
    .setPin(".ending-content")
    // .setTween(endingShow)
    .addTo(controller)
}
var timeout;