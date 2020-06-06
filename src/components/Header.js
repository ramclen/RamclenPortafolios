import React from 'react'
import Navbar from './Navbar'
import Icon from './Icon'

const Header = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="container">
        <div className="row header">
          <div id="info" className="col-lg-6 col-12">
            <h1 id="myname">Cristopher Lopez Santana</h1>
            <h2>Software Engineer</h2>
            <div className="row mt-3">
              <Icon
                icon="linkedin"
                link="https://www.linkedin.com/in/cristopherlopez"
              />
              <Icon
                icon="github"
                link="https://github.com/ramclen"
              />
              <Icon
                icon="dev"
                link="https://dev.to/ramclen"
              />
              <Icon
                icon="mail"
                link="mailto:cristopher.lopezsantana@gmail.com"
              />
              <Icon
                icon="cv"
                link="https://ramclen.best/about-me"
              />
            </div>
          </div>
          <div id="photo" className="col-5 text-center mx-auto">
            <img id="yo" src="./img/yo.png" className="img-fluid z-depth-1 rounded-circle"
              alt="Me" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header