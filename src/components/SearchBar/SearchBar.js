import React, { useState } from "react";
import { useFetchFood } from "../../custom-hooks/useFetchFood";
import { useDispatch } from "react-redux";
import { populateSearchList } from "../../actions/actions";
import _ from "lodash";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  const dispatch = useDispatch();
  const fetchedData = useFetchFood(searchItem, 2000);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(populateSearchList(fetchedData));
    setSearchItem("");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <button type="submit">Hae hakusanalla</button>
      </form>
    </div>
  );
};

export default SearchBar;
