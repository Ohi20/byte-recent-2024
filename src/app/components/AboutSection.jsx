"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const AboutSection = () => {
  return (
    <section className="text-white" id="whoweare">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center w-full">
          <Image
            src="/images/hero.jpg"
            className="w-full h-80 rounded-lg"
            width={500}
            height={100}
            alt="hero"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center items-center">
          <h2 className="text-4xl font-bold text-white mb-4 text-center font-serif">
            Who We Are
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center items-center mb-4">
              <TypeAnimation
                sequence={["Hello", 1000, "Welcome!", 1000]}
                className="text-center font-semibold"
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="border border-[#33353F] bg-[#181818] rounded-md p-2">
              <p className="text-base text-[#ADB7BE] lg:text-lg text-justify content-center  font-semibold  font-serif break-all">
                At Byte,our deep-rooted passion for digital transformation sets
                us apart.We are not just another digital marketing agency,we
                will be your growth partner.Our team of digital experts brings
                fresh perspectives and innovative strategies to your business.By
                combining data-driven insights with creative solutions,we
                deliver measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
