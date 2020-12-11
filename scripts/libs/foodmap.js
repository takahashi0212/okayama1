let map;
let foodkkk = document.getElementById('foodkkk');
let foodkkkk = document.getElementById('foodkkkk');
let currentInfoWindow = null;
const marker = [];
const infoWindow = [];
const markerData = [ // マーカーを立てる場所名・緯度・経度
 {
      name: 'クロワサンス',
      lat: 34.660559,
      lng: 133.919978
 }, {
      name: 'ふるいち 本店',
      lat: 34.601209,
      lng: 133.767403
 }
];
  
function initMap() {
  // 'use strict';
 // 地図の作成
 const mapOkayama = new google.maps.LatLng({lat: 34.66707, lng: 133.91769}); // 緯度経度のデータ作成
   map = new google.maps.Map(document.getElementById('map'), { // #sampleに地図を埋め込む
     center: mapOkayama, // 地図の中心を指定
      zoom: 10 // 地図のズームを指定
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

  foodkkk.addEventListener('click', () => {
    infoWindow[0].open(map, marker[0]);
    console.log('クリック');
  });
  foodkkkk.addEventListener('click', () => {
    infoWindow[1].open(map, marker[1]);
    console.log('クリック');
  });
}


