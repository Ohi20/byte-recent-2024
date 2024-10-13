import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block font-semibold p-2 lg:p-2 my-2 text-white sm:text-sm hover:text-black hover:bg-white rounded-lg"
    >
      {title}
    </Link>
  );
};

export default NavLink;
