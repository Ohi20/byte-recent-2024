"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import bytesvg from "../../../public/images/bytesvg.svg";
import Image from "next/image";

const navLinks = [
  {
    title: "Who We Are",
    path: "#whoweare",
  },
  {
    title: "What We Do",
    path: "#whatwedo",
  },
  {
    title: "Clients",
    path: "#clients",
  },
  {
    title: "Contact Us",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto  border border-[#33353F] top-0 left-0 right-0 z-10 bg-opacity-70 h-15">
      <div className="flex container flex-wrap items-center justify-between mx-auto  h-15">
        {/* Logo */}
        <div className="h-10">
          <Link className="" href={"/"}>
            <Image src={bytesvg} className="text-white h-10 w-20" alt="Byte" />
          </Link>
        </div>
        {/* Mobile Menu */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {/* Nalinks */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li className="block font-serif" key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
