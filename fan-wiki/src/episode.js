import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { withRouter, useHistory } from "react-router-dom";
class Episode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: [],
      // here we recieve data sent by history.push in previous location by this.props.location
      data: this.props.location
    };
  }

  // this function fetches the given api, sets the state and calls render by life cycle.
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(episode => {
        this.setState({ episode: episode.results });
      })
      .catch(console.log);
  }

  render() {
    var episode = this.state.episode;
    var data = this.state.data;
    // css and mapping is done to create the given layout using fetched data.
    return (
      <div style={{ backgroundColor: "white", padding: "20px" }}>
        <h1>Episode- {data.name}</h1>
        <hr style={{ backgroundColor: "black", margin: 0 }} />
        <div style={{ margin: "20px" }}>
          <div>
            <p>
              <strong>Type : </strong>

              {data.air_date}
            </p>
            <p>
              <strong>Dimension : </strong>
              {data.episodeNo}
            </p>
            <p>
              <strong>Created : </strong>
              Friday Nov 10 2017
            </p>
          </div>
        </div>
        <strong>Characters</strong>

        <div style={{ marginLeft: "20px" }}>
          {episode.map(episode => (
            <table>
              <tr>
                <td>{episode.id}.</td>
                <td>
                  <Link to="/episode">
                    <span>{episode.name}</span>
                  </Link>
                </td>
              </tr>
            </table>
          ))}
        </div>
      </div>
    );
  }
}
// using withRouter is very important here as without wraping the component in it the data from previous loc cannot be received.
export default withRouter(Episode);
