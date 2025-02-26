import React, { createContext, useState } from "react";
import translations from '../data/translations.json';

export const ContextLanguage = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const dilDegistir = () => {
        setLanguage((prevLang) => (prevLang === "en" ? "tr" : "en"));
    };

    const content = translations[language];

    return (
        <ContextLanguage.Provider value={{ language, dilDegistir, content }}>
            {children}
        </ContextLanguage.Provider>
    );
};

export default LanguageProvider;
