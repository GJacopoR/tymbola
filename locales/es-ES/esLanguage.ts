import { itLanguage } from "../it-IT/itLanguage";

export const esLanguage = {
    home: {
        callerButton: "Guardián",
        playerButton: "Jugador",
        ongoingGameMessage: "Hay una partida de {{PLAYER_TYPE}} en curso.",
        ongoingGameSubmessage: "Si la finalizas, se perderán las tarjetas no guardadas.",
        endGameButton: "Finalizar partida",
        returnGameButton: "Volver a la partida",
        cardSelectorModal: {
            baseMessage: "¿Cómo quieres seleccionar tus tarjetas?",
            newCardsButton: "Tarjetas nuevas",
            loadCardsButton: "Cargar tarjetas",
            chooseCardsButton: "Elegir números",
            newCardsMessage: "¿Cuántas tarjetas quieres crear?"
        }
    },
    callerView: {
        callButton: "Sacar",
        repeatButton: "Repetir",
        smorfiaMode: "Modo Smorfia"
    },
    playerView: {
        saveModal: {
            saveMessage: "¿Estás seguro de que quieres guardar las tarjetas actuales?",
            saveSubmessage: "Se sobrescribirán las tarjetas guardadas anteriormente.",
            saveButton: "Sí, guardar",
        },
        winnerModeMessage: "¿De verdad has hecho Tombola?"
    },
    commons: {
        no: "No",
        yes: "Sí",
        caller: "Guardián",
        player: "Jugador",
        endGame: "Fin de la partida",
        noBackButton: "No, volver",
        endGameModal: {
            endGameMessage: "¿Estás seguro de que quieres finalizar la partida actual?",
            endGameSubmessage: "Las tarjetas se reiniciarán.",
            endGameButton: "Sí, finalizar"
        }
    }
} satisfies typeof itLanguage