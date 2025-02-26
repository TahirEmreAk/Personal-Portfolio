import React from 'react';
import "./profile.css";

const Profile = () => {
    return (
        <div className='profile'>
            <h2 className="profile-title">Profile</h2>
            <div className="profile-container">
                <div className="profile-info">
                    <h4>Profile</h4>
                    <ul>
                        <li><strong>Doğum tarihi:</strong> 28.08.1997</li>
                        <li><strong>İkamet Şehri:</strong> Tokat</li>
                        <li><strong>Eğitim Durumu:</strong> TOBB Ekonomi ve Teknoloji Üni. Hukuk</li>
                        <li><strong>Lisans,</strong> 2020</li>
                        <li><strong>Tercih Ettiği Rol:</strong> Frontend, UI</li>
                    </ul>
                </div>

                <div className="profile-about">
                    <h4>About Me</h4>
                    <p>
                        I have a solid academic foundation in Law and Economics, paired with experience in law firms and the banking sector. These experiences have honed my analytical thinking, problem-solving, and teamwork abilities.


                    </p>
                    <p>
                        Recently, I transitioned into the field of software development, where I have been dedicating my time to learning and improving my skills. Over the past three months, I have been actively studying programming fundamentals, algorithms, HTML, CSS, JavaScript, C#, and React. My goal is to build a career as a software developer and contribute to impactful projects in the tech industry.
                    </p>
                </div>
            </div>
            <div className="profile-bottom-line"></div>
        </div>
    );
};

export default Profile;