import React, { Component } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class Res extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // here we recieve data sent by history.push in previous location by this.props.location
      data: this.props.location,
      id: 1,
      character: []
    };
    // binding the updateState fun is very important as in this function we use this pointer hense bind and specify
    this.updateState = this.updateState.bind(this);
  }
  // this function fetches the given api, sets the state and calls render by life cycle.
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(res => res.json())
      .then(character => {
        this.setState({ character: character.results });
      })
      .catch(console.log);
  }
  // history.push sets path to navigate to location and passes required params
  updateState(name, species, status, gender, origin, image, episode) {
    this.props.history.push({
      pathname: "/character",
      name: name,
      species: species,
      status: status,
      gender: gender,
      origin: origin,
      image: image,
      episode: episode
    });
  }

  render() {
    var data = this.state.data;
    var character = this.state.character;
    var id = this.state.id;
    // css and mapping is done to create the given layout using fetched data.
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: "white", padding: "20px" }}>
          <h1>Location- {data.name}</h1>
          <hr style={{ backgroundColor: "black", margin: 0 }} />
          <div style={{ margin: "20px" }}>
            <div>
              <p>
                <strong>Type : </strong>
                {data.type}
              </p>
              <p>
                <strong>Dimension : </strong>
                {data.dimension}
              </p>
              <p>
                <strong>Created : </strong>
                Friday Nov 10 2017
              </p>
            </div>
          </div>
          <strong>Residents</strong>
          <div style={{ marginLeft: "20px" }}>
            {character.map(character => (
              <table>
                <tr>
                  <td>{character.id}.</td>
                  <td>
                    <Link
                      to="/character"
                      onClick={this.updateState.bind(
                        this,
                        character.name,
                        character.species,
                        character.status,
                        character.gender,
                        character.origin.name,
                        character.image,
                        character.episode
                      )}
                    >
                      <span>{character.name}</span>
                    </Link>
                  </td>
                </tr>
              </table>
            ))}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
// using withRouter is very important here as without wraping the component in it the data from previous loc cannot be received.
export default withRouter(Res);
