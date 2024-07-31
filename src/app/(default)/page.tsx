// pages/index.js
export const metadata = {
  title: "Tridevs Solutions",
  description: "tridevs Solutions",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import AboutUs from "@/components/about";
import Cta from "@/components/cta";
import LottieBackground from "@/components/ui/LottieBackground"; // Importa el componente LottieBackground
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="relative">
        <LottieBackground />
        <div className="relative z-10">
          <Hero />
          <BusinessCategories />
          <AboutUs />
          <Cta />
        </div>
      </div>
    </>
  );
};

export default Home;
