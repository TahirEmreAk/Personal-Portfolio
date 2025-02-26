import React, { useContext } from "react";
import "./navbar.css";
import useDarkMode from "../hooks/useDarkMode";
import { ContextLanguage } from "../context/LanguageContexts";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
    const { dilDegistir, content, language } = useContext(ContextLanguage);

    return (
        <div className="navbar">
            <div className="navbar-name">T</div>
            <div className="navbar-links">
                <a href="#" className="navbar-link-item">{content.skils}</a>
                <a href="#" className="navbar-link-item">{content.Projects}</a>
                <a href="#" className="navbar-link-item">{content.HireMe}</a>
                <button onClick={() => setIsDarkMode(!isDarkMode)}>Dark Mode</button>
                <button onClick={dilDegistir}>
                    {language === "en" ? "Dili Değiştir" : "Change Language"}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
