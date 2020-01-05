import React, { lazy, memo, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Router } from "@reach/router";
import { Provider } from "unstated";
import ErrorBoundary from "./ErrorBoundary";

import * as serviceWorker from "./serviceWorker";

export const Loadable = memo(props => {
  const LoadableComponent = lazy(() => import("./Views/" + props.path));
  return (
    <Suspense fallback={null}>
      <LoadableComponent />
    </Suspense>
  );
});

const Dashboard = props => <Loadable path="Dashboard" />;
const Editor = props => <Loadable path="Editor" />;
const Login = props => <Loadable path="Login" />;
const Users = props => <Loadable path="Users" />;
const CreateUser = props => <Loadable path="Users/create" />;

const PharosApp = () => {
  return (
    <ErrorBoundary componentName="PharosApp">
      <Provider>
        <>
          {/* <GlobalStyle /> */}
          {/* <ToastNotification /> */}
          <ErrorBoundary componentName="Router">
            <Router>
              <Dashboard path="/*" />
              {/* <Dashboard path="/dashboard/*" /> */}
              <Editor path="/editor" />
              {/* <Install path="/install" /> */}
              {/* <Redirect path="/redirect" /> */}
              <Login path="/login" />
              <Users path="/users" />
              <CreateUser path="/users/create" />
            </Router>
          </ErrorBoundary>
        </>
      </Provider>
    </ErrorBoundary>
  );
};

ReactDOM.render(<PharosApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
