import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-header">
                    <h2>About Alphery</h2>
                </div>

                <div className="about-grid">
                    <div className="about-text reveal-text">
                        <p>
                            Alphery is built with a vision to simplify technology while maximizing impact.
                            We design and develop digital solutions that are secure, user-focused, and scalable.
                            Our approach combines innovation, strategy, and execution to deliver technology
                            that truly supports business growth.
                        </p>
                        <p style={{ fontStyle: 'italic', borderLeft: '3px solid #fff', paddingLeft: '20px', margin: '30px 0' }}>
                            "We don’t just build products — we create long-term digital value."
                        </p>

                        <div className="about-vision-mission" style={{ marginTop: '40px' }}>
                            <div className="vm-item" style={{ marginBottom: '30px' }}>
                                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>Our Vision</h4>
                                <p>To become a trusted global IT company delivering innovative and dependable technology solutions that empower businesses and individuals.</p>
                            </div>
                            <div className="vm-item">
                                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>Our Mission</h4>
                                <ul style={{ listStyle: 'none', color: 'var(--text-grey)', padding: 0 }}>
                                    <li style={{ marginBottom: '5px' }}>✓ Deliver high-quality software and IT solutions</li>
                                    <li style={{ marginBottom: '5px' }}>✓ Make technology accessible and scalable</li>
                                    <li style={{ marginBottom: '5px' }}>✓ Build long-term client relationships</li>
                                    <li>✓ Continuously adapt to evolving technologies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="about-image reveal-text" style={{ transitionDelay: '0.2s' }}>
                        <div className="image-container img-reveal">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                                alt="Alphery Vision"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Work Process Section incorporated into About structure for flow */}
                <div className="work-process reveal-group" style={{ marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px' }}>
                    <h3 className="reveal-text" style={{ color: '#fff', fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>Our Work Process</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                        {['Requirement Analysis', 'Planning & Strategy', 'Development', 'Testing & QA', 'Delivery', 'Support'].map((step, i) => (
                            <div key={i} className="reveal-item" style={{
                                padding: '20px 30px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '4px',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <span style={{ opacity: 0.5, fontSize: '0.9rem' }}>0{i + 1}</span>
                                {step}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
