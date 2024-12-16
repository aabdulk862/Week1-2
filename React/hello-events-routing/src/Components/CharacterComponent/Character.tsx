//This will get rendered once for every Character in the Array in CharacterContainer

import { CharacterInterface } from "../../Interfaces/CharacterInterface";
import "./Character.css"

//This will take props of the Character Interface to render Character data
export const Character: React.FC<CharacterInterface> = (
  character: CharacterInterface
) => {
  //This component will render whatever character was passed in as props
  return (
    <>
      <div className="character">
        <h3>
          {character.name} belongs to house {character.house}
        </h3>
        <h4>Wielding {character.weapon}</h4>
        <h4>"{character.quote}"</h4>
        <hr />
      </div>
    </>
  );
};
