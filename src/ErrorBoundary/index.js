import React, { PureComponent } from "react";
import styled from "styled-components";

export default class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
    count: 0,
    errorData: {}
  };

  componentDidCatch(error, info) {
    const { count } = this.state;
    console.error(this.props.componentName, "error", error, "info", info);
    // Display fallback UI
    // You can also log the error to an error reporting service
    const errorData = {
      type: "react-app-crashed",
      description: `
			${this.props.componentName}
			-------
			${JSON.stringify(window.location)}
			---
			${error.message}
			---
			${error.stack}
			---
			${JSON.stringify(error)}`,
      content: `${info.componentStack}
			---
			 ${JSON.stringify(info)}`
    };
    this.setState({ hasError: true, errorData, count: count + 1 });
  }

  render() {
    if (this.state.hasError && this.state.count > 3) {
      return (
        <StyledError>
          <div>
            <span>
              An error occur in {this.props.componentName}, please try to clear
              your browser cache and refresh.
            </span>
            <button onClick={() => window.location.reload()}>Reload</button>
          </div>
        </StyledError>
      );
    }
    return this.props.children;
  }
}

const StyledError = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
    Roboto, Helvetica Neue, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  div {
    max-width: 40vw;
    text-align: center;
    line-height: 2;
  }
  span {
    display: block;
    margin-bottom: 30px;
  }
  a {
    color: #5f67ff;
  }
  button {
    background: #5f67ff;
  }
`;
