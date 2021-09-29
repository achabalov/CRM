import React from "react";

export default function DetailRecored() {
  return (
    <div>
      <nav classNameName="navbar orange lighten-1">
        <div classNameName="nav-wrapper">
          <div classNameName="navbar-left">
            <a href=" ">
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

      <ul className="sidenav app-sidenav open">
        <li>
          <a href=" " className="waves-effect waves-orange pointer">
            Счет
          </a>
        </li>
        <li>
          <a href=" " className="waves-effect waves-orange pointer">
            История
          </a>
        </li>
        <li>
          <a href=" " className="waves-effect waves-orange pointer">
            Планирование
          </a>
        </li>
        <li>
          <a href=" " className="waves-effect waves-orange pointer">
            Новая запись
          </a>
        </li>
        <li>
          <a href=" " className="waves-effect waves-orange pointer">
            Категории
          </a>
        </li>
      </ul>

      <main className="app-content">
        <div className="app-page">
          <div>
            <div>
              <div className="breadcrumb-wrap">
                <a href="/history" className="breadcrumb">
                  История
                </a>
                <a href=' ' className="breadcrumb">Расход</a>
              </div>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card red">
                    <div className="card-content white-text">
                      <p>Описание:</p>
                      <p>Сумма:</p>
                      <p>Категория:</p>

                      <small>12.12.12</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed-action-btn">
        <a className="btn-floating btn-large blue" href=" ">
          <i className="large material-icons">add</i>
        </a>
      </div>
    </div>
  );
}
