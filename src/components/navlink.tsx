import { FC } from "react";

interface NavlinkProps {
  href: string;
  title: string;
}

const Navlink: FC<NavlinkProps> = ({ href, title }) => {
  return (
    <a
      href={href}
      className="py-2 pl-2 pr-4 text-pink-600 lg:text-xl rounded md:p-0 hover:text-pink-300"
    >
      {title}
    </a>
  );
};

export default Navlink;
