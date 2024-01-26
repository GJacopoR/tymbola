import Number from "../number";
import { PlayerNumber } from "../../slice/player-slice";
import classes from "./card.module.scss";

interface CardStructure {
  structure: PlayerNumber[][];
}

function Card({ structure }: CardStructure) {
  console.log(structure);

  //   function getStructure(card: PlayerNumber[]) {
  //     const upperRow: PlayerNumber[] = [];
  //     const middleRow: PlayerNumber[] = [
  //       //   {
  //       //     coordinateX: 1,
  //       //     checked: false,
  //       //     coordinateY: 2,
  //       //     value: 0,
  //       //   },
  //     ];
  //     const lowerRow: PlayerNumber[] = [
  //       //   {
  //       //     coordinateX: 1,
  //       //     checked: false,
  //       //     coordinateY: 3,
  //       //     value: 0,
  //       //   },
  //       //   {
  //       //     coordinateX: 2,
  //       //     checked: false,
  //       //     coordinateY: 3,
  //       //     value: 0,
  //       //   },
  //     ];

  //     for (let i = 0; i < card.length; i++) {
  //       //   if (i % 3 === 0) {
  //       //     if (upperRow.length === card[i].coordinateX - 1) {
  //       //       console.log(upperRow.length, card[i].coordinateX - 1);
  //       //       upperRow.push(card[i]);
  //       //     } else {
  //       //       for (let j = 0; j < card[i].coordinateX - 1 - upperRow.length; j++) {
  //       //         upperRow.push({
  //       //           coordinateX: j + 1,
  //       //           checked: false,
  //       //           coordinateY: 1,
  //       //           value: 0,
  //       //         });
  //       //       }
  //       //       //   upperRow.length = i - 1;
  //       //       upperRow.push(card[i]);
  //       //     }

  //       //     if (middleRow.length === card[i + 1].coordinateX - 1) {
  //       //       middleRow.push(card[i + 1]);
  //       //     } else {
  //       //       for (let j = 0; j < card[i].coordinateX - 1 - middleRow.length; j++) {
  //       //         middleRow.push({
  //       //           coordinateX: j + 1,
  //       //           checked: false,
  //       //           coordinateY: 1,
  //       //           value: 0,
  //       //         });
  //       //       }
  //       //       //   middleRow.length = i; // - 1;
  //       //       middleRow.push(card[i + 1]);
  //       //     }
  //       //     // upperRow.push(card[i]);
  //       //     // middleRow.push(card[i + 1]);
  //       //     // lowerRow.push(card[i + 2]);
  //       //   }

  //       if (i % 3 === 0) {
  //         upperRow.push(card[i]);
  //         if (card[i].coordinateX < card[i + 1].coordinateX) {
  //           middleRow.push({
  //             coordinateX: card[i].coordinateX,
  //             checked: false,
  //             coordinateY: 2,
  //             value: 0,
  //           });
  //         }
  //         if (card[i + 1].coordinateX > card[i].coordinateX) {
  //           upperRow.push({
  //             coordinateX: card[i + 1].coordinateX,
  //             checked: false,
  //             coordinateY: 1,
  //             value: 0,
  //           });
  //           middleRow.push(card[i + 1]);
  //         } else {
  //           middleRow.push(card[i + 1]);
  //         }
  //         if (card[i + 2].coordinateX > card[i + 1].coordinateX) {
  //           middleRow.push({
  //             coordinateX: card[i + 2].coordinateX,
  //             checked: false,
  //             coordinateY: 2,
  //             value: 0,
  //           });
  //           lowerRow.push(card[i + 2]);
  //         } else {
  //           lowerRow.push(card[i + 2]);
  //         }
  //         // if (card[i + 2].coordinateX > card[i].coordinateX) {
  //         //   upperRow.push({
  //         //     coordinateX: card[i + 2].coordinateX,
  //         //     checked: false,
  //         //     coordinateY: 1,
  //         //     value: 0,
  //         //   });
  //         //   //   lowerRow.push(card[i + 2]);
  //         // }
  //         // lowerRow.push(card[i + 2]);
  //       }
  //     }

  //     return [upperRow, middleRow, lowerRow];
  //   }

  //   console.log(getStructure(structure[0]));

  function getStructure2(card: PlayerNumber[]) {
    const upperRow: PlayerNumber[] = Array.from({ length: 9 }, (_, i) => ({
      coordinateX: i + 1,
      checked: false,
      coordinateY: 1,
      value: 0,
    }));
    const middleRow: PlayerNumber[] = Array.from({ length: 9 }, (_, i) => ({
      coordinateX: i + 1,
      checked: false,
      coordinateY: 2,
      value: 0,
    }));
    const lowerRow: PlayerNumber[] = Array.from({ length: 9 }, (_, i) => ({
      coordinateX: i + 1,
      checked: false,
      coordinateY: 3,
      value: 0,
    }));

    for (let i = 0; i < card.length; i++) {
      if (i % 3 === 0) {
        upperRow[
          upperRow.findIndex(
            (number) => number.coordinateX === card[i].coordinateX
          )
        ] = card[i];
        middleRow[
          middleRow.findIndex(
            (number) => number.coordinateX === card[i + 1].coordinateX
          )
        ] = card[i + 1];
        lowerRow[
          lowerRow.findIndex(
            (number) => number.coordinateX === card[i + 2].coordinateX
          )
        ] = card[i + 2];
      }
    }

    return [upperRow, middleRow, lowerRow];
  }

  const actualStructure = structure.map((card) => getStructure2(card));

  console.log(actualStructure);

  return (
    // <>
    //   {structure.map((currentCard: PlayerNumber[], i: number) => (
    //     <section className={classes.card} key={i + "_player_card"}>
    //       {currentCard.map((currentNumber: PlayerNumber, i: number) =>
    //         currentNumber ? (
    //           <Number
    //             key={currentNumber.value + "_number_box"}
    //             checked={currentNumber.checked}
    //             coordinateX={currentNumber.coordinateX}
    //             coordinateY={currentNumber.coordinateY}
    //             value={currentNumber.value}
    //             onClick={() => null}
    //           />
    //         ) : (
    //           <div className={classes.emptyBox} key={i + "_empty_number_box"}>
    //             {null}
    //           </div>
    //         )
    //       )}
    //     </section>
    //   ))}
    // </>
    actualStructure.map((currentCard: PlayerNumber[][], i: number) => (
      <section className={classes.card} key={i + "_player_card"}>
        {currentCard.map((currentRow: PlayerNumber[], j: number) => (
          <div className={classes.cardRow} key={j + "x" + i + "_player_row"}>
            {currentRow.map((currentNumber: PlayerNumber, k: number) =>
              currentNumber.value ? (
                <Number
                  key={currentNumber.value + "_number_box"}
                  checked={currentNumber.checked}
                  coordinateX={currentNumber.coordinateX}
                  coordinateY={currentNumber.coordinateY}
                  value={currentNumber.value}
                  onClick={() => null}
                />
              ) : (
                <div
                  className={classes.emptyBox}
                  key={k + "x" + j + "_empty_number_box"}
                >
                  {null}
                </div>
              )
            )}
          </div>
        ))}
      </section>
    ))
  );
}

export default Card;
