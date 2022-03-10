import React from 'react'

function Footer() {
  return (
    <div className="container-fluid text-light bg-dark">
      <div className="row p-5">
        <div className="col-4">
          <h4>GET IN TOUCH</h4>
          <h5><i className="fa-solid fa-envelope"></i>asmaa@gmail.com</h5>
          <h5> <i className=" fa-address-card"></i> 01077777777</h5>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-outline-light">CONTACT ME</button>

        </div>
        <div id='foter' className="col-4">
          <h5><i className="fa-brands fa-linkedin"></i> <i className="fa-brands fa-facebook-square"></i> <i
            className="fa-brands fa-twitter"></i> </h5>
          <h6>copy right@<i className="fa-brands fa-github"></i>github</h6>

        </div>
      </div>
    </div>
  )
}

export default Footer