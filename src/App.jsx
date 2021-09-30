import React from "react";
import { AppRouterAuth, AppRouterMain } from "./routes/AppRouter";

export default function App() {
  const isAuth = true;
  return <>{isAuth ? <AppRouterMain /> : <AppRouterAuth />}</>;
}
