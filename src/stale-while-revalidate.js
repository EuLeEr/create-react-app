import React from "react";
import PropTypes from "prop-types";

export default class Component extends React.Component {
  state = { users: [] };

  componentDidMount() {
    this.load();
  }

  load() {
    fetch(`https://reqres.in/api/users?page=${this.props.page}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ users: json.data });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.load();
    }
  }

  render() {
    const users = this.state.users.map((user) => (
      <p key={user.id}>
        <img
          src={user.avatar}
          alt={user.first_name}
          style={{ height: 24, width: 24 }}
        />
        {user.first_name} {user.last_name}
      </p>
    ));
    return <div>{users}</div>;
  }
}

Component.propTypes = {
  page: PropTypes.number.isRequired,
};
