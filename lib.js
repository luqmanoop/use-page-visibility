import React, { useEffect, useRef } from 'react';

export default function usePageVisibility(cb = () => {}, delay) {
  const timeoutId = useRef(null);

  const browserCompatApi = () => {
    let hidden, visibilityChange;
    if ('hidden' in document) {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if ('mozHidden' in document) { // Firefox up to v17
      hidden = "mozHidden";
      visibilityChange = "mozvisibilitychange";
    } else if ('webkitHidden' in document) { // Chrome up to v32, Android up to v4.4, Blackberry up to v10
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
    return {
      hidden,
      visibilityChange
    }
  }

  const cleanupTimeout = () => clearTimeout(timeoutId.current);

  useEffect(() => {
    const { hidden, visibilityChange } = browserCompatApi();
    
    const handleVisibilityChange = () => {
      if (delay) {
        if (typeof delay !== 'number' || delay < 0) {
          throw new Error('Delay must be a positive integer');
        }

        if (timeoutId.current) cleanupTimeout();
        timeoutId.current = setTimeout(() => cb(document[hidden]), delay);
      } else {
        cb(document[hidden])
      }
    };

    document.addEventListener(visibilityChange, handleVisibilityChange);

    return () => {
      document.removeEventListener(visibilityChange, handleVisibilityChange);
    };
  }, []);
}
