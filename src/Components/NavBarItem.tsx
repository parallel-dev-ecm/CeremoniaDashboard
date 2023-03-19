import React, {useRef} from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import gsap from "gsap";

type Props = {
  path: string;
  text: string;
  Logo: IconType;
};



function NavBarItem({ path, Logo, text }: Props) {
  return (
    <>
      <div className="flex items-center gap-4 p-4  hover:text-white text-black  transition-colors font-semibold">
        <Logo />
        <Link to={path} className="p-1">
          {text}
        </Link>
      </div>
    </>
  );
}

export default NavBarItem;
