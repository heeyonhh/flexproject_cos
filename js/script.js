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

//모바일 메뉴
$(function(){
    $('.mobilenav>li').mouseover(function(){
        $(this).find('.mobiledepth2').show();
    });
    $('.mobilenav>li').mouseout(function(){
        $(this).find('.mobiledepth2').hide();
    });

    // 메뉴 쇼 하이드
    $('.ham').click(function(){
        $('.mobilebg').show();
        $('.bi-x-lg').click(function(){
            $('.mobilebg').hide();
        });
    });
});

//모바일 섹션 슬라이드
setInterval(function(){
    $('.mobanner li:first-child')
    .fadeIn({marginLeft:'-768px'},3000)
    .next('li')
    .fadeOut({marginLeft:0},3000)
    .end()
    .appendTo('.mobanner');
},3000);