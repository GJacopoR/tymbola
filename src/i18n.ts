import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enLanguage } from 'public/locales/en-US/enLanguage';
import { esLanguage } from 'public/locales/es-ES/esLanguage';
import { itLanguage } from 'public/locales/it-IT/itLanguage';
import { jaLanguage } from 'public/locales/ja-JP/jpLanguage';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const languageResources = {
    en: {
        // emoji: '',
        label: 'en-US: English (USA)',
        translation: enLanguage
    },
    es: {
        label: 'es-ES: Espanol',
        translation: esLanguage
    },
    it: {
        label: 'it-IT: Italiano',
        translation: itLanguage
    },
    jp: {
        label: 'ja-JP: 日本語',
        translation: jaLanguage
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: languageResources,
        lng: "it", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        fallbackLng: 'it',

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;