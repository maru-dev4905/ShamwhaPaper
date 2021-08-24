var agent = navigator.userAgent.toLowerCase();
var name = navigator.appName;
var browser;

if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1){
    
    $("[class*=about-sec] .about-text h2 span").not(".about-fix").css({
        "margin-bottom":'-13px'
    })
    
}else if(agent.indexOf('safari') > -1){

    if(agent.indexOf('opr') > -1){
    
    }else if(agent.indexOf('chrome') > -1){
    
    }else if(agent.indexOf('naver') > -1){

    }
    else{
        browser = 'safari';

    }
}

var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));

if (mobile) { 
  //모바일 처리
  var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

  if ( varUA.indexOf('android') > -1) {
      //안드로이드
  } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
      //IOS
  } else {
      //아이폰, 안드로이드 외
  }
}else{
  //비 모바일 처리
}