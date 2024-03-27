import BorderCountryItem from "./BorderCountryItem";

const BorderCountryList = ({ borders }) => {
  
  return (
    <div className="flex gap-3 font-light flex-wrap">
      {borders.map((br) => (
        <BorderCountryItem br={br}/>
      ))}
    </div>
  );
};

export default BorderCountryList;
