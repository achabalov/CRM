import React from "react";

export default function Planning() {
  return (
    <div>
          <div>
            <div className="page-title">
              <h3>Планирование</h3>
              <h4>12 212</h4>
            </div>

            <section>
              <div>
                <p>
                  <strong>Девушка:</strong>
                  12 122 из 14 0000
                </p>
                <div className="progress">
                  <div className="determinate green" style={{width: '40%'}}></div>
                </div>
              </div>
            </section>
          </div>

      <div className="fixed-action-btn">
        <a className="btn-floating btn-large blue" href=" ">
          <i className="large material-icons">add</i>
        </a>
      </div>
    </div>
  );
}
