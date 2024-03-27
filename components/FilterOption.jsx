import { useBorderStore } from "@/stores/borderStore"

const FilterOption = ({option}) => {

  const {setFilterChoice,filterChoice} = useBorderStore();


  return (
    <button onClick={() => setFilterChoice(option === "All" ? "": option)} className="text-left h-full hover:bg-slate-100 dark:hover:bg-slate-700 px-6 py-3">{option}</button>
  )
}

export default FilterOption