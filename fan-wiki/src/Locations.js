import React, { Component } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.css";
import Res from "./res";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Earth (C-137)",
          type: "Planet",
          dimension: "Dimension C-137",
          residents: [
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/45",
            "https://rickandmortyapi.com/api/character/71",
            "https://rickandmortyapi.com/api/character/82",
            "https://rickandmortyapi.com/api/character/83",
            "https://rickandmortyapi.com/api/character/92",
            "https://rickandmortyapi.com/api/character/112",
            "https://rickandmortyapi.com/api/character/114",
            "https://rickandmortyapi.com/api/character/116",
            "https://rickandmortyapi.com/api/character/117",
            "https://rickandmortyapi.com/api/character/120",
            "https://rickandmortyapi.com/api/character/127",
            "https://rickandmortyapi.com/api/character/155",
            "https://rickandmortyapi.com/api/character/169",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/179",
            "https://rickandmortyapi.com/api/character/186",
            "https://rickandmortyapi.com/api/character/201",
            "https://rickandmortyapi.com/api/character/216",
            "https://rickandmortyapi.com/api/character/239",
            "https://rickandmortyapi.com/api/character/271",
            "https://rickandmortyapi.com/api/character/302",
            "https://rickandmortyapi.com/api/character/303",
            "https://rickandmortyapi.com/api/character/338",
            "https://rickandmortyapi.com/api/character/343",
            "https://rickandmortyapi.com/api/character/356",
            "https://rickandmortyapi.com/api/character/394"
          ]
        }
      ]
    };
    // binding the updateState fun is very important as in this function we use this pointer hense bind and specify
    this.updateState = this.updateState.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/location/")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.results });
      })
      .catch(console.log);
  }
  // history.push sets path to navigate to location and passes required params
  updateState(id, name, type, dimension, residents) {
    this.props.history.push({
      pathname: "/res",
      id: id,
      name: name,
      type: type,
      dimension: dimension,
      residents: residents
    });
  }
  render() {
    const data = this.state.data;
    console.log(data[0].id);
    return (
      <BrowserRouter history="browserHistory">
        <div style={{ backgroundColor: "white", marginTop: "0px" }}>
          <div style={{ margin: "20px", marginTop: "0px" }}>
            <div>
              <h1>Locations</h1>
              <hr
                style={{
                  margin: "0px",
                  backgroundColor: "black",
                  marginBottom: "20px"
                }}
              />
            </div>

            <div>
              <div className="row">
                {data.map(data => (
                  <div className="col-sm-3" style={{ paddingTop: "8px" }}>
                    <div className="card">
                      <Link to={"/res"}>
                        <span
                          className="card-deck"
                          onClick={this.updateState.bind(
                            this,
                            data.id,
                            data.name,
                            data.type,
                            data.dimension,
                            data.residents
                          )}
                        >
                          <div className="card text-center">
                            <div className="card-header">{data.type}</div>
                            <div className="card-body">{data.name}</div>

                            <div className="card-footer text-muted">
                              {data.residents.length}
                            </div>
                          </div>
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(Locations);
