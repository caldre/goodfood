import { useState, useEffect, useCallback } from "react";
import _ from "lodash";

export const useFetchFood = (searchString, delay) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3001/searchitems", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchString }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetch hook active");
          console.log(data);
          setData(data);
        });
    };

    const debouncedSearch = _.debounce(fetchData, 2000);

    debouncedSearch();
  }, [searchString]);

  return data;
};
