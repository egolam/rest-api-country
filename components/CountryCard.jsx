import { formatter } from "@/utils/numberFormatter";
import Image from "next/image";
import Link from "next/link";

const CountryCard = ({ country }) => {
  const formattedPopulation = formatter(country.population);

  return (
    <Link
      href={`/${country.name.common}`}
      className="h-[21rem] w-[16.5rem] flex flex-col justify-between bg-white dark:bg-[#2B3844] drop-shadow-md rounded-sm overflow-hidden text-[#111517] dark:text-white hover:scale-105 active:scale-100 transition-all"
    >
      <div className="relative w-full h-[10rem]">
        <Image
          priority
          src={country.flags.svg}
          fill
          style={{ objectFit: "cover" }}
          alt={!country.flags.alt ? "flag" : country.flags.alt}
        />
      </div>
      <div className="p-6 min-h-[11rem] flex flex-col gap-4">
        <h2 className="text-[1.625rem] font-extrabold ">
          {country.name.common}
        </h2>
        <div className="text-sm flex flex-col gap-1">
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {formattedPopulation}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {country.capital}
          </p>
          <p>{}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
