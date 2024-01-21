import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayerNumber {
    checked: boolean,
    value: number,
}

export interface PlayerSlice {
    value: PlayerNumber[][]
}

const initialState: PlayerSlice = {
    value: [[]],
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        getRandomNumbers: (state, action: PayloadAction<number>) => {
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

            for (let i = 0; i < action.payload; i++) {
                const currentCard: number[] = [];
                repository.forEach((_, j) => {
                    const randomIndex = Math.floor(Math.random() * repository[j].length);
                    const currentNumber = repository[j].splice(randomIndex, 1);
                    currentCard.push(currentNumber[0]);
                });
                allCards.push(currentCard);
            }

            const remainings = repository.flat();

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

            const cards: PlayerNumber[][] = allCards
                .map((card) => card
                    .sort((a, b) => a - b)
                    .map(number => ({
                        checked: false,
                        value: number
                    })
                    )
                );

            console.log(cards)
            state.value = cards
        }
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

export const { getRandomNumbers } = playerSlice.actions

export default playerSlice.reducer