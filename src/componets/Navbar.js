import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.aboutText}</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


// this is to manage props data type 
Navbar.propTypes = {
    title : PropTypes.string.isRequired, // this will throw error if don't pass title if there is no default props
    aboutText: PropTypes.string
}

// this is to set the default value of props if it is not provided by user
Navbar.defaultProps = {
    title: "Default Title",
    aboutText:"Default AboutText"
    }







