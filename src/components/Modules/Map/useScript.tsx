import { useEffect } from 'react';

const useScript = (url: string) => {
    console.log('url', url)
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    console.log('script', script)
    return () => {
        // document.body.removeChild(script);
    }
};

export default useScript;