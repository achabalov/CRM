import EmptyLayout from "../layouts/EmptyLayout";
import MainLayout from "../layouts/MainLayout";
import DetailRecored from "../views/DetailRecored";
import History from "../views/History";
import Home from "../views/Home";
import Planning from "../views/Planning";
import Record from "../views/Record";
import Categories from "../views/Categories";
import Login from "../views/Login";
import Register from "../views/Register";

export const publicRoutes = [
  { path: "/", component: MainLayout, exact: true },
];
export const authRoutes = [
  { path: "/emptyLayouts", component: EmptyLayout, exact: true },
]

export const privateRoutes = [
  { path: "/login", component: Login, exact: true },
  { path: "/register", component: Register, exact: true },
]

export const pageRoutes = [
  { path: "/categories", component: Categories, exact: true },
  { path: "/detail-recored", component: DetailRecored, exact: true },
  { path: "/history", component: History, exact: true },
  { path: "/home", component: Home, exact: true },
  { path: "/planning", component: Planning, exact: true },
  { path: "/record", component: Record, exact: true },
]
