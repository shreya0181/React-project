import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
var style = {
  height: 40
};
class Header extends Component {
  render() {
    return (
      <div style={{ marginTop: "0px" }}>
        <nav
          style={{ backgroundColor: "#DCDCDC" }}
          className="navbar navbar-expand-lg navbar-light "
        >
          <a className="navbar-brand" href="#">
            <img
              style={style}
              src="https://upload.wikimedia.org/wikipedia/en/3/32/Rick_and_Morty_opening_credits.jpeg"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form class="form-inline my-2 my-lg-0">
              <div className="row" style={{ marginLeft: 900 }}>
                <div
                  style={{
                    marginRight: 0,
                    BorderRadiusTopleft: "50px",
                    backgroundColor: "#C0C0C0",
                    paddingTop: 8,
                    color: "black",
                    fontSize: "5"
                  }}
                  className="col-sm-4 badge badge-secondary"
                >
                  <h6>Search By</h6>
                </div>
                <input
                  style={{ width: "170" }}
                  className="form-control col-sm-6"
                  //   class="form-control mr-sm-2"
                  type="search"
                  placeholder="Episode or Charater or Location"
                />
                <button
                  className="col-sm-6"
                  type="submit"
                  class="btn btn-default"
                >
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
