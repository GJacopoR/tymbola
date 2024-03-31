import { useTranslation } from "react-i18next";
import classes from "./language-selector.module.scss";
import { LanguageSelectorProps } from ".";
import { ChangeEventHandler } from "react";
import { AvailableLanguage } from "src/i18n";

interface LanguageSelectorComponentProps extends LanguageSelectorProps {
  availableLanguages: [string, AvailableLanguage][];
  handleLanguageChange: ChangeEventHandler<HTMLSelectElement>;
}

function LanguageSelector({
  availableLanguages,
  className,
  handleLanguageChange,
}: LanguageSelectorComponentProps) {
  const { i18n } = useTranslation();

  return (
    <form>
      <label htmlFor="languageSelect"></label>
      <select
        aria-label="Language select"
        className={`${classes.select} ${className && className}`}
        id="languageSelect"
        name="languageSelect"
        onChange={handleLanguageChange}
        value={i18n.language}
      >
        {availableLanguages.map((language, i) => (
          <option value={language[0]} key={`${language}_${i}`}>
            {language[1].label}
          </option>
        ))}
      </select>
    </form>
  );
}

export default LanguageSelector;
