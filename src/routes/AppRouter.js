import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "../components/app/Navbar";
import Sidebar from "../components/app/Sidebar";
import { pageRoutes, privateRoutes } from "../routes/routes";

export const AppRouterMain = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="app-main-layout">
      <Navbar show={show} setShow={setShow} />
      <Sidebar show={show} />
      <main className={`app-content ${!show ? "full" : ""}`}>
        <div className="app-page">
          <Switch>
            {pageRoutes.map((route) => (
              <Route
                key={Math.random() * 1}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </div>
      </main>
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large blue" href=" ">
          <i className="large material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export const AppRouterAuth = () => {
  return (
    <div className="grey darken-1 empty-layout">
      <Switch>
        {privateRoutes.map((route) => (
          <Route
            key={Math.random() * 1}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Redirect to="login" />
      </Switch>
    </div>
  );
};
