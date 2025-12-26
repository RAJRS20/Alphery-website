import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ToolsPage from './pages/ToolsPage';
import './index.css';
import ScrollObserver from './components/ScrollObserver';

// Import Logo Assets
import newLogo from './assets/Alphery.svg';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });



  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Simulate initial load with time for animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        background: theme === 'dark' ? '#0c0c0c' : '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div className="splash-logo-container">
          <img
            src={newLogo}
            alt="Alphery"
            className="splash-logo"
            style={{
              height: '80px',
              width: 'auto',
              opacity: 0,
              animation: 'fadeInLogo 1.5s ease-out forwards'
            }}
          />
        </div>

        <style>{`
          @keyframes fadeInLogo {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <ScrollObserver />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
