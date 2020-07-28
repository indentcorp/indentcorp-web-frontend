import React, { useState, useEffect } from 'react';
import Mobile from '../../components/Mobile';
import Desktop from '../../components/Desktop';

const Presenter = () => {
  const [isMobile, setMobile] = useState(false);
  const getWindowSize = () => {
    const deviceWidth = window.innerWidth;
    if (deviceWidth < 480) {
      setMobile(true);
    }
  };
  const Renderer = () => {
    if (isMobile) {
      return <Mobile />;
    }
    return <Desktop />;
  };
  useEffect(() => {
    getWindowSize();
  }, []);
  return <Renderer />;
};

export default Presenter;
