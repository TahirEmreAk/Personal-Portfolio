import React, { useContext } from "react";
import "./introduce.css";
import { ContextLanguage } from '../context/LanguageContexts';

const Introduce = () => {
    const { content } = useContext(ContextLanguage);
    return (
        <div className="introduce">
            <div className="introduce-section">
                <div className="introduce-name">
                    <span className="introduce-line"></span>
                    <span className="introduce-text">{content.name}</span>
                </div>
                <h1 className="introduce-title">
                    {content.introTitle.split('\n').map((line, idx) => (
                        <React.Fragment key={idx}>{line}<br /></React.Fragment>
                    ))}
                </h1>
                <p className="introduce-description">
                    {content.introDesc}
                </p>
                <div className="introduce-links">
                    <a className="introduce-btn introduce-btn-primary" href="#">{content.HireMe}</a>
                    <a className="introduce-btn" href="https://github.com/TahirEmreAk" target="_blank">{content.github}</a>
                    <a className="introduce-btn" href="https://www.linkedin.com/in/tahir-emre-ak-804ab0203/" target="_blank" >{content.linkedin}</a>
                </div>
            </div>
            <div className="introduce-image">
                <img
                    src="https://media.istockphoto.com/id/1401460590/tr/foto%C4%9Fraf/businessman-working-on-laptop-with-document-management-icon.jpg?s=2048x2048&w=is&k=20&c=AExfMkSAPJPNrg0CPDCMk6ObSiVjybyYxseg1BxPEHc="
                    alt="Profile"
                />
            </div>
        </div>
    );
};

export default Introduce;