import { useAppSelector } from "../../slice/hooks";
import { PlayerNumber } from "../../slice/player-slice";
import * as player from "../../slice/player-slice";
import CardComponent from "./card";

function Card() {
  // const cardStructure:number[][] = Array.from({ length: 3 }, () => Array(9).fill(null))
  const cardsStructure: PlayerNumber[][] = useAppSelector(
    player.selectCardsStructure
  );

  console.log(cardsStructure);

  return <CardComponent structure={cardsStructure} />;
}

export default Card;

// import Card from "./card";

// export default Card;
