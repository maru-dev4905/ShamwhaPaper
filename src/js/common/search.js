var $searchBtn = $(".search");
var $search = $(".search-box-wrap");
var $searchCloseBtn = $(".search-box-close");

$searchBtn.click(function(){
    $search.addClass("show");
})
$searchCloseBtn.click(function(){
    $search.removeClass("show");
})
