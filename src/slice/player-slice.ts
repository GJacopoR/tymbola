import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { shuffle } from '../assets/array-helpers'

export interface PlayerNumber {
    checked: boolean,
    column: number,
    value: number,
}

export interface PlayerSlice {
    isPlayerGameOngoing: boolean,
    cardsStructure: PlayerNumber[][][]
}

const initialState: PlayerSlice = {
    isPlayerGameOngoing: false,
    cardsStructure: [[[]]],
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setRandomNumbers: (state, action: PayloadAction<number>) => {
            // creating the repository from which we'll take numbers in order to have all 90 tombola numbers withour repeating them : an Array containing three arrays each containing the numbers on 10 intervals
            const repository: number[][] = Array.from(
                { length: 9 },
                (_, i) => (i + 1) * 10
            ).map((value: number | number[]) => {
                const currentArray: number[] = [];
                for (let i = 1; i <= 10; i++) {
                    value === +value && currentArray.push(value - 10 + i);
                }
                return currentArray;
            });

            const allCards: number[][] = [];

            // creating an action.payload number of card and pushing into them a single number for each interval of ten (one for upper sub-arrays), in this way we'll ensure we at least have one number for every ten. Then we'll exclude that number from the repository.
            for (let i = 0; i < action.payload; i++) {
                const currentCard: number[] = [];
                repository.forEach((_, j) => {
                    const randomIndex = Math.floor(Math.random() * repository[j].length);
                    const currentNumber = repository[j].splice(randomIndex, 1);
                    currentCard.push(currentNumber[0]);
                });
                allCards.push(currentCard);
            }

            // with remaining numbers, we create a single array.
            const remainings = repository.flat();

            // then we push a number from remainings array for each card as long as every card arrives at length 15
            for (let i = 0; i < action.payload; i++) {
                while (allCards[i].length < 15) {
                    const selectedNumberIndex: number = Math.floor(
                        Math.random() * remainings.length
                    );
                    const selectedNumber: number = remainings.splice(
                        selectedNumberIndex,
                        1
                    )[0];
                    allCards[i].push(selectedNumber);
                }
            }

            // finally, we transform those numbers into PlayerNumbers giving them a default false checked value, the value of the number itself, and a column based on their ten
            const coordinatedAllCards: PlayerNumber[][] = allCards
                .map((card) => card
                    .sort((a, b) => a - b)
                    .map((number: number,) => ({
                        checked: false,
                        column: number === 90 ? 9 : Math.ceil(number / 10),
                        value: number
                    })
                    )
                );

            // to even better randomize cards, we're shuffling their rows right after creating them
            state.cardsStructure = coordinatedAllCards.map(card => shuffle(getCardStructure(card)))
            state.isPlayerGameOngoing = true
        },

        setSavedNumbers: (state, action: PayloadAction<PlayerNumber[][][]>) => {
            state.cardsStructure = action.payload
            state.isPlayerGameOngoing = true
        },

        switchNumberState: (state, action: PayloadAction<number>) => {
            for (let i = 0; i < state.cardsStructure.length; i++) {
                for (let j = 0; j < state.cardsStructure[i].length; j++) {
                    for (let k = 0; k < state.cardsStructure[i][j].length; k++) {
                        if (state.cardsStructure[i][j][k].value === action.payload) {
                            state.cardsStructure[i][j][k].checked = !state.cardsStructure[i][j][k].checked
                        }
                    }
                }
            }
        },

        resetCardsStates: (state) => {
            for (let i = 0; i < state.cardsStructure.length; i++) {
                for (let j = 0; j < state.cardsStructure[i].length; j++) {
                    for (let k = 0; k < state.cardsStructure[i][j].length; k++) {
                        state.cardsStructure[i][j][k].checked = false
                    }
                }
            }
        },

        setEndGame: (state) => {
            state.cardsStructure = [[[]]]
            state.isPlayerGameOngoing = false
        },
    },
})

export const { setRandomNumbers, setSavedNumbers, switchNumberState, resetCardsStates, setEndGame } = playerSlice.actions

export const selectCardsStructure = (state: RootState) => state.player.cardsStructure;

export const selectIsPlayerGameOngoing = (state: RootState) => state.player.isPlayerGameOngoing;

export default playerSlice.reducer

const getCardStructure = (
    card: PlayerNumber[]
): PlayerNumber[][] => {
    const upperRow: PlayerNumber[] = Array.from(
        { length: 9 },
        (_, i) => ({
            column: i + 1,
            checked: false,
            value: 0,
        })
    );
    const middleRow: PlayerNumber[] = Array.from(
        { length: 9 },
        (_, i) => ({
            column: i + 1,
            checked: false,
            value: 0,
        })
    );
    const lowerRow: PlayerNumber[] = Array.from(
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