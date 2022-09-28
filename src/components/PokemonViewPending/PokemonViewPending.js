import { ImSpinner } from 'react-icons/im';
import PokemonViewData from 'components/PokemonViewData/PokemonViewData';
import imagePending from '../../images/pending.png';

import './PokemonViewPending.css';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PokemonViewPending({ PokemonNameRequest }) {
  const pokemon = {
    name: PokemonNameRequest,
    sprites: {
      other: {
        'official-artwork': {
          front_default: imagePending,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="PokemonViewPending__iconSpin" />
        Завантажуємо...
      </div>
      <PokemonViewData pokemon={pokemon} />
    </div>
  );
}
