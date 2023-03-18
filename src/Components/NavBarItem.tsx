import React from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type Props = {
  path: string;
  text: string;
  Logo: IconType;
};

function NavBarItem({ path, Logo, text }: Props) {
  return (
    <>
      <div className="flex items-center gap-4 p-4 hover:bg-purple-600 hover:text-white text-gray-400 rounded-lg transition-colors font-semibold">
        <Logo />
        <Link to={path} className="p-1">
          {text}
        </Link>
      </div>
    </>
  );
}

export default NavBarItem;
