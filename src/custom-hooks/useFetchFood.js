import { useEffect } from "react";

export const useFetchFood = (searchItem) => {
  useEffect(() => {
    if (!searchItem) return [];

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
          return data;
        });
    };

    fetchData();
  }, [searchItem]);
};
