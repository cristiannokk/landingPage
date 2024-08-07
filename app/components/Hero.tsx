"use client";
import { motion } from "framer-motion";
import { slideIn } from "../styles/animations";
import Lottie from "react-lottie-player";
import animationData from "@/public/animations/Animation.json";

const Hero = () => {
  return (
    <section id="inicio" className="flex md:flex-row flex-col paddingY">
      <motion.div
        className="flex-1 flexStart flex-col xl:px-0 paddingX"
        variants={slideIn("left", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-white text-gradient whitespace-nowrap ss:text-[56px] text-[40px] ss:leading-[80px] leading-[60px]">
            Tridevs Solutions
          </h1>
        </div>

        <p className="paragraph max-w-[470px] mt-2">
          Transforma tu visión. Únete a nosotros y lleva tu presencia online al
          siguiente nivel.
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flexCenter md:my-0 my-10 relative"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Lottie
          animationData={animationData}
          play
          loop
          speed={0.5}
          style={{ width: "100%", height: "100%" }}
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>

      
    </section>
  );
};

export default Hero;
