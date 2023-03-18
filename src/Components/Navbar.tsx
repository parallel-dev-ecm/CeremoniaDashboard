import React from "react";
import {
  RiDashboardLine,
  RiListSettingsFill,
  RiExternalLinkFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      {/** Logotipo */}
      <div className="text-center p-8">
        <Link to={"/"}>
          <h1 className="uppercase font-bold  tracking-[4 px]">
            Parallel Room.
          </h1>
        </Link>
      </div>

      <div className="flex flex-col h-[500px] rounded-lg">
        {" "}
        <nav>
          <ul>
            <li>
              <NavBarItem path="About" text="About" Logo={RiDashboardLine} />
            </li>

            <li>
              <NavBarItem
                path="https://github.com/parallel-dev-ecm"
                text="Credits"
                Logo={RiExternalLinkFill}
              />
            </li>
          </ul>
        </nav>
      </div>
      {/* Menu */}
    </>
  );
}

export default Navbar;
