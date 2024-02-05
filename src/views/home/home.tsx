import { Link } from "react-router-dom";
import classes from "./home.module.scss";
import CardSelectorModal from "../../components/card-selector-modal";
import Button from "../../components/button";
import Header from "../../components/header";
import PageTransition from "../../assets/page-transition";

interface HomeComponentProps {
  isCallerGameOngoing: boolean;
  isPlayerGameOngoing: boolean;
  isModalOpen: boolean;
  onEndCallerGame: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onEndPlayerGame: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onModalOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Home({
  isCallerGameOngoing,
  isPlayerGameOngoing,
  isModalOpen,
  onEndCallerGame,
  onEndPlayerGame,
  onModalOpen,
}: HomeComponentProps): JSX.Element {
  return (
    <PageTransition>
      <>
        {/* <Route path="users/:id" element={<Users />} /> */}
        <header>
          <Header />
        </header>
        <main className={classes.buttons}>
          <Link to={"/tymbola/caller"} className={classes.link}>
            <Button
              className={classes.button}
              disabled={isCallerGameOngoing || isPlayerGameOngoing}
              label={"Tenitore \n (chi chiama)"}
            />
          </Link>

          <Button
            className={classes.button}
            disabled={isCallerGameOngoing || isPlayerGameOngoing}
            label={"Giocatore \n (chi spunta)"}
            onClick={onModalOpen}
          />
        </main>

        {(isCallerGameOngoing || isPlayerGameOngoing) &&
          !window.location.pathname.includes("player") && (
            <section className={classes.ongoingGameSection}>
              <svg
                fill="#ff0000"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-2A6 6 0 1 1 8 2a6 6 0 0 1 0 12zM7 9h2V4H7v5zm0 3h2v-2H7v2z"
                    fillRule="evenodd"
                  ></path>{" "}
                </g>
              </svg>
              <p>{`C'è una partita ${
                isCallerGameOngoing ? "tenitore" : "giocatore"
              } attualmente in corso.`}</p>
              <Button
                className={classes.button}
                label={"Termina partita"}
                onClick={
                  isCallerGameOngoing ? onEndCallerGame : onEndPlayerGame
                }
              />
              <Link
                to={isCallerGameOngoing ? "/tymbola/caller" : "/tymbola/player"}
                className={classes.link}
              >
                <Button className={classes.button} label={"Vai alla partita"} />
              </Link>
            </section>
          )}

        <aside>{isModalOpen && <CardSelectorModal />}</aside>
      </>
    </PageTransition>
  );
}

export default Home;
