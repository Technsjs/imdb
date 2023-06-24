import Link from "next/link";
import React from "react";

export default function MenuItems({ title, link, Icon }) {
  return (
    <div>
      <Link href={link} className="mx-4 lg:mx-6 hover:text-amber-600 text-lg ">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline-block my-4 ">{title}</p>
      </Link>
    </div>
  );
}

function SubMenu({ title, link }) {
  return (
    <div className="mx-4 my-4">
      <Link href={link}>
        <p>{title}</p>
      </Link>
    </div>
  );
}

export { SubMenu };
