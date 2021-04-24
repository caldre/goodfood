import React, { useState, useEffect, useRef } from "react";
// import { useFetchFood } from "../../custom-hooks/useFetchFood";
import { useDispatch } from "react-redux";
import { populateSearchList } from "../../actions/actions";
import _ from "lodash";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const inputEl = useRef("");
  const dispatch = useDispatch();

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
          dispatch(populateSearchList(data));
        });
    };

    fetchData();
  }, [searchItem, dispatch]);

  useEffect(() => {
    inputEl.current = searchItem;
  }, [searchItem]);

  const handleChange = _.debounce((searchTerm) => {
    setSearchItem(searchTerm);
  }, 500);

  return (
    <div>
      <form>
        <label>Tuote</label>
        <input ref={inputEl} onChange={(e) => handleChange(e.target.value)} />
      </form>
    </div>
  );
};

export default SearchBar;
