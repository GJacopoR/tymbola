/* eslint-disable react-refresh/only-export-components */
import CallerViewComponent from "./caller-view";
import * as caller from "../../slice/caller-slice";
import * as modal from "../../slice/modal-slice";
import { useAppDispatch, useAppSelector } from "../../slice/hooks";
import { useEffect } from "react";
import { useIsFirstRender } from "../../assets/useIsFirstRender";
import { useTranslation } from "react-i18next";
import { Languages, languageResources } from "src/i18n";

function CallerView() {
  const { i18n } = useTranslation();

  const dispatch = useAppDispatch();
  const isFirstRender = useIsFirstRender();

  const history: caller.TombolaNumber[] = useAppSelector(caller.selectHistory);
  const isSmorfiaMode: boolean = useAppSelector(caller.selectIsSmorfiaMode);
  const repository: caller.TombolaNumber[] = useAppSelector(caller.selectRepository);

  const lastTombolaNumber: caller.TombolaNumber = history[history.length - 1];

  const callerCards = [
    [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25],
    [6, 7, 8, 9, 10, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55],
    [36, 37, 38, 39, 40, 46, 47, 48, 49, 50, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84, 85],
    [66, 67, 68, 69, 70, 76, 77, 78, 79, 80, 86, 87, 88, 89, 90],
  ];

  const currentLanguage: Languages = i18n.language as Languages;

  const currentMeaning: caller.TombolaNumberTypes = (currentLanguage +
    "_meaning") as caller.TombolaNumberTypes;

  const baseUtterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();
  const localizedUtterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance();

  localizedUtterance.voice =
    window.speechSynthesis.getVoices().find((voice) => voice.lang.includes(currentLanguage)) ||
    null;

  // yes, this because i really appreciate Luca's voice
  if (window.speechSynthesis.getVoices().find((voice) => voice.name === "Luca")) {
    baseUtterance.voice =
      window.speechSynthesis.getVoices().find((voice) => voice.name === "Luca") ||
      window.speechSynthesis.getVoices().find((voice) => voice.lang.includes("it")) ||
      null;

    if (currentLanguage === "it") {
      localizedUtterance.voice =
        window.speechSynthesis.getVoices().find((voice) => voice.name === "Luca") ||
        window.speechSynthesis.getVoices().find((voice) => voice.lang.includes("it")) ||
        null;
    }
  }

  baseUtterance.rate = baseUtterance.voice?.name === "Luca" ? 0.25 : 0.9;
  baseUtterance.pitch = 1;
  baseUtterance.volume = 1;

  localizedUtterance.rate = localizedUtterance.voice?.name === "Luca" ? 0.25 : 0.9;
  localizedUtterance.pitch = 1;
  localizedUtterance.volume = 1;
  localizedUtterance.lang = languageResources[currentLanguage].label.substring(0, 5);

  const callNumber = (number: string, smorfia?: string, meaning?: string): void => {
    localizedUtterance.text = number;
    window.speechSynthesis.speak(localizedUtterance);

    if (smorfia && meaning) {
      baseUtterance.text = smorfia;
      window.speechSynthesis.speak(baseUtterance);
      localizedUtterance.text = meaning;
      window.speechSynthesis.speak(localizedUtterance);
    }
  };

  useEffect(() => {
    if (lastTombolaNumber && !isFirstRender) {
      const baseNumberString: string = String(lastTombolaNumber.number);

      const smorfiaString: string = `${
        currentLanguage === "it" ? lastTombolaNumber.pronunciation : ""
      },  
      ${lastTombolaNumber.smorfia_meaning}`;

      const meaningString: string = String(lastTombolaNumber[currentMeaning]);
      history.length && isSmorfiaMode
        ? callNumber(baseNumberString, smorfiaString, meaningString)
        : callNumber(baseNumberString);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  const handleExtract = (): void => {
    dispatch(caller.extract());
  };

  const handleRepeat = (): void => {
    const baseNumberString: string =
      lastTombolaNumber.number <= 9
        ? String(lastTombolaNumber.number)
        : `${lastTombolaNumber.number}, ${String(lastTombolaNumber.number)[0]}, ${
            String(lastTombolaNumber.number)[1]
          }`;

    const smorfiaString: string = lastTombolaNumber.smorfia_meaning;

    const meaningString: string = lastTombolaNumber[currentMeaning] as string;

    callNumber(baseNumberString, smorfiaString, meaningString);
  };

  const handleModalOpen = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(modal.toggle());
  };

  const handleSwitch = (): void => {
    dispatch(caller.switchIsSmorfiaMode());
  };

  return (
    <CallerViewComponent
      callerCards={callerCards}
      history={history}
      isSmorfiaMode={isSmorfiaMode}
      onCallClick={handleExtract}
      onRepeatClick={handleRepeat}
      onRestartClick={handleModalOpen}
      onSwitchClick={handleSwitch}
      repository={repository}
    />
  );
}

export default CallerView;
