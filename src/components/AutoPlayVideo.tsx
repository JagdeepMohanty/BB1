import React, { useEffect, useRef } from 'react';

interface AutoPlayVideoProps {
  src: string;
  className?: string;
}

const AutoPlayVideo: React.FC<AutoPlayVideoProps> = ({ src, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
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
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={`w-full h-auto object-contain rounded-lg ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default AutoPlayVideo;
