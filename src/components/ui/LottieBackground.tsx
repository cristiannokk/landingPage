'use client'
// components/LottieBackground.tsx
import React from "react";
import Lottie from "react-lottie-player";
import animationData from "@/public/Animation-background.json";

const LottieBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Lottie
        animationData={animationData}
        play
        loop
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
    </div>
  );
};

export default LottieBackground;
