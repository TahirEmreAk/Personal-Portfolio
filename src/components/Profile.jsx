import React, { useContext } from 'react';
import "./profile.css";
import { ContextLanguage } from '../context/LanguageContexts';

const Profile = () => {
    const { content } = useContext(ContextLanguage);
    const isDark = typeof window !== 'undefined' && document.body.classList.contains('dark');
    return (
        <div className='profile' style={isDark ? {color:'#fafafa'} : {}}>
            <h2 className="profile-title">{content.profile}</h2>
            <div className="profile-container">
                <div className="profile-info">
                    <h4>{content.profile}</h4>
                    <ul>
                        <li><strong>{content.birthDate}:</strong> 28.08.1997</li>
                        <li><strong>{content.city}:</strong> Sakarya</li>
                        <li><strong>{content.education}:</strong> TOBB Ekonomi ve Teknoloji Üniversitesi Hukuk Fakültesi</li>
                        <li><strong>{content.degree}</strong></li>
                        <li><strong>{content.role}:</strong> {content.fullStack}</li>
                    </ul>
                </div>
                <div className="profile-about">
                    <h4>{content.aboutMe}</h4>
                    <p>{content.profileDesc1}</p>
                    <p>{content.profileDesc2}</p>
                </div>
            </div>
            <div className="profile-bottom-line"></div>
        </div>
    );
};

export default Profile;