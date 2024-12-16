import { useEffect, useState } from "react";
import { CharacterInterface } from "../../Interfaces/CharacterInterface";
import { Character } from "./Character";
import "./Character.css"

export const CharacterContainer: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);
  useEffect(() => {
    setCharacters([
      {
        name: "Jon Snow",
        house: "Stark",
        quote: "Winter is coming",
        weapon: "sword",
      },
      {
        name: "Tyrion Lannister",
        house: "Lannister",
        quote: "I drink and I know things",
        weapon: "wit",
      },
      {
        name: "Gendry",
        house: "Baratheon",
        quote: "I don't have a plan",
        weapon: "hammer",
      },
    ]);
  }, []);

  return (
    <>
      <h2>Character Container</h2>
      <div className="list-characters">
        {characters.map((character: CharacterInterface) => {
          return <Character {...character} />;
        })}
      </div>
    </>
  );
};
