import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block font-semibold p-2 lg:p-2 my-2 text-[#ADB7BE] sm:text-xl md:p-0 hover:text-black hover:bg-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
