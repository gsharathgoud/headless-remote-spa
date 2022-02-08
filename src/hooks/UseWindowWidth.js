/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const UseWindowWidth = (delay = 150, config = {}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth),
    debouncedCallback = useDebouncedCallback(() => setWindowWidth(window.innerWidth), delay, config);

  useEffect(() => {
    window.addEventListener('resize', debouncedCallback);
    return () => window.removeEventListener('resize', debouncedCallback);
  }, [debouncedCallback, windowWidth]);

  return windowWidth;
};

export default UseWindowWidth;
