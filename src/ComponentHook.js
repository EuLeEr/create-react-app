import React, { useState, useEffect } from "react";
const CACHE = {};

export default function Component({ page }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (CACHE[page] !== undefined) {
      setUsers(CACHE[page]);
    }
    apiFetch(`https://reqres.in/api/users?page=${page}`).then((json) => {
      CACHE[page] = json.data;
      setUsers(json.data);
    });
  }, [page]);

  const usersDOM = users.map((user) => (
    <p key={user.id}>
      <img
        src={user.avatar}
        alt={user.first_name}
        style={{ height: 24, width: 24 }}
      />
      {user.first_name} {user.last_name}
    </p>
  ));

  return <div>{usersDOM}</div>;
}
