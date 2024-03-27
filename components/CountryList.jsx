"use client";
import useSWR from "swr";
import CountryCard from "@/components/CountryCard";
import { useBorderStore } from "@/stores/borderStore";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CountryList = () => {
  const { filterChoice, searchInput } = useBorderStore();

  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/${
      !filterChoice ? "all" : "/region/" + filterChoice
    }`,
    fetcher
  );

  if (isLoading) return <div className="min-h-screen">Loading...</div>;
  if (error) return <div className="min-h-screen">Fetch failed!</div>;

  return (
    <article className="container flex flex-wrap md:justify-between justify-center gap-y-20 pt-12 h-screen">
      {data &&
        data
          .filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase())
          )
          .map((cr) => <CountryCard key={cr.ccn3} country={cr} />)}
    </article>
  );
};

export default CountryList;
