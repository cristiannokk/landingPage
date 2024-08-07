"use client";
import { apple, bill, google } from "../../../public";
import { slideIn } from "../styles/animations";
import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import animation from "@/public/animations/Animation-about.json";
import { FaCode, FaUniversity, FaProjectDiagram, FaRocket } from "react-icons/fa";

const About = () => (
  <section id="about" className="sectionReverse">
    <motion.div
      className="sectionImgReverse"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Lottie
        animationData={animation}
        play
        loop
        speed={0.5}
        style={{ width: "100%", height: "100%" }}
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Quiénes Somos <br className="sm:block hidden" />
      </h2>
      <p className="paragraph mt-5">
        Somos un equipo de desarrolladores apasionados por la programación.
        Convertimos ideas en soluciones tecnológicas personalizadas,
        especializándonos en el sector bancario para impulsar la innovación y el
        éxito de nuestros clientes.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <FaCode
            className="text-blue-500 w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
          />
          <p className="text-lg text-gray-700">
            <strong>Pasión por la Tecnología</strong>
          </p>
          <p className="text-gray-600 text-center">
            Somos entusiastas de la tecnología con un profundo conocimiento en el desarrollo de software.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaUniversity
            className="text-green-500 w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
          />
          <p className="text-lg text-gray-700">
            <strong>Expertos en el Sector Bancario</strong>
          </p>
          <p className="text-gray-600 text-center">
            Ofrecemos soluciones robustas y seguras diseñadas específicamente para el sector bancario.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaProjectDiagram
            className="text-yellow-500 w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
          />
          <p className="text-lg text-gray-700">
            <strong>Soluciones Personalizadas</strong>
          </p>
          <p className="text-gray-600 text-center">
            Creamos sistemas a medida que se alinean perfectamente con tus objetivos.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <FaRocket
            className="text-purple-500 w-16 h-16 mb-4 transform transition-transform duration-300 hover:scale-110"
          />
          <p className="text-lg text-gray-700">
            <strong>Innovación y Crecimiento</strong>
          </p>
          <p className="text-gray-600 text-center">
            Impulsamos el crecimiento y el éxito de tu negocio a través de la innovación.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default About;
