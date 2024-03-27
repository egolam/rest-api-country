import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="bg-white w-full flex justify-center h-20 items-center text-[#111517] dark:text-white dark:bg-[#2B3844] drop-shadow-md px-4 md:px-0">
      <div className="container md:text-2xl text-base flex justify-between font-extrabold items-center">
        <Link href="/">Where in the world?</Link>
        <DarkModeToggle/>
      </div>
    </header>
  );
};

export default Header;
