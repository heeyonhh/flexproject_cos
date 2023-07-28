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
$(function(){
    let currentIndex = 0; //현재 이미지
    $(".sliderWrap").append($(".slider").first().clone(true)); //첫번째 이미지를 복사해서 마지막에 추가

    setInterval(() => {
        currentIndex++;     //현재 이미지를 1씩 추가
        $(".sliderWrap").animate({marginLeft: -100 * currentIndex + "%"}, 600);   //이미지 애니메이션

        if(currentIndex == 2){  //마지막 이미지
            setTimeout(() => {
                $(".sliderWrap").animate({marginLeft: 0}, 0);   //애니메이션 정지
                currentIndex = 0;   //현재 이미지 초기화
            }, 700);
        }
    }, 3000);
});