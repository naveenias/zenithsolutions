import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../styles/style.css";

const Navbar = () => {
  const handleNavLinkClick = () => {
    const navbarToggler = document.getElementById('navbarCollapse');
    if (navbarToggler) {
      navbarToggler.classList.remove('show'); // Collapse the navbar
    }
  };

  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 navbar-color">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="m-0">Zenith solutionz</h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink exact to="/" className="nav-item nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Home
            </NavLink>
            <NavLink exact to="/aboutus" className="nav-item nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              About
            </NavLink>
            <NavLink exact to="/services" className="nav-item nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Service
            </NavLink>
            <NavLink exact to="/contactus" className="nav-item nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;