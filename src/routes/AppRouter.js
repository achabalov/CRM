import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { authRoutes, publicRoutes } from "../routes/routes";

export default function AppRouter() {
  const isAuth = true;
  return (
    <Switch>
      {isAuth
        ? publicRoutes.map((route) => (
            <Route
              key={route}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))
        : authRoutes.map((route) => (
            <Route
              key={route}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
      <Redirect to="/" />
    </Switch>
  );
}
