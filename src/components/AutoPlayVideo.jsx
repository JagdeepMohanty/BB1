import React, { useEffect, useRef } from "react";

const AutoPlayVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play(); // Play when in view
            } else {
              videoRef.current.pause(); // Pause when out of view
            }
          }
        });
      },
      { threshold: 0.5 } // video must be 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      controls // so user can pause manually too
      className="w-full h-full rounded-lg shadow-md object-cover"
    />
  );
};

export default AutoPlayVideo;
