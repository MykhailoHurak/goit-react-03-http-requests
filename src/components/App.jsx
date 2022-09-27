import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import PokemonForm from './PokemonForm/PokemonForm';
import PokemonInfo from './PokemonInfo/PokemonInfo';

export default class App extends Component {

  state = {
    pokemonNameRequest: ""
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  
  //   fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  //     .then(result => result.json())
  //     .then((pokemon) => (this.setState({ pokemon })))
  //     .finally(() => (this.setState({ loading: false })))
  // }

  handleSubmitPokemonForm = (pokemonNameRequest) => {
    console.log(pokemonNameRequest);
    this.setState({ pokemonNameRequest });
  };

  render() {
    return (
      <div>
        <PokemonForm
          onSubmitPokemonForm={this.handleSubmitPokemonForm}
        />

        <PokemonInfo
          PokemonNameRequest={this.state.pokemonNameRequest}
        />

        <ToastContainer
          autoClose={5000}
        />

        {/* {this.state.loading && <h1>Loading...</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>} */}
      </div>
    )
  }
}