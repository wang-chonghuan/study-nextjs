import { useState } from "react";

const Search = () => {
  const [brand, setBrand] = useState("");

  return (
    <div>
      <div>Selected brand: {brand}</div>
      <select onChange={(ev) => setBrand(ev.target.value)}>
        <option value="">All brands</option>
        <option value="Fiat">Fiat</option>
        <option value="Ford">Ford</option>
        <option value="Renault">Renault</option>
        <option value="Opel">Opel</option>
      </select>
    </div>
  );
};

export default Search;
