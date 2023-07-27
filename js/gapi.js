// if ("geolocation" in navigator) {
//     // console.log('위치정보 사용 가능');
//     navigator.geolocation.getCurrentPosition(success, error);
// } else {
//     // console.log('위치정보 사용 불가능');
// }

// function success(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     // console.log(latitude, longitude);
//     // 위도와 경도를 사용해 작업 수행

//     $.getJSON('https://www.openstreetmap.org/#map=18/${lat}/${lon}',
//     function(data){
//       var $country = data.country;

//       $('.country').append($country);    
//     });
//   };

function error(error) {
    alert('위치 정보 불러오기 실패');
    // console.log(error.code);
  };

  
$(function(){

  // const lat = position.coords.latitude;
  // const lon = position.coords.longitude;
  $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat=37.1294&lon=126.9325&appid=931cf418021445795381368f79037456&units=Metric', function(data){
  
      var $country = data.sys.country; //도시이름

      $('.country').append($country);
  })
  
});