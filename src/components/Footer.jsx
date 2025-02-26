import './footer.css'
import React from 'react'

export function Footer() {

    return (
        <div className='footer'>
            <h2 className='footer-title'>Let's work together on your next product.</h2>
            <div className='footer-link-container'>
                <div className='footer-link-container-child-left'>
                    <a href="#" className='footer-left'>
                        <i className='fa-solid fa-angles-right'></i>tahiremreak@gmail.com
                    </a>
                </div>
                <div className='footer-link-container-child-right'>
                    <a href="#" className='footer-link-container-child-right-inner footer-right-first'>Personal Blog</a>
                    <a href="https://github.com/TahirEmreAk" className='footer-link-container-child-right-inner footer-right-second'>Github</a>
                    <a href="https://www.linkedin.com/in/tahir-emre-ak-804ab0203/" className='footer-link-container-child-right-inner footer-right-last'>Linkedin</a>
                </div>
            </div>
        </div>
    );
};