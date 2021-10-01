import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Auth } from "../../App";

export default function Navbar({setShow}) {

  const ref = useRef(null);
  const setAuth = useContext(Auth)
  const auth = useContext(Auth);
  
  const changeLogout = () => {
    setAuth(prev=> !prev)
  }
  
  const [date, setDate] = useState(new Date().toString());
  useEffect(() => {
    const interval = setInterval(()=> {
      setDate(new Date().toString())
    }, 1000)
    const dropdown = window?.M?.Dropdown.init(ref.current)
    return () => {
      clearInterval(interval)
      if(dropdown && dropdown.destroy) {
        dropdown.destroy()
      }
    }
  }, [])
  
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
          <span className="black-text">{date}</span>
        </div>

        <ul className="right hide-on-small-and-down">
          <li>
            <a
              className="dropdown-trigger black-text"
              href=" "
              data-target="dropdown"
              ref={ref}
              >
              USER NAME
              <i 
              className="material-icons right"
              >arrow_drop_down</i>
            </a>

            <ul id="dropdown" className="dropdown-content">
              <li>
                <NavLink to="/profile" className="black-text">
                  <i className="material-icons">account_circle</i>Профиль
                </NavLink>
              </li>
              <li className="divider" tabIndex="-1"></li>
              <li>
              <NavLink to="#" onClick={changeLogout} className="black-text">
                  <i className="material-icons">assignment_return</i>Выйти
                </NavLink>
                {auth ? <Redirect to='/login' /> : '' }
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
