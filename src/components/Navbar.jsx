import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Alphery.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setVisible(false); // Hide on scroll down
            } else {
                setVisible(true);  // Show on scroll up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleNavClick = (href) => {
        setMenuOpen(false);

        if (href.startsWith('/')) {
            navigate(href);
        } else {
            // Anchor link logic
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const el = document.querySelector(href);
                    el?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const el = document.querySelector(href);
                el?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navItems = [
        { name: 'Home', href: '#home', number: '01' },
        { name: 'Service', href: '#services', number: '02' },
        { name: 'About', href: '#about', number: '03' },
        { name: 'Contact', href: '#contact', number: '04' },
    ];

    return (
        <>
            <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
                <div className="navbar-content">
                    {/* Logo */}
                    <div className="logo-container" onClick={() => navigate('/')}>
                        <img src={logo} alt="Alphery" className="logo-main" />
                    </div>

                    {/* Menu Trigger */}
                    <button
                        className={`menu-btn ${menuOpen ? 'menu-open' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span>Menu</span>
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Full Screen Overlay */}
            <div className={`menu-overlay ${menuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                            >
                                <span>{item.number}</span>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
