import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapAPI: React.FC = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(37.5467145, 127.0451214),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    let geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch('서울 성동구 성수동1가 656-439', function (
      result: any,
      status: any
    ) {
      if (status === window.kakao.maps.services.Status.OK) {
        let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        let marker = new window.kakao.maps.Marker({
          map: map,
          position: coords,
        });
        let infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:6px 0;">인덴트코퍼레이션</div>',
        });
        infowindow.open(map, marker);
        map.setCenter(coords);
      }
    });
  }, []);

  return (
    <div className='MapAPI'>
      <div id='map' style={{ width: '223px', height: '223px' }} />
    </div>
  );
};

export default MapAPI;
