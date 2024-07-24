// import React from 'react'
import styles from "./Pokecard.module.css";

interface Pokecard {
  id: number;
  name: string;
  type: string;
  exp: number;
}

//function takes a number and adds 0 at the start to be 3 indexed
const padToThree = (number: number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

const Pokecard = (props: Pokecard) => {
  // const POKE_API =
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  const imgSrc = `${POKE_API}${padToThree(props.id)}.png`;

  return (
    <div className={styles.Pokecard}>
      <h1 className={styles.title}>{props.name}</h1>
      <img src={imgSrc} alt="pokemon_avatar" />
      <div>Type: {props.type}</div>
      <div>Exp: {props.exp}</div>
    </div>
  );
};

export default Pokecard;
