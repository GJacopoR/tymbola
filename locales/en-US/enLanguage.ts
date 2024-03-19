import { itLanguage } from "../it-IT/itLanguage";

export const enLanguage = {
    home: {
        callerButton: "Caller",
        playerButton: "Player",
        ongoingGameMessage: "There is a {{PLAYER_TYPE}} game currently in progress.",
        ongoingGameSubmessage: "Any unsaved cards will be lost if you end it.",
        endGameButton: "End game",
        returnGameButton: "Return to game",
        cardSelectorModal: {
            baseMessage: "How do you want to select your cards?",
            newCardsButton: "New cards",
            loadCardsButton: "Load cards",
            chooseCardsButton: "Choose numbers",
            newCardsMessage: "How many cards do you want to create?"
        }
    },
    callerView: {
        callButton: "Call",
        repeatButton: "Repeat",
        smorfiaMode: "Smorfia Mode"
    },
    playerView: {
        saveModal: {
            saveMessage: "Are you sure you want to save the current cards?",
            saveSubmessage: "Any previously saved cards will be overwritten.",
            saveButton: "Yes, save",
        },
        winnerModeMessage: "Did you really Tombola?"
    },
    commons: {
        no: "No",
        yes: "Yes",
        caller: "Caller",
        player: "Player",
        endGame: "End game",
        noBackButton: "No, go back",
        endGameModal: {
            endGameMessage: "Are you sure you want to end the current game?",
            endGameSubmessage: "The cards will be reset.",
            endGameButton: "Yes, end"
        }
    }
} satisfies typeof itLanguage