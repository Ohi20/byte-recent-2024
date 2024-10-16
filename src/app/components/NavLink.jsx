import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block text-md font-semibold font-serif  p-2 lg:px-4 text-white sm:text-sm xs:text-black hover:text-black hover:bg-white rounded-lg"
    >
      {title}
    </Link>
  );
};

export default NavLink;
