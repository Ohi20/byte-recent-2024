"use client";
import Link from "next/link";
import React from "react";

const achievementsList = [
  {
    Medium: "Facebook",
    Link: "https://www.facebook.com/byte.digital.bd",
  },
  {
    Medium: "Instagram",
    Link: "https://www.instagram.com/accounts/login/?hl=en",
  },
  {
    Medium: "LinkedIn",
    Link: "https://www.linkedin.com/",
  },
  {
    Medium: "Twitter",
    Link: "https://x.com/?lang=en",
  },
];

const SocialMedia = () => {
  return (
    <div className="p-8">
      <div className="bg-[#181818] sm:border-[#33353F] sm:border rounded-md p-8 flex flex-col sm:flex-row items-center justify-between font-serif">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <Link
                href={achievement.Link}
                target="_blank"
                className="text-[#ADB7BE] text-base hover:bg-white  p-2 rounded"
              >
                <p className="text-[#ADB7BE] text-base hover:text-black">
                  {achievement.Medium}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
