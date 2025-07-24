import React, { useContext } from 'react';
import "./skils.css";
import skillsData from '../data/skills.json';
import { ContextLanguage } from '../context/LanguageContexts';

const Skils = () => {
    const { language } = useContext(ContextLanguage);
    const skills = skillsData[language]?.skills || [];
    const title = skillsData[language]?.title || 'Skills';

    // Drag-scroll için referans
    const handleDrag = (e) => {
        const container = e.currentTarget;
        let isDown = false;
        let startX;
        let scrollLeft;

        const mouseDown = (e) => {
            isDown = true;
            container.classList.add('dragging');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };
        const mouseLeave = () => {
            isDown = false;
            container.classList.remove('dragging');
        };
        const mouseUp = () => {
            isDown = false;
            container.classList.remove('dragging');
        };
        const mouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.2;
            container.scrollLeft = scrollLeft - walk;
        };
        container.addEventListener('mousedown', mouseDown);
        container.addEventListener('mouseleave', mouseLeave);
        container.addEventListener('mouseup', mouseUp);
        container.addEventListener('mousemove', mouseMove);
    };

    return (
        <div className='skils'>
            <h2 className="skils-title">{title}</h2>
            <div
                className="skils-container carousel drag-scroll"
                ref={el => el && handleDrag({ currentTarget: el })}
            >
                {skills.map((skill, idx) => (
                    <div className="skils-container-item" key={idx}>
                        <h4>{skill.name}</h4>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
            <div className="skils-bottom-line"></div>
        </div>
    )
}

export default Skils;