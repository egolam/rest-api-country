"use client"

import { useBorderStore } from "@/stores/borderStore";
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = () => {
  const { setSearchInput,searchInput } = useBorderStore();

  return (
    <div className="flex bg-white dark:bg-[#2B3844] items-center text-sm rounded-sm px-8 py-4 gap-6 md:min-w-[30rem] drop-shadow-md">
      <RxMagnifyingGlass className="text-[#848484] dark:text-white text-lg" />
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        className="outline-none font-medium bg-transparent placeholder:text-[#848484] dark:placeholder:text-gray-400 text-[#111517] dark:text-white flex-1"
        value={searchInput}
        type="text"
        name="searchbox"
        id="searchbox"
        placeholder="Search for a country…"
      />
    </div>
  );
};

export default SearchBar;
