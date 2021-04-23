import React from 'react';

const useScript = (url: string) => {
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => {
        // document.body.removeChild(script);
    }
};

export default useScript;