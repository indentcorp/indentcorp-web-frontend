import React from "react";

const MapAPI = () => {
  return (
    <img
      src={`https://maps.googleapis.com/maps/api/staticmap?center=37.5406997,127.0573674&zoom=14&size=309x309&maptype=roadmap
    &markers=color:red%7C37.5406997,127.0573674&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
      alt=""
    />
  );
};

export default MapAPI;
