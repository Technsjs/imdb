import React from "react";
import MenuItems from "./menuItems";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between">
      <div className=" flex">
        <MenuItems title={"Home"} link={"/"} Icon={AiOutlineHome} />
        <MenuItems title={"About"} link={"/about"} Icon={BsInfoCircle} />
      </div>

      <div className="flex mx-4 my-auto ">
        <Link href={"/"}>
          <h2 className="text-2xl">
            <span className="font-bold text-white-200 bg-amber-500 py-1 px-2 rounded-lg">
              IMDb
            </span>{" "}
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
