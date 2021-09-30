import React from "react";

export default function Profile() {
  return (
    <div>
          <div>
            <div className="page-title">
              <h3>Профиль</h3>
            </div>

            <form className="form">
              <div className="input-field">
                <input id="description" type="text" />
                <label for="description">Имя</label>
                <span className="helper-text invalid">name</span>
              </div>

              <button className="btn waves-effect waves-light" type="submit">
                Обновить
                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>

      <div className="fixed-action-btn">
        <a className="btn-floating btn-large blue" href=" ">
          <i className="large material-icons">add</i>
        </a>
      </div>
    </div>
  );
}
