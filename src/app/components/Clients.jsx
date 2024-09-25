"use client";
import React, { useRef } from "react";
import Clientscard from "./Clientscard";
import { motion, useInView } from "framer-motion";

const clientsData = [
  {
    id: 1,
    title: "Odita",
    image: "/images/odita.jpg",
  },
  {
    id: 2,
    title: "Optimum Meditrade",
    image: "/images/optimum1.jpg",
  },
  {
    id: 3,
    title: "Manha Odita",
    image: "/images/manha.jpg",
  },
  {
    id: 4,
    title: "Griho Bilash",
    image: "/images/griho.jpg",
  },
  {
    id: 5,
    title: "UNDP",
    image: "/images/un.jpg",
  },
  {
    id: 6,
    title: "Unicef",
    image: "/images/unisef.jpg",
  },
];

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="clients">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 font-serif">
        Clients
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {clientsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Clientscard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ClientsSection;
