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
    <select
      className={`${classes.select} ${className && className}`}
      id="languageSelect"
      name="languageSelect"
      onChange={handleLanguageChange}
      value={i18n.language}
    >
      {availableLanguages.map((language) => (
        <option value={language[0]}>{language[1].label}</option>
      ))}
    </select>
  );
}

export default LanguageSelector;
