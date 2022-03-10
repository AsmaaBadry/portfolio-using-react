import React from 'react'
import "./Skills.css"
function Skills() {
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-light ">
        <div className="row">
          <div>
            <h1>skills </h1>
          </div>
          <div className="p-5">
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ipsam neque nulla harum qui beatae magnam quisquam saepe,
              reiciendis quos cumque recusandae ex veniam. Veritatis quas maiores,
              tenetur nisi repellat reiciendis?</h3>
          </div>
        </div>

        <div className="col-lg-6">
          <h2 > MY FOCUS </h2>
          <div className="container">
            <div className="row">
              <div className="col-5 text-align: center;">
                <h3 style={{ textDecoration: "solid", fontStyle: "italic" }}>
                  front end <br />
                  node <br />
                  bootstrsp <br />
                  mango <br />
                  scss <br />
                  angular <br />
                </h3>
              </div>

              <div className="col-7 container-fluid" style={{ padding: "-1px" }}>

                <div className="progress m-3" style={{ height: "20px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <div className="progress m-3" style={{ height: "20px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="100" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <div className="progress m-3" style={{ height: "20px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <div className="progress m-3" style={{ height: "20px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>

                <div className="progress m-3" style={{ height: "20px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <div className="progress m-3" style={{ height: "20px" }}>
                  <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills