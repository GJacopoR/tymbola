import BackButton from "../../components/back-button";
import Card from "../../components/card";
import * as player from "../../slice/player-slice";
import PageTransition from "../../assets/page-transition";
import classes from "./player-view.module.scss";
import Button from "../../components/button";
import SaveCardsModal from "../../components/save-cards-modal";

interface PlayerViewProps {
  cardsStructure: player.PlayerNumber[][][];
  onSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // getCardStructure: (card: player.PlayerNumber[]) => player.PlayerNumber[][];
}

function PlayerView({
  cardsStructure,
  onSaveClick,
}: PlayerViewProps): JSX.Element {
  return (
    <PageTransition isDirectionBack={true}>
      <section className={classes.viewContainer}>
        <BackButton className={classes.backButton} size="small" />
        <Button
          className={classes.saveButton}
          onClick={onSaveClick}
          children={
            <svg
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ff0000"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6.75 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H6V15C6 13.7574 7.00736 12.75 8.25 12.75H15.75C16.9926 12.75 18 13.7574 18 15V21H18.25C19.7688 21 21 19.7688 21 18.25V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4114 3.35079 16.5991 3.00947 15.75 3.00019V7.5C15.75 8.74264 14.7426 9.75 13.5 9.75H9C7.75736 9.75 6.75 8.74264 6.75 7.5V3Z"
                  fill="#ff0000"
                ></path>
                <path
                  d="M14.25 3V7.5C14.25 7.91421 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5V3H14.25Z"
                  fill="#ff0000"
                ></path>
                <path
                  d="M16.5 21V15C16.5 14.5858 16.1642 14.25 15.75 14.25H8.25C7.83579 14.25 7.5 14.5858 7.5 15V21H16.5Z"
                  fill="#ff0000"
                ></path>
              </g>
            </svg>
          }
        />

        <main className={classes.cardsContainer}>
          {cardsStructure.map((cardStructure, i) => (
            <Card key={i + "_player_card"} cardStructure={cardStructure} />
          ))}
        </main>

        <SaveCardsModal />
      </section>
    </PageTransition>
  );
}

export default PlayerView;
