function menuLike(){
    var element = document.getElementById("menu-like");
    element.classList.toggle("showMenuLike");
}

function menuProfile(){
    var element = document.getElementById("menu-profile");
    element.classList.toggle("showMenuProfile");
}

var cw = $('.warp-v-p').width();
$('.warp-v-p').css({'height':cw+'px'});