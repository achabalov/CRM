import React from "react";

export default function Navbar({setShow, show}) {

  return (
    <nav className="navbar orange lighten-1">
      <div className="nav-wrapper">
        <div className="navbar-left">
          <a href=" " onClick={(e) => {
            e.preventDefault()
            setShow(prev=> !prev)
          }}>
            <i className="material-icons black-text">dehaze</i>
          </a>
          <span className="black-text">12.12.12</span>
        </div>

        <ul className="right hide-on-small-and-down">
          <li>
            <a
              className="dropdown-trigger black-text"
              href=" "
              data-target="dropdown"
            >
              USER NAME
              <i className="material-icons right">arrow_drop_down</i>
            </a>

            <ul id="dropdown" className="dropdown-content">
              <li>
                <a href=" " className="black-text">
                  <i className="material-icons">account_circle</i>Профиль
                </a>
              </li>
              <li className="divider" tabIndex="-1"></li>
              <li>
                <a href=" " className="black-text">
                  <i className="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
