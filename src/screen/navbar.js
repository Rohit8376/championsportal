import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h5 className="navbar-brand" href="#">
      <b><span style={{color:"black"}}>Neo</span><span style={{color:"red"}}>SOFT</span></b> 
        </h5>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <b>
                  {/* Welcome */}
                  <i>
                    <span className="mx-3">
                      {localStorage.getItem("fname")}
                    </span>
                  </i>
                </b>{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
