import { Link } from "react-router-dom";
import classes from "./home.module.scss";
import CardSelectorModal from "../../components/card-selector-modal";
import Button from "../../components/button";
import Header from "../../components/header";

interface HomeComponentProps {
  onModalOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Home({ onModalOpen }: HomeComponentProps) {
  return (
    <>
      {/* <Route path="users/:id" element={<Users />} /> */}
      <header>
        <Header />
      </header>
      <main className={classes.buttons}>
        <Link to={"/tymbola/caller"} className={classes.link}>
          <Button
            className={classes.button}
            label={"Tenitore \n (chi chiama)"}
          />
        </Link>

        <Button
          className={classes.button}
          label={"Giocatore \n (chi spunta)"}
          onClick={onModalOpen}
        />
      </main>

      <section>
        <CardSelectorModal />
      </section>
    </>
  );
}

export default Home;

// function getRandomNumbers(number: number) {
//   const repository: number[][] = Array.from(
//     { length: 9 },
//     (_, i) => (i + 1) * 10
//   ).map((value: number | number[]) => {
//     const currentArray: number[] = [];
//     for (let i = 1; i <= 10; i++) {
//       value === +value && currentArray.push(value - 10 + i);
//     }
//     return currentArray;
//   });

//   const allCards: number[][] = [];

//   for (let i = 0; i < number; i++) {
//     const currentCard: number[] = [];
//     repository.forEach((_, j) => {
//       const randomIndex = Math.floor(Math.random() * repository[j].length);
//       const currentNumber = repository[j].splice(randomIndex, 1);
//       currentCard.push(currentNumber[0]);
//     });
//     allCards.push(currentCard);
//   }

//   const remainings = repository.flat();

//   for (let i = 0; i < number; i++) {
//     while (allCards[i].length < 15) {
//       const selectedNumberIndex: number = Math.floor(
//         Math.random() * remainings.length
//       );
//       const selectedNumber: number = remainings.splice(
//         selectedNumberIndex,
//         1
//       )[0];
//       allCards[i].push(selectedNumber);
//     }
//   }

//   allCards.forEach((card) => card.sort((a, b) => a - b));

//   console.log(allCards, remainings);
// }

// getRandomNumbers(3);
