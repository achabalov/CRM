import React, { createContext, useState } from "react";
import { AppRouterAuth, AppRouterMain } from "./routes/AppRouter";

export const Auth = createContext(null);

export default function App() {
  const [auth, setAuth] = useState(true);

  return (
    <>
      <Auth.Provider value={setAuth}>
        {auth ? <AppRouterMain setAuth={setAuth} auth={auth}/> : <AppRouterAuth />}
      </Auth.Provider>
    </>
  );
}
