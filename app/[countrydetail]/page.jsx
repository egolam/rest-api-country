"use client";
import useSWR from "swr";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import { formatter } from "@/utils/numberFormatter";
import BorderCountryList from "@/components/BorderCountryList";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CountryDetail = ({ params }) => {
  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/name/${params.countrydetail}`,
    fetcher
  );

  if (error) return <div className="min-h-screen">failed to load</div>;
  if (isLoading) return <div className="min-h-screen">loading...</div>;
  const current = data[0];

  //I do not know what I am doing
  const nativeNames = Object.keys(current.name.nativeName);
  const currencies = Object.keys(current.currencies);
  const languages = Object.keys(current.languages);

  return (
    <section className="md:container md:py-12 py-6 min-h-screen text-[#111517] dark:text-white flex flex-col md:gap-0 gap-6 px-6">
      <Link
        href="/"
        className="flex items-center gap-2 w-max md:mt-8 px-8 py-2 rounded-sm dark:bg-[#2B3844]"
      >
        <FaArrowLeftLong />
        Back
      </Link>
      
      
      
      <article className="h-full w-full flex md:flex-row flex-col md:gap-[7.5rem] gap-10 md:justify-between items-center">
        <div className="relative md:w-[35rem] w-[20rem] h-[14.375rem] md:h-[25rem] drop-shadow-md rounded-2xl overflow-hidden">
          <Image src={current.flags.svg} fill className="md:object-cover" alt={!current.flags.alt ? "flag" : current.flags.alt} priority/>
        </div>
        <div className="flex flex-col md:gap-10 gap-8 md:max-w-[36rem] text-sm md:text-base">
          <h2 className="font-extrabold md:text-[2rem] text-2xl">{current.name.common}</h2>
          <div className="font-semibold grid md:grid-cols-2 md:gap-x-4 md:gap-y-0 gap-y-3">
            <p>
              Native Name(s):{" "}
              {nativeNames.map((key, index) => (
                <span className="font-light" key={index}>
                  {Object.values(current.name.nativeName[key].common)}
                  {index !== nativeNames.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p>
              Population:{" "}
              <span className="font-light">
                {formatter(current.population)}
              </span>
            </p>
            <p>
              Region: <span className="font-light">{current.region}</span>
            </p>
            <p>
              Sub Region:{" "}
              <span className="font-light">{current.subregion}</span>
            </p>
            <p>
              Capital: <span className="font-light">{current.capital}</span>
            </p>
            <p>
              Top Level Domain:{" "}
              <span className="font-light">{current.tld}</span>
            </p>
            <p>
              Currencies:{" "}
              {currencies.map((key, index) => (
                <span className="font-light" key={index}>
                  {Object.values(current.currencies[key].name)}
                  {index !== currencies.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p>
              Languages:{" "}
              {languages.map((key, index) => (
                <span className="font-light" key={index}>
                  {Object.values(current.languages[key])}
                  {index !== languages.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
          <div className="font-semibold flex flex-col md:flex-row gap-4 items-center md:mt-16">
            <p className="min-w-fit self-start">Border Countries:</p>
            <div className="flex justify-center">
              {!current.borders ? (
                <p>No Border Countries!</p>
              ) : (
                <BorderCountryList borders={current.borders} />
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CountryDetail;
