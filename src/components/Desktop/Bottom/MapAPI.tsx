import React from 'react';


const MapAPI = () => {
  return (
    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=269-63+Seongsu-dong+2(i)-ga,+Seongdong-gu,+Seoul&zoom=13&size=309x309&maptype=roadmap
    &markers=color:red%7C37.5406997,127.0573674&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
     alt=""/>
  );
};

export default MapAPI;
