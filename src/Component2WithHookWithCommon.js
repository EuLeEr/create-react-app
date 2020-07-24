import React from "react";
import useStaleRefresh from "./useStaleRefresh";

export default function Component({ page }) {
  const cats = useStaleRefresh(`https://reqres.in/api/cats?page=${page}`, []);

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
