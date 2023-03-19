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
      <div className="px-1 mt-1">
        <Link to={"/"}>
          <img className="w-[500] h-[500]" src="logo.png" alt="" />
        </Link>
        <br />
        <br />
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
              <li>
                <br />
                <a data-8code="kj7fp" data-hide-text></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/** Logotipo */}

      {/* Menu */}
    </>
  );
}

export default Navbar;
