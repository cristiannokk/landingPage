"use client";

import Image from "next/image";
import Lottie from "react-lottie-player";
import Animation from "@/public/Animation3json.json";

export default function AboutUs() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-8">
          <div className="space-y-6 text-center">
            <h2
              data-aos="zoom-y-out"
              data-aos-delay={150}
              className="text-2xl font-bold text-gray-900"
            >
              Quiénes Somos
            </h2>
            <p
              data-aos="zoom-y-out"
              data-aos-delay={150}
              className="text-lg text-gray-700"
            >
              ¡Saludos! Somos TriDevs Solution, un equipo de tres ingenieros de
              software con amplia experiencia en el sector financiero. Entre
              nuestros logros, hemos desarrollado los sistemas de onboarding y
              back office para uno de los grupos bancarios más grandes de
              Argentina. Nuestro objetivo es crear una excelente sinergia entre
              nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
