import React, { useState, useEffect, useRef } from "react";
// import { useFetchFood } from "../../custom-hooks/useFetchFood";
import { useDispatch } from "react-redux";
import { populateSearchList } from "../../actions/actions";
import _ from "lodash";
import styled from "@emotion/styled";
import { Card } from "../styled";

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
    <Card>
      <form onSubmit={(e) => e.preventDefault()}>
        <Label htmlFor="tuotehaku">
          Tuote
          <span>
            <i className="fas fa-search"></i>
          </span>
          <Input
            name="tuotehaku"
            ref={inputEl}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Hae"
          ></Input>
        </Label>
      </form>
    </Card>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--primary-1), var(--primary-5));
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  display: block;
  border-radius: 0.2em;
  font-size: 1.5em;
  padding: 0.2em;
  border: 0;
`;

const I = styled.i`
  display: inline-block;
`;

export default SearchBar;
