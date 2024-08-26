import Link from 'next/link';

const NavLink = ({ href, title }: { href: string, title: string }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 font-light text-black sm:text-xl rounded md:p-0 hover:transform hover:scale-105 transition-transform"
    >
      {title}
    </Link>
  );
};

export default NavLink;