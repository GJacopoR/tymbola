import CallerCardComponent from "./caller-card";
import * as caller from "../../slice/caller-slice";
import { useAppSelector } from "../../slice/hooks";

interface CallerCardProps {
  callerCard: number[];
}

function CallerCard({ callerCard }: CallerCardProps) {
  const history: caller.TombolaNumber[] = useAppSelector(caller.selectHistory);

  return <CallerCardComponent boxes={callerCard} history={history} />;
}

export default CallerCard;
