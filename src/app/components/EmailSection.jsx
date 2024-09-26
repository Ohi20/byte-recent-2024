"use client";
import React, { useState } from "react";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mt-8 md:mt-8 py-24 gap-4 relative font-serif"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-xl font-serif">
          We don't just chase likes and shares; we focus on delivering
          measurable outcomes that align with your business goals.
        </p>
      </div>
      <div>
        <form className="flex flex-col border border-[#33353F] p-4 rounded-md bg-[#181818]">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-xl font-medium"
            >
              Phone
            </label>
            <p className="text-xl font-semibold text-white">+8801974-041314</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-xl mb-2 font-medium"
            >
              Address
            </label>
            <p className="text-xl font-semibold text-white">
              37/2, Pritom Zaman Tower (Level-1), Purana Paltan, 1000
            </p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-xl  mb-2 font-medium"
            >
              Email
            </label>
            <p className="text-xl font-semibold text-white">
              byte.digital.bd@gmail.com
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
