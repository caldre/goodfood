import React, { useState, useEffect } from "react";
import { useFetchFood } from "../../custom-hooks/useFetchFood";
import { useDispatch } from "react-redux";
import { populateSearchList } from "../../actions/actions";
import _ from "lodash";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  const dispatch = useDispatch();
  // const fetchedData = useFetchFood(searchItem);

  useEffect(() => {
    if (!searchItem) return dispatch(populateSearchList([]));

    const fetchData = async () => {
      await fetch("http://localhost:3001/searchitems", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchItem }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetching..");
          console.log(data);
          dispatch(populateSearchList(data));
        });
    };

    fetchData();
  }, [searchItem, dispatch]);

  const handleChange = _.debounce((searchTerm) => {
    setSearchItem(searchTerm);
  }, 500);

  const handleClick = (e) => {
    e.preventDefault();
    setSearchItem("");
  };

  return (
    <div>
      <form>
        <label>Tuote</label>
        <input onChange={(e) => handleChange(e.target.value)} />
        <button onClick={handleClick}>X</button>
      </form>
    </div>
  );
};

export default SearchBar;
