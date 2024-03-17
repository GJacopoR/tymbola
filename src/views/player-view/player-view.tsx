import BackButton from "../../components/back-button";
import Card from "../../components/card";
import * as player from "../../slice/player-slice";
import PageTransition from "../../assets/page-transition";
import classes from "./player-view.module.scss";
import Button from "../../components/button";
import SaveCardsModal from "../../components/save-cards-modal";
import RestartModal from "../../components/restart-modal";
import { SMALL_DESKTOP_MIN_WIDTH } from "../../App";
import Fireworks, { FireworksOptions } from "@fireworks-js/react";

interface PlayerViewProps {
  cardsStructure: player.PlayerNumber[][][];
  fireworksOptions: FireworksOptions;
  isRestartModalOpen: boolean;
  onRestartClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setIsTombola: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setIsNotTombola: (e: React.MouseEvent<HTMLButtonElement>) => void;
  winnerMode: player.WinnerMode;
  // getCardStructure: (card: player.PlayerNumber[]) => player.PlayerNumber[][];
}

function PlayerView({
  cardsStructure,
  fireworksOptions,
  isRestartModalOpen,
  onRestartClick,
  onSaveClick,
  setIsTombola,
  setIsNotTombola,
  winnerMode,
}: PlayerViewProps): JSX.Element {
  const isDesktopMode = window.innerWidth > SMALL_DESKTOP_MIN_WIDTH;

  const { isTombola, isWinnerMode, winningCard } = winnerMode;

  return (
    <PageTransition isDirectionBack={true}>
      <section className={classes.viewContainer}>
        <BackButton
          className={classes.backButton}
          size={isDesktopMode ? "large" : "small"}
        />
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

        <main className={classes.bodyContainer}>
          {isTombola && (
            <Fireworks
              options={fireworksOptions}
              className={classes.fireworks}
            />
          )}

          <section className={classes.cardsContainer}>
            {cardsStructure.map((cardStructure, i) =>
              isWinnerMode && winningCard === i ? (
                <div className={classes.cardContainer} key={i + "_player_card"}>
                  <Card cardStructure={cardStructure} />

                  <div
                    className={
                      i === cardsStructure.length - 1
                        ? classes.isWinnerModeReversedContainer
                        : classes.isWinnerModeContainer
                    }
                  >
                    <p className={classes.isWinnerModeQuestion}>
                      Hai davvero fatto tombola?
                    </p>
                    <Button
                      label="si"
                      className={classes.isWinnerModeButtons}
                      onClick={setIsTombola}
                    />
                    <Button
                      label="no"
                      className={classes.isWinnerModeButtons}
                      onClick={setIsNotTombola}
                    />
                  </div>
                </div>
              ) : (
                <Card key={i + "_player_card"} cardStructure={cardStructure} />
              )
            )}
          </section>

          <Button
            className={classes.restartButton}
            // disabled={!history.length}
            label="FINE PARTITA"
            onClick={onRestartClick}
            children={
              <svg
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-12.14 -12.14 327.88 327.88"
                xmlSpace="preserve"
                fill={history.length ? "#ff0000" : "#f08080"}
                stroke={history.length ? "#ff0000" : "#f08080"}
                strokeWidth="7.589924999999999"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="1.214388"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    style={
                      history.length ? { fill: "#ff0000" } : { fill: "#f08080" }
                    }
                    d="M57.866,268.881c25.982,19.891,56.887,30.403,89.369,30.402h0.002c6.545,0,13.176-0.44,19.707-1.308 c39.055-5.187,73.754-25.272,97.702-56.557c14.571-19.033,24.367-41.513,28.329-65.01c0.689-4.084-2.064-7.954-6.148-8.643 l-19.721-3.326c-1.964-0.33-3.974,0.131-5.595,1.284c-1.621,1.153-2.717,2.902-3.048,4.864 c-3.019,17.896-10.49,35.032-21.608,49.555c-18.266,23.861-44.73,39.181-74.521,43.137c-4.994,0.664-10.061,1-15.058,1 c-24.757,0-48.317-8.019-68.137-23.191c-23.86-18.266-39.18-44.73-43.136-74.519c-3.957-29.787,3.924-59.333,22.189-83.194 c21.441-28.007,54.051-44.069,89.469-44.069c24.886,0,48.484,7.996,68.245,23.122c6.55,5.014,12.43,10.615,17.626,16.754 l-36.934-6.52c-1.956-0.347-3.973,0.101-5.604,1.241c-1.631,1.141-2.739,2.882-3.085,4.841l-3.477,19.695 c-0.72,4.079,2.003,7.969,6.081,8.689l88.63,15.647c0.434,0.077,0.869,0.114,1.304,0.114c1.528,0,3.031-0.467,4.301-1.355 c1.63-1.141,2.739-2.882,3.084-4.841l15.646-88.63c0.721-4.079-2.002-7.969-6.081-8.69l-19.695-3.477 c-4.085-0.723-7.97,2.003-8.689,6.082l-6.585,37.3c-7.387-9.162-15.87-17.463-25.248-24.642 c-25.914-19.838-56.86-30.324-89.495-30.324c-46.423,0-89.171,21.063-117.284,57.787C6.454,93.385-3.878,132.123,1.309,171.178 C6.497,210.236,26.583,244.933,57.866,268.881z"
                  ></path>
                </g>
              </svg>
            }
          />
        </main>

        {isRestartModalOpen && <RestartModal />}
        {isRestartModalOpen || <SaveCardsModal />}
      </section>
    </PageTransition>
  );
}

export default PlayerView;
