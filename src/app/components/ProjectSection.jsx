"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: "facebook, twitter, instagram, linkedin",
    image: "/images/projects/somed.png",
    tag: ["All", "Services"],
  },
  {
    id: 2,
    title: "Content Development",
    description: "graphics design, logo, video,banner",
    image: "/images/projects/condev.png",
    tag: ["All", "Development"],
  },
  {
    id: 3,
    title: "Digital Advertising",
    description: "digital ads, animation, clips, typography",
    image: "/images/projects/dgad.png",
    tag: ["All", "Services"],
  },
  {
    id: 4,
    title: "Web Design and Development",
    description: "html, css, javascript, react, node",
    image: "/images/projects/webde.png",
    tag: ["All", "Development"],
  },
  {
    id: 5,
    title: "Mobile App",
    description: "android, apple",
    image: "/images/projects/mobapp.png",
    tag: ["All", "Development"],
  },
  {
    id: 6,
    title: "Product Analysis",
    description: "product photography, product videography",
    image: "/images/projects/propht.png",
    tag: ["All", "Services"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="whatwedo">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-12 font-serif">
        What We Do
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 font-serif">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Services"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Development"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
