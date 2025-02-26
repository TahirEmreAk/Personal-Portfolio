import React from "react";
import "./introduce.css";

const Introduce = () => {
    return (
        <div className="introduce">
            <div className="introduce-section">
                <div className="introduce-name">
                    <span className="introduce-line"></span>
                    <span className="introduce-text">Tahir Emre AK</span>
                </div>
                <h1 className="introduce-title">
                    Creative thinker <br />
                    Minimalism lover
                </h1>
                <p className="introduce-description">
                    Hi, I'm Tahir Emre AK. I'm a full-stack developer. If you are looking for a
                    Developer who to craft solid and scalable frontend products with great
                    user experiences. Let’s shake hands with me.
                </p>

                <div className="introduce-links">
                    <a className="introduce-btn introduce-btn-primary" href="#">Hire me</a>
                    <a className="introduce-btn" href="https://github.com/TahirEmreAk" target="_blank">Github</a>
                    <a className="introduce-btn" href="https://www.linkedin.com/in/tahir-emre-ak-804ab0203/" target="_blank" >Linkedin</a>
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