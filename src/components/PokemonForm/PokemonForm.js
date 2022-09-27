import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20, marginTop: 20, marginLeft: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonNameForm: '',
  };

  handleNameChange = event => {
    this.setState({ pokemonNameForm: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonNameForm.trim() === '') {
      // alert("Введіть і'мя Покемона");
      // toast("Введіть і'мя Покемона");
      toast.error('🦄 Введіть імя Покемона!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    this.props.onSubmitPokemonForm(this.state.pokemonNameForm);

    this.setState({ pokemonNameForm: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonNameForm}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}
