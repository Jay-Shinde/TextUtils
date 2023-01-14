import React from 'react'
// import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <div data-bs-theme={`${props.mode}`}><nav className ="navbar navbar-expand-lg bg-body-tertiary " >
    <div className ="container-fluid">
      <a className ="navbar-brand" href="\">{props.Heading}</a>
      <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className ="navbar-toggler-icon"></span>
      </button>
      <div className ="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
          <li className ="nav-item">
            <a className ="nav-link active" aria-current="page" href="\">{props.About}</a>
          </li>
         </ul>
        <form className ="d-flex" role="search">
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'Light':'Dark'}Mode</label>
</div>
         </form>
      </div>
    </div>
  </nav>
  </div>
  )
}
// Navbar.propTypes = {
//     About: PropTypes.string.isRequired,
//     Heading: PropTypes.string
//   }
// Navbar.defaultProps = {
//     Heading:"title here",
//     About: "about here"

// }
  

export default Navbar