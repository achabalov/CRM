import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({show}) {
  return (
    <ul className={`sidenav app-sidenav ${show ? 'open': 'close full'}`}>
      <li>
        <NavLink to="/detail-recored" activeClassName='orange lighten-1' className="waves-effect waves-orange pointer">
          Счет
        </NavLink>
      </li>
      <li>
        <NavLink to="/history" activeClassName='orange lighten-1' className="waves-effect waves-orange pointer">
          История
        </NavLink>
      </li>
      <li>
        <NavLink to="/planning" activeClassName='orange lighten-1' className="waves-effect waves-orange pointer">
          Планирование
        </NavLink>
      </li>
      <li>
        <NavLink to="/record" activeClassName='orange lighten-1' className="waves-effect waves-orange pointer">
          Новая запись
        </NavLink>
      </li>
      <li>
        <NavLink to="categories" activeClassName='orange lighten-1' className="waves-effect waves-orange pointer">
          Категории
        </NavLink>
      </li>
    </ul>
  );
}
