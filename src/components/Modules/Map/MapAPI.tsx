import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  width: string;
  height: string;
  styles?: React.CSSProperties | undefined;
}

const MapAPI: React.FC<Props> = ({ width, height, styles }) => {
  const styleObj: React.CSSProperties = {
    ...styles,
    height: height,
    width: width,
  };
  const latitude = 37.5407049;
  const longitude = 127.0595125;
  useEffect(() => {
    const script = document.createElement('script');
    script.type = "text/javascript"
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`
    document.head.appendChild(script);
    script.onload = () => {
      window?.kakao.maps.load(() => {
    let mapContainer = document.getElementById("map"),
      mapOption = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        draggable: false,
        level: 3,
      };
    let map = new window.kakao.maps.Map(mapContainer, mapOption);
    let zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    let markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    let iwContent =
        '<div style="padding:5px; padding-left:20px;">인덴트코퍼레이션</div>',
      iwPosition = new window.kakao.maps.LatLng(latitude, longitude);
    let infowindow = new window.kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });
    infowindow.open(map, marker);
  });
  }
    return () => script.remove()
  }, []);

  return (
    <div className="MapAPI">
      <div id="map" style={styleObj} />
    </div>
  );
};

export default MapAPI;
