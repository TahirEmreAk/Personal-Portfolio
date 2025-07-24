import React, { useContext } from "react";
import "./navbar.css";
import useDarkMode from "../hooks/useDarkMode";
import { ContextLanguage } from "../context/LanguageContexts";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    const { dilDegistir, content, language } = useContext(ContextLanguage);

    const languageNames = {
        en: "English",
        tr: "Türkçe",
        ru: "Русский"
    };

    return (
        <div className="navbar">
            <div className="navbar-name">T</div>
            <div className="navbar-links">
                <a href="#" className="navbar-link-item">{content.skils}</a>
                <a href="#" className="navbar-link-item">{content.Projects}</a>
                <a href="#" className="navbar-link-item">{content.HireMe}</a>
                <button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? content.lightMode : content.darkMode}</button>
                <button onClick={dilDegistir}>
                    {languageNames[language]}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
