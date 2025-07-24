import './footer.css'
import React, { useContext } from 'react'
import { ContextLanguage } from '../context/LanguageContexts';

export default function Footer() {
    const { content } = useContext(ContextLanguage);
    const isDark = typeof window !== 'undefined' && document.body.classList.contains('dark');
    return (
        <div className='footer' style={isDark ? {background:'#18181b', color:'#fafafa'} : {}}>
            <h2 className='footer-title'>{content.footerTitle}</h2>
            <div className='footer-link-container'>
                <div className='footer-link-container-child-left'>
                    <a href="#" className='footer-left' style={isDark ? {color:'#fafafa'} : {}}>
                        <i className='fa-solid fa-angles-right'></i>{content.email}
                    </a>
                </div>
                <div className='footer-link-container-child-right'>
                    <a href="#" className='footer-link-container-child-right-inner footer-right-first' style={isDark ? {color:'#fafafa'} : {}}>{content.blog}</a>
                    <a href="https://github.com/TahirEmreAk" className='footer-link-container-child-right-inner footer-right-second' style={isDark ? {color:'#fafafa'} : {}}>{content.github}</a>
                    <a href="https://www.linkedin.com/in/tahir-emre-ak-804ab0203/" className='footer-link-container-child-right-inner footer-right-last' style={isDark ? {color:'#fafafa'} : {}}>{content.linkedin}</a>
                </div>
            </div>
        </div>
    );
};