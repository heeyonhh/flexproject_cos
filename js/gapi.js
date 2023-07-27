if ("geolocation" in navigator) {
  // console.log('위치정보 사용 가능');
  navigator.geolocation.getCurrentPosition(success, error);
} else {
    // console.log('위치정보 사용 불가능');
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  $.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=931cf418021445795381368f79037456&units=Metric`,
  function(data){
    var $country = data.sys.country;
    $('.country').append($country);
  })
}

function error() {
  alert('위치 정보 불러오기 실패');
};