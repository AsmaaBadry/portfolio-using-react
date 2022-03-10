import React from 'react'

function AboutMe() {
  return (
    <div id='abot' className="container-fluid bg-secondary d-flex justify-content-around align-items-center">
      <div className="row ">
        <div className="col-lg-4 d-flex justify-content-around align-items-center">
          <h1>About me</h1>
        </div>
        <div className="col-lg-8">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio nam quaerat quos nisi alias
            voluptate quas tempora recusandae quia. Maiores vero culpa ex autem repudiandae placeat reprehenderit dolores
            reiciendis.</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio nam quaerat quos nisi alias
            voluptate quas tempora recusandae quia. Maiores vero culpa ex autem repudiandae placeat reprehenderit dolores
            reiciendis.</h3>
          <a download href="app.component.html" className="download-btn btn-lg bg-dark text-white "
          >Download Resume<i className="fa fa-downloud"></i></a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe