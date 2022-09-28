import imageError from '../../images/error.jpg';

export default function PokemonViewError({ message }) {
  return (
    <div role="alert">
      <img
        src={imageError}
        alt="sadcat"
        width="240"
      />
      <p>{message}</p>
    </div>
  );
}
