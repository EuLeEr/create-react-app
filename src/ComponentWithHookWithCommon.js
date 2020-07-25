import React from "react";
import PropTypes from "prop-types";
import useStaleRefresh from "./useStaleRefreshUniverse";
import apiFetch from "./apiFetch";

export default function Component({ page }) {
  const [users, isLoading] = useStaleRefresh(
    apiFetch,
    [`https://reqres.in/api/users?page=${page}`],
    { data: [] }
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  const usersDOM = users.data.map((user) => (
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

Component.propTypes = {
  page: PropTypes.number.isRequired,
};
