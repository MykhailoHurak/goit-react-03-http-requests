import { Component } from 'react';
import PokemonViewError from 'components/PokemonViewError/PokemonViewError';
import PokemonViewData from 'components/PokemonViewData/PokemonViewData';
import PokemonViewPending from 'components/PokemonViewPending/PokemonViewPending';

export default class PokemonInfo extends Component {

  state = {
    pokemon: null,
    error: null,
    // loading: false, // його замінює
    status: 'idle' // 'pending', 'resolved', 'rejected'
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.PokemonNameRequest !== this.props.PokemonNameRequest) {
      console.log("Змінилось ім'я Покемона");
      // console.log("prevProps.PokemonNameRequest", prevProps.PokemonNameRequest);
      // console.log("this.props.PokemonNameRequest", this.props.PokemonNameRequest);

      this.setState({ status: 'pending' }); // loading: true, pokemon: null

      setTimeout(() => {
              fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.PokemonNameRequest}`)
                .then(response => {
                  if (response.ok) {
                    return response.json()
                  }
                  return Promise.reject(
                    new Error(`Немає Покемона з іменем ${this.props.PokemonNameRequest}`)
                  )
                })
                .then(pokemon => this.setState({ pokemon: pokemon, status: 'resolved' }))
                .catch(error => this.setState({ error: error, status: 'rejected' }))
                // .finally(() => this.setState({ loading: false })) // finally не потрібний, коли є status
                // .then(console.log);
      }, 2000)
    }
  }

  render() {
    // const { loading, pokemon } = this.state;
    // const { PokemonNameRequest } = this.props;

    if (this.state.status === 'idle') {
      return <div>Введіть ім'я Покемона</div>;
     }
    
    if (this.state.status === 'pending') {
      return <PokemonViewPending PokemonNameRequest={this.props.PokemonNameRequest} /> // <div>Завантажуємо...</div>
     }
    
    if (this.state.status === 'rejected') {
      return <PokemonViewError message={this.state.error.message} /> // <div>{this.state.error.message}</div>
     }
    
    if (this.state.status === 'resolved') {
      return <PokemonViewData pokemon={this.state.pokemon} />
      // (<div>
      //       <p>Name: {this.state.pokemon.name}</p>
      //       <img
      //         src={this.state.pokemon.sprites.other['official-artwork'].front_default}
      //         alt={this.state.pokemon.name}
      //         width="240"
      //       />
      //   </div>);
    }

    // return (
    //   <div>
    //     <h1>PokemonInfo</h1>
    //     {this.state.error && <div>{this.state.error.message}</div>}
    //     {this.state.loading && <div>Завантажуємо...</div>}
    //     {!this.props.PokemonNameRequest && <div>Введіть ім'я Покемона</div>}
    //     {this.state.pokemon &&
    //       <div>
    //         <p>Name: {this.state.pokemon.name}</p>
    //         <img
    //           src={this.state.pokemon.sprites.other['official-artwork'].front_default}
    //           alt={this.state.pokemon.name}
    //           width="240"
    //         ></img>
    //       </div>}
    //   </div>
    // )
  }
}