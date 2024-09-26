import React from "react";

const ProjectCard = ({ title, description }) => {
  return (
    <div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] font-serif border border-[#33353F] p-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] font-extralight">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
