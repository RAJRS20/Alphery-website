import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-text-thin animate-text" style={{ animationDelay: '0.2s', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                            Powering Ideas with
                        </span>
                        <span className="hero-text-bold animate-text" style={{ animationDelay: '0.4s' }}>
                            Technology
                        </span>
                    </h1>
                    <p className="hero-description animate-text" style={{ animationDelay: '0.5s', maxWidth: '800px', margin: '20px auto', color: 'var(--text-grey)' }}>
                        Alphery is an IT solutions company delivering reliable, scalable, and performance-driven digital products.
                        From software development to custom PC builds, we help businesses and individuals turn ideas into powerful technology.
                    </p>
                    <div className="animate-text" style={{ animationDelay: '0.6s', marginTop: '30px' }}>
                        <button className="btn" style={{ backgroundColor: '#fff', color: '#000', borderRadius: '30px', fontWeight: 'bold' }}>
                            Get a Free Consultation
                        </button>
                    </div>
                </div>
            </div>

            <div className="hero-visual animate-text" style={{ animationDelay: '0.8s' }}>
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                    alt="Alphery Team"
                    fetchPriority="high"
                />
            </div>
        </section>
    );
};

export default Hero;
