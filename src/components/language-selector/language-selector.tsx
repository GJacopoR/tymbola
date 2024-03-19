import { useTranslation } from "react-i18next";
import { languageResources } from "src/i18n";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  const availableLanguages = Object.entries(languageResources);

  return (
    <select
      name="languageSelect"
      id="languageSelect"
      onChange={handleLangChange}
      value={i18n.language}
    >
      {availableLanguages.map((language) => (
        <option value={language[0]}>{language[1].label}</option>
      ))}
    </select>
  );
}

export default LanguageSelector;
