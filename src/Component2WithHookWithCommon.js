import React from "react";
import useStaleRefresh from "./useStaleRefreshUniverse";
import PropTypes from "prop-types";
import apiFetch from "./apiFetch";

export default function Component2({ page }) {
  const [cats, isLoading] = useStaleRefresh(
    apiFetch,
    [`https://reqres.in/api/cats?page=${page}`],
    { data: [] }
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  const catsDOM = cats.data.map((cat) => (
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
