import React, { useEffect } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

interface Props {
  width: number
  height: number
}

const MapAPI: React.FC = () => {
  useEffect(() => {
    // const script = document.createElement('script')
    // script.async = true
    // script.src =
    //   'https://dapi.kakao.com/v2/maps/sdk.js?appkey=6b5d5dbba0bbf3301e96a08a88f3d612&libraries=services&autoload=false'
    // document.head.appendChild(script)
    // let container = document.getElementById('map')
    // let options = {
    //   center: new window.kakao.maps.LatLng(37.5467145, 127.0451214),
    //   level: 3,
    // }
    // let map = new window.kakao.maps.Map(container, options)
    // let geocoder = new window.kakao.maps.services.Geocoder()

    // // var mapTypeControl = new window.kakao.maps.MapTypeControl();
    // // map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    // var zoomControl = new window.kakao.maps.ZoomControl()
    // map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)

    // geocoder.addressSearch('서울 성동구 성수동1가 656-439', function (result: any, status: any) {
    //   if (status === window.kakao.maps.services.Status.OK) {
    //     let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)

    //     let marker = new window.kakao.maps.Marker({
    //       map: map,
    //       position: coords,
    //     })
    //     let iwContent =
    //       '<div style="width:150px;text-align:center;padding:6px 0;"><a style="text-decoration:none;color:black;"href="https://map.kakao.com/link/to/인덴트코퍼레이션,37.5467145,127.0451214">인덴트코퍼레이션</a></div>'
    //     let infowindow = new window.kakao.maps.InfoWindow({
    //       content: iwContent,
    //     })
    //     infowindow.open(map, marker)
    //     map.setCenter(coords)
    //   }
    // })
  }, [])

  return (
    // <div className="MapAPI">
    //   <div id="map" style={{ width: '309px', height: '309px' }} />
    // </div>
    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=269-63+Seongsu-dong+2(i)-ga,+Seongdong-gu,+Seoul&zoom=8&size=309x309&maptype=roadmap
    &markers=color:red%7C37.5406997,127.0573674&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`} />
  )
}

export default MapAPI
