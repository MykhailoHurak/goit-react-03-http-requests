import { Component } from 'react';

export default class App extends Component {

  state = {
    pokemon: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
  
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(result => result.json())
      .then((pokemon) => (this.setState({ pokemon })))
      .finally(() => (this.setState({ loading: false })))
  }

  render() {
    return (
      // <div>APP</div>
      <div>
        {this.state.loading && <h1>Loading...</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
      </div>
    )
  }
}