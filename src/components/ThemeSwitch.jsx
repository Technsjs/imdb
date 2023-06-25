"use client";
import React from "react";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiMoonClaws } from "react-icons/gi";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  //
  return (
    <div className="flex justify-center my-auto text-2xl hover:text-amber-200">
      {currentTheme === "dark" ? (
        <GiMoonClaws onClick={() => setTheme("light")} />
      ) : (
        <BsFillEmojiSunglassesFill onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
