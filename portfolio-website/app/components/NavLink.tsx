import Link from 'next/link';

const NavLink = ({ href, title }: { href: string, title: string }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-gray-700"
    >
      {title}
    </Link>
  );
};

export default NavLink;