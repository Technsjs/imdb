import React from "react";

export default function Search() {
  return (
    <div className="flex ">
      <input
        type="search"
        placeholder="Search Keywords..."
        className="w-full py-4 px-4 border-none focus:outline-none"
      />
      <p className="my-auto mx-2">Search</p>
    </div>
  );
}
