import React, { useState, useEffect } from 'react';
import Mobile from '../../components/Mobile/Top';
import Desktop from '../../components/Desktop/Desktop';

declare global {
  interface Window {
    VisualViewport: any;
  }
}

const Presenter = () => {
  const [isMobile, setMobile] = useState(false);
  const getWindowSize = () => {
    const deviceWidth = window.screen.width;
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
