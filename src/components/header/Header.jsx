import React, { useEffect, useRef } from 'react';
import './header.css';
import video from './video.mp4';

export default function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component is mounted
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="header">
      <video
        className="headerImg"
        ref={videoRef}
        src={video}
        loop
        autoPlay
        muted  // Add the 'muted' attribute to allow autoplay without user interaction
        controls
      />
    </div>
  );
}
