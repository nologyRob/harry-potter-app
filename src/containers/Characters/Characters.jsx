import React from "react";
import "./Characters.scss";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

const Characters = (props) => {
  const { characterArr } = props;

  const characterJSX = characterArr.map((character, index) => (
    <CharacterCard
      name={character.name}
      house={character.house}
      image={character.image}
      key={index + 1}
    />
  ));
  return <div className="characters">{characterJSX}</div>;
};

export default Characters;
