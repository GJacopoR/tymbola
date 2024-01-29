import { useAppSelector } from "../../slice/hooks";
import * as player from "../../slice/player-slice";
import PlayerViewComponent from "./player-view";

function PlayerView() {
  const cardsStructure: player.PlayerNumber[][][] = useAppSelector(
    player.selectCardsStructure
  );

  return <PlayerViewComponent cardsStructure={cardsStructure} />;
}

export default PlayerView;
