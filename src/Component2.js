import React from "react";
import PropTypes from "prop-types";
import apiFetch from "./apiFetch";

const CACHE = {};

export default class Component2 extends React.Component {
  state = { cats: [] };

  componentDidMount() {
    this.load();
  }

  load() {
    if (CACHE[this.props.page] !== undefined) {
      this.setState({ cats: CACHE[this.props.page] });
    }
    apiFetch(`https://reqres.in/api/cats?page=${this.props.page}`).then(
      (json) => {
        CACHE[this.props.page] = json.data;
        this.setState({ cats: json.data });
      }
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.load();
    }
  }

  render() {
    const cats = this.state.cats.map((cat) => (
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
    return <div>{cats}</div>;
  }
}

Component2.propTypes = {
  page: PropTypes.number.isRequired,
};
