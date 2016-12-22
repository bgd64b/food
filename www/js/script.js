/**
 * Created by bgd64 on 12/20/2016.
 */

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        console.log("Welcome again " + user);
    } else {
        user = "bogdan";
        if (user != "" && user != null) {
            setCookie("username", user, 30);
            document.getElementById('loader-container').innerHTML = "<div id='loader'><ul class='loader'><li class='center'></li><li class='item item-1'></li><li class='item item-2'></li><li class='item item-3'></li><li class='item item-4'></li><li class='item item-5'></li><li class='item item-6'></li><li class='item item-7'></li><li class='item item-8'></li></ul></div>";
            $("#loader").delay(1800).fadeOut();
        }
    }
}








$(document).ready(function() {

    $('#menu').click(function() {
        $('#main-container').toggleClass('menu-opened');
        $('#main-container').toggleClass('overlay');
    });


    $('#search-button').click(function() {
        $('#search').addClass('search-opened');
        $('#wrapper').addClass('overlay');
    });
    $('.search-close').click(function() {
        $('#search').removeClass('search-opened');
        $('#wrapper').removeClass('overlay');
    });


    $("#menu").click(function() {
        $("#top").toggleClass('top');
        $("#middle").toggleClass('middle');
        $("#bottom").toggleClass('bottom');
    });

});