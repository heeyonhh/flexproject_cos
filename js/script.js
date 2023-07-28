// pc 메뉴 배경화면 효과
$(function(){
    $('.nav>ul>li').mouseover(function(){
        $(this).find('.depth2').addClass('active');
        $('.menueffect').addClass('active');
    });
    $('.nav>ul>li').mouseout(function(){
        $(this).find('.depth2').removeClass('active');
        $('.menueffect').removeClass('active');
    });
});