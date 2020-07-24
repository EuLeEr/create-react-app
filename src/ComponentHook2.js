import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import apiFetch from "./apiFetch";

const CACHE = {};

export default function Component2({ page }) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    if (CACHE[page] !== undefined) {
      setCats(CACHE[page]);
    }
    apiFetch(`https://reqres.in/api/cats?page=${page}`).then((json) => {
      CACHE[page] = json.data;
      setCats(json.data);
    });
  }, [page]);

  const catsDOM = cats.map((cat) => (
    <p
      key={cat.id}
      style={{
        background: cat.color,
        padding: "4px",
        width: 240,
      }}
    >
      {cat.name} (born {cat.year})
    </p>
  ));
  return <div>{catsDOM}</div>;
}

Component2.propTypes = {
  page: PropTypes.number.isRequired,
};
