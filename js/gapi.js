if ("geolocation" in navigator) {
    // console.log('위치정보 사용 가능');
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    // console.log('위치정보 사용 불가능');
}

function success(position) {
    const lat  = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log(latitude, longitude);
    // 위도와 경도를 사용해 작업 수행

    $.getJSON('https://www.openstreetmap.org/#map=18/${latitude}/${longitude}',
    function(data){
      var $country = data.country;

      $('.country').append($country);    
    });
  };

function error(error) {
    alert('위치 정보 불러오기 실패');
    // console.log(error.code);
  };