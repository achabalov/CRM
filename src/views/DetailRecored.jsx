import React from "react";

export default function DetailRecored() {
  return (
    <div>
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

      <div className="fixed-action-btn">
        <a className="btn-floating btn-large blue" href=" ">
          <i className="large material-icons">add</i>
        </a>
      </div>
    </div>
  );
}
