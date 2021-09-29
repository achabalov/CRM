import React from "react";

export default function History() {
  return (
    <div>
      <nav className="navbar orange lighten-1">
        <div className="nav-wrapper">
          <div className="navbar-left">
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
            <div className="page-title">
              <h3>История записей</h3>
            </div>

            <div className="history-chart">
              <canvas></canvas>
            </div>

            <section>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Сумма</th>
                    <th>Дата</th>
                    <th>Категория</th>
                    <th>Тип</th>
                    <th>Открыть</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1212</td>
                    <td>12.12.32</td>
                    <td>name</td>
                    <td>
                      <span className="white-text badge red">Расход</span>
                    </td>
                    <td>
                      <button className="btn-small btn">
                        <i className="material-icons">open_in_new</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
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
