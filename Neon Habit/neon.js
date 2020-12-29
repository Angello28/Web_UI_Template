//global document
$(document).ready(function(){

    $('.scroll').click(function () {
        $('body,html').animate({scrollTop: 695}, 1000);
    });

    $('.scroll2').click(function () {
        $('body,html').animate({scrollTop: 1390}, 1000);
    });

    $('.scroll3').click(function () {
        $('body,html').animate({scrollTop:0} , 1000);
        return false;
    });
});