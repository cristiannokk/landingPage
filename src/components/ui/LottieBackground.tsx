'use client';
// components/LottieBackground.tsx
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import animationData from "@/public/Animation-background.json";

const LottieBackground: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPaused(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="absolute z-0 overflow-hidden"
      style={{
        top: isMobile ? '-30%' : '-15%', 
        left: 0,
        right: 0,
        bottom: 0,
        opacity: isMobile ? 0.2 : 0.3,
        position: 'absolute',
      }}
    >
      <Lottie
        animationData={animationData}
        play={!isPaused}
        loop={false}
        speed={0.5}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieBackground;
