import React from "react";
import useStaleRefresh from "./useStaleRefresh";

export default function Component({ page }) {
  const users = useStaleRefresh(`https://reqres.in/api/users?page=${page}`, []);

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
