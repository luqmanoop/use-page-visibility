import React, { useEffect, useRef } from 'react';

export default function usePageVisibility(cb, delay) {
  const timeoutId = useRef(null);

  useEffect(() => {
    const cleanupTimeout = () => clearTimeout(timeoutId.current);

    const handleVisibilityChange = () => {
      if (delay) {
        if (typeof delay !== 'number' || delay < 0) {
          throw new Error('Delay must be a positive integer');
        }

        if (timeoutId.current) cleanupTimeout();
        timeoutId.current = setTimeout(() => cb(document.hidden), delay);
      } else {
        cb(document.hidden)
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}
