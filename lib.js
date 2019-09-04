import React, { useEffect, useRef, useState } from 'react';

export default function usePageVisibility(delay) {
  const [visible, setVisible] = useState(true);
  const timeoutId = useRef(null);

  useEffect(() => {
    const updateVisibility = () =>
      document.hidden ? setVisible(false) : setVisible(true);

    const cleanupTimeout = () => clearTimeout(timeoutId.current);

    const handleVisibilityChange = () => {
      if (delay) {
        if (typeof delay !== 'number' || delay < 0) {
          throw new Error('Delay must be a positive integer');
        }

        if (timeoutId.current) cleanupTimeout();
        timeoutId.current = setTimeout(() => updateVisibility(), delay);
      } else {
        updateVisibility();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return visible;
}
