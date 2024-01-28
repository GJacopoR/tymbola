// import PlayerView from './player-view';

// export default PlayerView;

import { useAppSelector } from "../../slice/hooks";
import * as player from "../../slice/player-slice";
import PlayerViewComponent from "./player-view";

function PlayerView() {
  const cardsNumbers: player.PlayerNumber[][] = useAppSelector(
    player.selectCardsNumbers
  );

  // TODO: we should move this logic inside the slice
  const getCardStructure = (
    card: player.PlayerNumber[]
  ): player.PlayerNumber[][] => {
    const upperRow: player.PlayerNumber[] = Array.from(
      { length: 9 },
      (_, i) => ({
        column: i + 1,
        checked: false,
        value: 0,
      })
    );
    const middleRow: player.PlayerNumber[] = Array.from(
      { length: 9 },
      (_, i) => ({
        column: i + 1,
        checked: false,
        value: 0,
      })
    );
    const lowerRow: player.PlayerNumber[] = Array.from(
      { length: 9 },
      (_, i) => ({
        column: i + 1,
        checked: false,
        value: 0,
      })
    );

    for (let i = 0; i < card.length; i++) {
      if (i % 3 === 0) {
        upperRow[
          upperRow.findIndex((number) => number.column === card[i].column)
        ] = card[i];
        middleRow[
          middleRow.findIndex((number) => number.column === card[i + 1].column)
        ] = card[i + 1];
        lowerRow[
          lowerRow.findIndex((number) => number.column === card[i + 2].column)
        ] = card[i + 2];
      }
    }

    return [upperRow, middleRow, lowerRow];
  };

  return (
    <PlayerViewComponent
      cardsNumbers={cardsNumbers}
      getCardStructure={getCardStructure}
    />
  );
}

export default PlayerView;
