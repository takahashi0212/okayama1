let map;
let food0 = document.getElementById('food0');
let food1 = document.getElementById('food1');
let food2 = document.getElementById('food2');
let food3 = document.getElementById('food3');
let food4 = document.getElementById('food4');
let food5 = document.getElementById('food5');
let food6 = document.getElementById('food6');
let currentInfoWindow = null;
const marker = [];
const infoWindow = [];
const markerData = [ // マーカーを立てる場所名・緯度・経度
 {
      name: '<a href="http://www.croissance.jp/">クロワサンス</a>',
      lat: 34.660559,
      lng: 133.919978
 }, {
      name: '<a href="https://www.marubu.com/">倉敷うどん<br>「ぶっかけ」ふるいち</a>',
      lat: 34.601209,
      lng: 133.767403
 }, {
      name: '<a href="https://www.kurashiki-sh.co.jp/shirakabe/">瀬戸内海鮮料理 白壁</a>',
      lat: 34.60024,
      lng: 133.76750
 }, {
      name: '<a href="https://kuikiri-happou.jp/">喰切料理 八方</a>',
      lat: 34.66945,
      lng: 133.92863
 }, {
      name: '<a href="https://tabelog.com/okayama/A3301/A330101/33001952/">鮨 縁</a>',
      lat: 34.66429,
      lng: 133.92408
 }, {
      name: '<a href="https://il-grano.jp/lionni/">レオーニ</a>',
      lat: 34.67705,
      lng: 133.91983
 }, {
      name: '<a href="https://tabelog.com/okayama/A3301/A330101/33016638/">二代目 麺処くるり</a>',
      lat: 34.68109,
      lng: 133.90881
 }
];
  
function initMap() {
  // 'use strict';
 // 地図の作成
 const mapOkayama = new google.maps.LatLng({lat: 34.64264, lng: 133.85290}); // 緯度経度のデータ作成
   map = new google.maps.Map(document.getElementById('map'), { // #sampleに地図を埋め込む
     center: mapOkayama, // 地図の中心を指定
      zoom: 13 // 地図のズームを指定
   });
  
 // マーカー毎の処理
 for (let i = 0; i < markerData.length; i++) {
        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({ // マーカーの追加
         position: markerLatLng, // マーカーを立てる位置を指定
            map: map // マーカーを立てる地図を指定
       });
       
     infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
         content: '<div class="map">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
       });

       markerEvent(i); // マーカーにクリックイベントを追加
 }
}

  
// マーカーにクリックイベントを追加
function markerEvent(i) {
  marker[i].addListener('click', function() { // マーカーをクリックしたとき
    if (currentInfoWindow != null){
			currentInfoWindow.close();
		}
		
    infoWindow[i].open(map, marker[i]); // 吹き出しの表示
    currentInfoWindow = infoWindow[i];
  });





  food0.addEventListener('click', () => {
    if (currentInfoWindow != null){
			currentInfoWindow.close();
    }
    infoWindow[0].open(map, marker[0]);
    currentInfoWindow = infoWindow[i];
  });

  food1.addEventListener('click', () => {
    if (currentInfoWindow != null){
			currentInfoWindow.close();
    }
    infoWindow[1].open(map, marker[1]);
    currentInfoWindow = infoWindow[i];
  });

  food2.addEventListener('click', () => {
    if (currentInfoWindow != null){
			currentInfoWindow.close();
    }
    infoWindow[2].open(map, marker[2]);
    currentInfoWindow = infoWindow[i];
  });

  food3.addEventListener('click', () => {
    if (currentInfoWindow != null){
			currentInfoWindow.close();
    }
    infoWindow[3].open(map, marker[3]);
    currentInfoWindow = infoWindow[i];
  });

  food4.addEventListener('click', () => {
    if (currentInfoWindow != null){
			currentInfoWindow.close();
    }
    infoWindow[4].open(map, marker[4]);
    currentInfoWindow = infoWindow[i];
  });

  food5.addEventListener('click', () => {
    if (currentInfoWindow != null){
			currentInfoWindow.close();
    }
    infoWindow[5].open(map, marker[5]);
    currentInfoWindow = infoWindow[i];
  });
  food6.addEventListener('click', () => {
    if (currentInfoWindow != null){
			currentInfoWindow.close();
    }
    infoWindow[6].open(map, marker[6]);
    currentInfoWindow = infoWindow[i];
  });
}


