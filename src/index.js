import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
// eslint-disable-next-line
import App from "./App";
//import Component from "./stale-while-revalidate";
//import Component from "./Stale-while-refresh";
import theme from "./theme";
// eslint-disable-next-line
import Pricing from "./pricing";
import "./slyles.css";
//import Component2 from "./Component2";
//last commit
import Component from "./ComponentWithHookWithCommon";
import Component2 from "./Component2WithHookWithCommon";

class Appx extends React.Component {
  state = { page: 1, page2: 1 };
  render() {
    return (
      /*
      <div className="Appx">
        <Component page={this.state.page} />
        <button
          onClick={() =>
            this.setState({
              page: this.state.page === 2 ? 1 : 2,
            })
          }
        >
          Toggle
        </button>
      </div>*/
      <div className="Appx">
        <div>
          <Component page={this.state.page} />
          <button
            onClick={() =>
              this.setState({
                page: this.state.page === 2 ? 1 : 2,
              })
            }
          >
            Change
          </button>
        </div>
        <div>
          <Component2 page={this.state.page2} />
          <button
            onClick={() =>
              this.setState({
                page2: this.state.page2 === 2 ? 1 : 2,
              })
            }
          >
            Change
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {/*<Pricing /> 
    <Component /> */}
    <Appx />
  </ThemeProvider>,
  document.querySelector("#root")
);
