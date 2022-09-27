import { Component } from 'react';

export default class PokemonInfo extends Component {

  state = {
    pokemon: null,
    loading: false,
    error: null,
    // status: 'idle' // 'pending', 'resolved', 'rejected'
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.PokemonNameRequest !== this.props.PokemonNameRequest) {
      console.log("Змінилось ім'я Покемона");
      // console.log("prevProps.PokemonNameRequest", prevProps.PokemonNameRequest);
      // console.log("this.props.PokemonNameRequest", this.props.PokemonNameRequest);

      this.setState({ loading: true, pokemon: null });

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
                .then(pokemon => this.setState({ pokemon: pokemon }))
                .catch(error => this.setState({ error }))
                .finally(() => this.setState({ loading: false }))
                // .then(console.log);
      }, 2000)
    }
  }

  render() {
    // const { loading, pokemon } = this.state;
    // const { PokemonNameRequest } = this.props;

    return (
      <div>
        <h1>PokemonInfo</h1>
        {this.state.error && <div>{this.state.error.message}</div>}
        {this.state.loading && <div>Завантажуємо...</div>}
        {!this.props.PokemonNameRequest && <div>Введіть ім'я Покемона</div>}
        {this.state.pokemon &&
          <div>
            <p>Name: {this.state.pokemon.name}</p>
            <img
              src={this.state.pokemon.sprites.other['official-artwork'].front_default}
              alt={this.state.pokemon.name}
              width="240"
            ></img>
          </div>}
      </div>
    )
  }
}