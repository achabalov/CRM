import React from 'react'

export default function Profile() {
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

            <ul id='dropdown' className='dropdown-content'>
              <li>
                <a href=" " className="black-text">
                  <i className="material-icons">account_circle</i>Профиль
                </a>
              </li>
              <li className="divider" tabindex="-1"></li>
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
        <a href=" " className="waves-effect waves-orange pointer">Счет</a>
      </li>
      <li>
        <a href=" " className="waves-effect waves-orange pointer">История</a>
      </li>
      <li>
        <a href=" " className="waves-effect waves-orange pointer">Планирование</a>
      </li>
      <li>
        <a href=" " className="waves-effect waves-orange pointer">Новая запись</a>
      </li>
      <li>
        <a href=" " className="waves-effect waves-orange pointer">Категории</a>
      </li>
    </ul>

    <main className="app-content">
      <div className="app-page">

<div>
  <div className="page-title">
    <h3>Профиль</h3>
  </div>

  <form className="form">
    <div className="input-field">
      <input
          id="description"
          type="text"
      />
      <label for="description">Имя</label>
      <span
            className="helper-text invalid">name</span>
    </div>

    <button className="btn waves-effect waves-light" type="submit">
      Обновить
      <i className="material-icons right">send</i>
    </button>
  </form>
</div>

</div>
</main>

<div className="fixed-action-btn">
  <a className="btn-floating btn-large blue" href=" ">
    <i className="large material-icons">add</i>
  </a>
</div>
</div> 
    )
}
