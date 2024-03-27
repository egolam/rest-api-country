import useSWR from "swr";
import { useRouter } from "next/navigation";
import Link from "next/link";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BorderCountryItem = ({ br }) => {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/alpha/${br}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Link className="px-4 py-2 drop-shadow-md bg-white dark:bg-[#2B3844] rounded-md hover:scale-105 active:scale-100 transition-all" href={`/${data[0].name.official}`}>{data[0].name.common}</Link>
  );
};

export default BorderCountryItem;
