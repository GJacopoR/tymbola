import { CSSProperties } from "react";
import LanguageSelectorComponent from "./language-selector";
import { useTranslation } from "react-i18next";
import { AvailableLanguage, languageResources } from "src/i18n";

export interface LanguageSelectorProps {
  className?: CSSProperties;
}

function LanguageSelector({ className }: LanguageSelectorProps) {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  const availableLanguages: [string, AvailableLanguage][] = Object.entries(languageResources);

  return (
    <LanguageSelectorComponent
      availableLanguages={availableLanguages}
      className={className}
      handleLanguageChange={handleLanguageChange}
    />
  );
}

export default LanguageSelector;
