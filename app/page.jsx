import CountryList from "@/components/CountryList";
import SearchAndFilter from "@/components/SearchAndFilter";

export default function Home() {
  return (
    <section className="container md:pt-12 pt-6 px-4 md:px-0">
      <article className="flex flex-col md:flex-row gap-6 md:gap-0 md:justify-between relative">
        <SearchAndFilter />
      </article>
      <CountryList />
    </section>
  );
}
