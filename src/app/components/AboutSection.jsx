"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Reactjs</li>
        <li>Nextjs</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>NextAuth</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Sc</li>
        <li>C.S.E</li>
        <li>Shanto-Marium University Of Creative Technology</li>
        <li>United International University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete Web Development Course With Jhankar Mahbub</li>
        <li>Wordpress Training Courses</li>
        <li>Udemy Nextjs Courses</li>
        <li>Coursera Backend Web Development</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="whoweare">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center ">
          <Image
            src="/images/hero.jpg"
            className="w-full rounded-lg"
            width={500}
            height={100}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center items-center">
          <h2 className="text-4xl font-bold text-white mb-4 text-center font-serif">
            Who We Are
          </h2>
          <p className="text-base lg:text-lg text-justify font-serif">
            At Byte, our deep-rooted passion for digital transformation sets us
            apart. We are not just another digital marketing agency, we will be
            your growth partner. Our team of digital experts brings fresh
            perspectives and innovative strategies to your business. By
            combining data-driven insights with creative solutions, we deliver
            measurable results.
          </p>
          {/* <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div> */}
          {/* <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
