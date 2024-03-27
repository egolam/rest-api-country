"use client"

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleTheme() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else if (resolvedTheme === "light") {
      setTheme("dark");
    }
  }

  return (
    <div className="flex gap-2 items-center">
       {resolvedTheme === "dark" ? <FiSun/> : <FiMoon/>} 
      <button onClick={() => handleTheme()} className="text-base font-semibold">Dark Mode</button>
    </div>
  );
};

export default DarkModeToggle;
