Kakao.init('767a22495c7396d75b6be80f52a05963'); //javascript키
// console.log(Kakao.isInitialized()); // sdk초기화 여부 판단
// 카카오 로그인
function kakaoLogin() {
    Kakao.Auth.login({
        success: function (response) {
            Kakao.API.request({
                url: '/v2/user/me',
                success: function (response) {
                    console.log(response)
                    window.location.href = 'index.html';
                },
                fail: function (error) {
                    console.log(error)
                },
            })
        },
        fail: function (error) {
            console.log(error)
        },
    })
}
// 카카오 로그아웃  
function kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
            url: '/v1/user/unlink',
            success: function (response) {
                console.log(response)
            },
            fail: function (error) {
                console.log(error)
            },
        })
        Kakao.Auth.setAccessToken(undefined)
    }
} 

// 카카오 로그인 상태 확인
function checkKakaoLoginStatus() {
    Kakao.Auth.getStatusInfo(function (statusObj) {
        if (statusObj.status === 'connected') {
            // 로그인된 상태
            const isLoggedIn = true;
            updateLoginText(isLoggedIn);
        } else {
            // 로그인되지 않은 상태
            const isLoggedIn = false;
            updateLoginText(isLoggedIn);
        }
    });
}

// 로그인 상태에 따라 텍스트 변경
function updateLoginText(isLoggedIn) {
    const loginLink = document.getElementById('loginLink');

    if (isLoggedIn) {
        loginLink.textContent = 'OOO'; // 로그인된 상태일 때 텍스트 변경
    } else {
        loginLink.textContent = '로그인'; // 로그인되지 않은 상태일 때 텍스트 변경
    }
}

// 페이지 로드시 카카오 로그인 상태 확인
window.onload = function() {
    checkKakaoLoginStatus();
};