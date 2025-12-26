import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <h2 className="footer-logo">Alphery</h2>
                        <p className="footer-description">
                            Alphery is an IT solutions company specializing in software development,
                            web and mobile applications, custom PC builds, and hardware services.
                            We help businesses grow through smart and reliable technology.
                        </p>
                        <a href="mailto:contact@alphery.com" className="footer-email">contact@alphery.com</a>
                    </div>

                    <div className="footer-grid">
                        <div className="footer-column">
                            <h4>Socials</h4>
                            <ul>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Behance</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Sitemap</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Address</h4>
                            <ul>
                                <li>India</li>
                                <li><a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Alphery Solutions.</p>
                    <a href="#home" className="back-to-top">Back to Top ↑</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
