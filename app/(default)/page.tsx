// pages/index.js
export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import AboutUs from "@/components/about";
import Cta from "@/components/cta";
import LottieBackground from "@/components/ui/LottieBackground"; // Importa el componente LottieBackground

export default function Home() {
  return (
    <>
      <div className="relative">
        <LottieBackground /> {/* Agrega el componente LottieBackground */}
        <div className="relative z-10"> {/* Asegúrate de que el contenido principal esté en un contenedor con z-index más alto */}
          <Hero />
          <BusinessCategories />
          <AboutUs />
          <Cta />
        </div>
      </div>
    </>
  );
}
