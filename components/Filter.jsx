"use client";

import { MdKeyboardArrowDown } from "react-icons/md";
import { regionFilters } from "@/constants/regionFilters";
import FilterOptions from "./FilterOption";
import { useState } from "react";
import { useBorderStore } from "@/stores/borderStore";

const Filter = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {filterChoice} = useBorderStore()

  function handleOpenMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleEscape(e){
    if(e.key === "Escape") {
      setIsMenuOpen(false)
    }
  }

  return (
    <div tabIndex={0} onKeyDown={(e) => handleEscape(e)} onClick={() => handleOpenMenu()} className="cursor-pointer text-sm bg-white dark:bg-[#2B3844] text-[#111517] flex items-center justify-center relative dark:text-white md:min-w-[12.5rem] font-medium px-6 py-4 md:py-0 ounded-sm drop-shadow-md z-20">
      <div className="flex items-center justify-between w-full">
        <button type="button" className="outline-none">{!filterChoice ? "Filter by Choice" : filterChoice}</button>
        <MdKeyboardArrowDown className={`text-lg ${isMenuOpen ? "rotate-180" : ""} transition-transform`} />
      </div>
            
      {isMenuOpen && (
        <div className="absolute bg-white dark:bg-[#2B3844] w-full flex flex-col top-14 rounded-sm overflow-hidden z-30">
          {regionFilters.map((option) => (
            <FilterOptions key={option} option={option} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
