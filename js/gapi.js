if ("geolocation" in navigator) {
    // console.log('위치정보 사용 가능');
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    console.log('위치정보 사용 불가능');
}

function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
  
    // 위도와 경도를 사용해 작업 수행
  }

function error(error) {
    alert('위치 정보 불러오기 실패');
    console.log(error.code);
  };

function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
  
    mapLink.href = "";
    mapLink.textContent = "";
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `위도: ${latitude} °, 경도: ${longitude} °`;
    }
  
    function error() {
      status.textContent = "현재 위치를 가져올 수 없음";
    }
  
    if (!navigator.geolocation) {
      status.textContent = "브라우저가 위치 정보를 지원하지 않음";
    } else {
      status.textContent = "위치 파악 중…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  
  document.querySelector("#status").addEventListener(show, geoFindMe);