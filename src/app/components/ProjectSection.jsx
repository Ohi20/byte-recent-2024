"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Social Media Marketing",
    description: "facebook,twitter,instagram,linkedin",
    image: "/images/projects/social.jpg",
    tag: ["All", "Services"],
    gitUrl: "https://github.com/Ohi20/3d-Portfolio-2023/tree/main",
    previewUrl: "https://portfolio-ashraf-ohi.netlify.app/",
  },
  {
    id: 2,
    title: "Content Development",
    description: "graphics design,logo,video,banner",
    image: "/images/projects/contendev.jpg",
    tag: ["All", "Development"],
    gitUrl: "https://github.com/Ohi20/Youtube-Clone-2023",
    previewUrl: "https://youtube-clone-api-2023.netlify.app/",
  },
  {
    id: 3,
    title: "Digital Advertising",
    description: "digital ads,animation,clips,typography",
    image: "/images/projects/digitalad.jpg",
    tag: ["All", "Services"],
    gitUrl: "https://github.com/Ohi20/Movie-App-With-REST_API",
    previewUrl: "https://cinemore.netlify.app/",
  },
  {
    id: 4,
    title: "Web Design and Development",
    description: "html,css,javascript,react,node",
    image: "/images/projects/webdesign.jpg",
    tag: ["All", "Development"],
    gitUrl: "https://github.com/Ohi20/metaverse-2024",
    previewUrl: "https://metaverse-2024.vercel.app/",
  },
  {
    id: 5,
    title: "Mobile App",
    description: "android,apple",
    image: "/images/projects/mobileapp.jpg",
    tag: ["All", "Development"],
    gitUrl: "https://github.com/Ohi20/3d-Solar-System",
    previewUrl: "https://effortless-pegasus-0b7dd5.netlify.app/",
  },
  {
    id: 6,
    title: "Product Analysis",
    description: "product photography,product videography",
    image: "/images/projects/productphoto.jpg",
    tag: ["All", "Services"],
    gitUrl: "https://github.com/Ohi20/modern-bank-2024",
    previewUrl: "https://gystbank.netlify.app",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 font-serif">
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
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
