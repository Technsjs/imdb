import React from "react";
import { SubMenu } from "./menuItems";

export default function LinkHeader() {
  return (
    <div className="bg-amber-200 flex justify-center">
      <SubMenu title={"Trending"} link={"/trending"} />
      <SubMenu title={"Top Rated"} link={"/trending"} />
    </div>
  );
}
