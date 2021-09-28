import Categories from "../components/Categories";
import Login from "../components/Login";

export const routes = [
  { path: "/login", component: Login, exact: true },
  { path: "/categories", component: Categories, exact: true },
  // {path: '/login', component: Login, exact=true},
];
