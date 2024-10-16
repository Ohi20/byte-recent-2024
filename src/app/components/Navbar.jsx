"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import bytepng1 from "../../../public/images/bytepng1.png";
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
    <div className="navbar fixed z-10 bg-purple-400 bg-opacity-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link, index) => (
              <li className="font-serif" key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        <Link className=" " href={"/"}>
          <Image
            src={bytepng1}
            className=" "
            width={80}
            height={80}
            alt="Byte"
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link, index) => (
            <li className="font-serif" key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="navbar-end">
        <Link href={"contact"} className="btn">
          Contact
        </Link>
      </div> */}
    </div>

    // <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-opacity-70 h-15 max-w-full">
    //   <div className="flex container flex-wrap items-center justify-between mx-auto h-15">
    //     {/* Logo */}
    //     <div className="h-15 w-20">
    //       <Link className="" href={"/"}>
    //         <Image src={bytelogo} className="text-white h-15 w-20" alt="Byte" />
    //       </Link>
    //     </div>
    //     {/* Mobile Menu */}
    //     <div className="mobile-menu block md:hidden">
    //       {!navbarOpen ? (
    //         <button
    //           onClick={() => setNavbarOpen(true)}
    //           className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
    //         >
    //           <Bars3Icon className="h-5 w-5" />
    //         </button>
    //       ) : (
    //         <button
    //           onClick={() => setNavbarOpen(false)}
    //           className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
    //         >
    //           <XMarkIcon className="h-5 w-5" />
    //         </button>
    //       )}
    //     </div>
    //     {/* Nalinks */}
    //     <div className="menu hidden md:block md:w-auto" id="navbar">
    //       <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
    //         {navLinks.map((link, index) => (
    //           <li className="block font-serif" key={index}>
    //             <NavLink href={link.path} title={link.title} />
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    //   {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    // </nav>
  );
};

export default Navbar;
