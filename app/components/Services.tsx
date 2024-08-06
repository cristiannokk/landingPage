"use client";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../styles/animations";
import { features } from "../constants";
import { FaLaptopCode, FaExchangeAlt, FaTools, FaClipboardCheck, FaLightbulb } from "react-icons/fa";

const iconMap = {
  "Desarrollo de Sistemas a Medida": FaLaptopCode,
  "Migración e Integración de Sistemas": FaExchangeAlt,
  "Soporte y Mantenimiento": FaTools,
  "Auditoría y Consultoría": FaClipboardCheck,
  "Desarrollo de Ideas": FaLightbulb,
};

interface FeatureCardProps {
  title: string;
  content: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, content, index }) => {
  const IconComponent = iconMap[title as keyof typeof iconMap];
  return (
    <div
      className={`flex p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div className="w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue">
        <IconComponent className="w-[32px] h-[32px] text-white" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h1 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => (
  <section id="servicios" className="sectionInfo">
    <motion.div
      className="text-center mb-12 w-full"
      variants={slideIn("up", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
        Nuestros Servicios <br className="sm:block hidden" />
      </h2>
      <p className="paragraph mt-5">
        Descubre cómo podemos transformar tu negocio con nuestras soluciones personalizadas.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          variants={fadeIn("up", "spring", index * 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FeatureCard key={feature.id} {...feature} index={index} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services;
