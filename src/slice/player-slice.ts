import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
// import { shuffle } from '../assets/array-helpers'

export interface PlayerNumber {
    checked: boolean,
    column: number,
    // coordinateY: number,
    value: number,
}

export interface PlayerSlice {
    isPlayerGameOngoing: boolean,
    cardsNumbers: PlayerNumber[][]
}

const initialState: PlayerSlice = {
    isPlayerGameOngoing: false,
    cardsNumbers: [[]],
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
            state.isPlayerGameOngoing = true
            state.cardsNumbers = coordinatedAllCards
        },

        switchNumberState: (state, action: PayloadAction<number>) => {
            for (let i = 0; i < state.cardsNumbers.length; i++) {
                for (let j = 0; j < state.cardsNumbers[i].length; j++) {
                    if (state.cardsNumbers[i][j].value === action.payload) {
                        state.cardsNumbers[i][j].checked = !state.cardsNumbers[i][j].checked
                    }
                }
            }
        },

        setEndGame: (state) => {
            state.isPlayerGameOngoing = false
            state.cardsNumbers = [[]]
        },
    },
})

export const { setRandomNumbers, switchNumberState, setEndGame } = playerSlice.actions

export const selectCardsNumbers = (state: RootState) => state.player.cardsNumbers;

export const selectIsPlayerGameOngoing = (state: RootState) => state.player.isPlayerGameOngoing;

export default playerSlice.reducer