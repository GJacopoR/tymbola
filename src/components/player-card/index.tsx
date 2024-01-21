import PlayerCardComponent from "./player-card";
import * as caller from "../../slice/caller-slice";
import { useAppSelector } from "../../slice/hooks";

interface PlayerCardProps {
  playerCard: number[];
}

function PlayerCard({ playerCard }: PlayerCardProps) {
  const history: caller.TombolaNumber[] = useAppSelector(caller.selectHistory);

  return <PlayerCardComponent boxes={playerCard} history={history} />;
}

export default PlayerCard;
