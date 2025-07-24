import React, { createContext, useState } from "react";
import translations from '../data/translations.json';

export const ContextLanguage = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const languages = ["en", "tr", "ru"];
    const dilDegistir = () => {
        setLanguage((prevLang) => {
            const currentIndex = languages.indexOf(prevLang);
            return languages[(currentIndex + 1) % languages.length];
        });
    };

    const content = translations[language];

    return (
        <ContextLanguage.Provider value={{ language, dilDegistir, content }}>
            {children}
        </ContextLanguage.Provider>
    );
};

export default LanguageProvider;
