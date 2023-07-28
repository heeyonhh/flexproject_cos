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
        $(this).find('.mobiledepth2').stop().slideDown(200);
    });
    $('.mobilenav>li').mouseout(function(){
        $(this).find('.mobiledepth2').stop().slideUp(200);
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
let currentIndex = 0;
$(".mobanner>li").hide().first().show();

setInterval(function(){
    let nextIndex = (currentIndex+1) % 2; 

    $(".mobanner>li").eq(currentIndex).fadeOut(1200);
    $(".mobanner>li").eq(nextIndex).fadeIn(1200);

    currentIndex = nextIndex;
}, 3000);