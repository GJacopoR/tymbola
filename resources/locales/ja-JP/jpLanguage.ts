import { itLanguage } from "../it-IT/itLanguage";

export const jaLanguage = {
    home: {
        callerButton: "呼び出し役 \n (電話をかける人)",
        playerButton: "プレイヤー \n (得点する人)",
        ongoingGameMessage: "現在、{{PLAYER_TYPE}} ゲームが進行中です。",
        ongoingGameSubmessage: "終了すると、保存されていないカードはすべて失われます。",
        endGameButton: "ゲームを終了する",
        returnGameButton: "ゲームに戻る",
        cardSelectorModal: {
            baseMessage: "カードをどのように選択しますか？",
            newCardsButton: "新しいカード",
            loadCardsButton: "カードを読み込む",
            chooseCardsButton: "番号を選択",
            newCardsMessage: "作成するカードの数は？"
        }
    },
    callerView: {
        callButton: "読み上げる",
        repeatButton: "繰り返す",
        smorfiaMode: "スフォルツァモード"
    },
    playerView: {
        saveModal: {
            saveMessage: "現在のカードを保存しますか？",
            saveSubmessage: "以前に保存されたカードは上書きされます。",
            saveButton: "はい、保存する",
        },
        winnerModeMessage: "本当にトムボラですか？"
    },
    commons: {
        no: "いいえ",
        yes: "はい",
        caller: "呼び出し役",
        player: "プレイヤー",
        endGame: "ゲーム終了",
        noBackButton: "いいえ、戻る",
        endGameModal: {
            endGameMessage: "現在のゲームを終了しますか？",
            endGameSubmessage: "カードはリセットされます。",
            endGameButton: "はい、終了する"
        }
    }
} satisfies typeof itLanguage;
