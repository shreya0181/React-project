import React, { Component } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // here we recieve data sent by history.push in previous location by this.props.location
      data: this.props.location,
      episode: []
    };
    // binding the updateState fun is very important as in this function we use this pointer hense bind and specify
    this.updateState = this.updateState.bind(this);
  }
  // this function fetches the given api, sets the state and calls render by life cycle.
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/episode/")
      .then(res => res.json())
      .then(episode => {
        this.setState({ episode: episode.results });
      })
      .catch(console.log);
  }
  // history.push sets path to navigate to location and passes required params
  updateState(id, name, air_date, episodeNo, characters) {
    this.props.history.push({
      pathname: "/episode",
      id: id,
      name: name,
      air_date: air_date,
      episodeNo: episodeNo,
      characters: characters
    });
  }

  render() {
    var data = this.state.data;
    var episode = this.state.episode;
    // css and mapping is done to create the given layout using fetched data.
    return (
      <BrowserRouter>
        <div
          className="container-fluid"
          style={{ backgroundColor: "white", padding: "9px" }}
        >
          <div className="container-fluid">
            <h1> Character - {data.name}</h1>
            <hr style={{ backgroundColor: "black", margin: 0 }}></hr>
          </div>
          <div className="row" style={{ marginLeft: "9px", marginTop: "50px" }}>
            <div className="col-sm-4">
              <img src={data.image}></img>
            </div>
            <div className="col-sm-8">
              <p>
                <strong>Species : </strong>
                {data.species}
              </p>
              <p>
                <strong>Status: </strong>
                {data.status}
              </p>
              <p>
                <strong>Gender : </strong>
                {data.gender}
              </p>
              <p>
                <strong>Origin : </strong>
                {data.origin}
              </p>
            </div>
          </div>
          <div style={{ marginLeft: "20px", marginTop: "20px" }}>
            <strong>
              <h4>Episodes</h4>
            </strong>
            <div style={{ marginLeft: "30px" }}>
              {episode.map(episode => (
                <table>
                  <tr>
                    <td>{episode.id}.</td>
                    <td>
                      <Link
                        to="/episode"
                        onClick={this.updateState.bind(
                          this,
                          episode.id,
                          episode.name,
                          episode.air_date,
                          episode.episode,
                          episode.characters
                        )}
                      >
                        <span>{episode.name}</span>
                      </Link>
                    </td>
                  </tr>
                </table>
              ))}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
// using withRouter is very important here as without wraping the component in it the data from previous loc cannot be received.
export default withRouter(Character);
