import { Link } from "react-router-dom";
import classes from "./home.module.scss";
import CardSelectorModal from "../../components/card-selector-modal";
import Button from "../../components/button";
import Header from "../../components/header";
import PageTransition from "../../assets/page-transition";
import { AnimatePresence, motion } from "framer-motion";

interface HomeComponentProps {
  isCallerGameOngoing: boolean;
  isPlayerGameOngoing: boolean;
  onEndCallerGame: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onEndPlayerGame: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onGameReturn: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onModalOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Home({
  isCallerGameOngoing,
  isPlayerGameOngoing,
  onEndCallerGame,
  onEndPlayerGame,
  onGameReturn,
  onModalOpen,
}: HomeComponentProps): JSX.Element {
  return (
    <PageTransition>
      <main>
        {/* <Route path="users/:id" element={<Users />} /> */}
        <header>
          <Header />
        </header>
        <main className={classes.bodyContainer}>
          <section className={classes.startGameSection}>
            <section className={classes.buttons}>
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
            </section>
          </section>

          <AnimatePresence>
            {(isCallerGameOngoing || isPlayerGameOngoing) &&
              !window.location.pathname.includes("player") && (
                <motion.section
                  className={classes.ongoingGameSection}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <header>
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
                        <path
                          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-2A6 6 0 1 1 8 2a6 6 0 0 1 0 12zM7 9h2V4H7v5zm0 3h2v-2H7v2z"
                          fillRule="evenodd"
                        ></path>
                      </g>
                    </svg>

                    <h4 className={classes.alertTitle}>
                      {`C'è una partita ${
                        isCallerGameOngoing ? "tenitore" : "giocatore"
                      } attualmente in corso.`}
                    </h4>

                    {!isCallerGameOngoing && (
                      <p className={classes.alertSubTitle}>
                        Terminandola, eventuali cartelle non salvate andranno
                        perse.
                      </p>
                    )}
                  </header>

                  <Button
                    className={classes.button}
                    label={"Termina partita"}
                    onClick={
                      isCallerGameOngoing ? onEndCallerGame : onEndPlayerGame
                    }
                  />
                  <Button
                    className={classes.button}
                    label={"Vai alla partita"}
                    onClick={onGameReturn}
                  />
                </motion.section>
              )}
          </AnimatePresence>
        </main>
        <aside>
          <CardSelectorModal />
        </aside>
      </main>
    </PageTransition>
  );
}

export default Home;
