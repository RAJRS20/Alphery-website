import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: 'Experienced IT Professionals',
            description: 'Our certified team brings years of industry expertise to deliver top-notch solutions.',
            icon: '👨‍💻'
        },
        {
            title: 'Custom Solutions',
            description: 'We build tailored strategies and software designed specifically for your unique needs.',
            icon: '🎯'
        },
        {
            title: 'Performance & Security',
            description: 'We prioritize high-performance code and enterprise-grade security for every project.',
            icon: '🔒'
        },
        {
            title: 'Transparent Pricing',
            description: 'Clear communication and honest pricing with no hidden costs or surprises.',
            icon: '💎'
        },
        {
            title: 'On-Time Delivery',
            description: 'We value your time and adhere to strict timelines without compromising quality.',
            icon: '⏱️'
        },
        {
            title: 'Reliable Support',
            description: 'Continuous post-delivery support to ensure your technology keeps running smoothly.',
            icon: '🤝'
        }
    ];

    const industries = [
        'Startups', 'Small & Medium Businesses', 'E-commerce', 'Education',
        'Healthcare', 'Retail', 'Service-based Organizations'
    ];

    return (
        <section className="section why-choose-us">
            <div className="container">
                <div className="section-title reveal-text">
                    <h2>Why Choose <span className="gradient-text">Alphery</span></h2>
                    <p style={{ marginTop: '15px', color: 'var(--text-grey)', fontSize: '1.2rem' }}>
                        Alphery works as your technology partner, not just a service provider.
                    </p>
                </div>

                <div className="reasons-grid grid grid-3 reveal-group">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="reason-card card reveal-item"
                        >
                            <div className="reason-icon">{reason.icon}</div>
                            <h3 className="card-title">{reason.title}</h3>
                            <p className="card-description">{reason.description}</p>
                        </div>
                    ))}
                </div>

                <div className="industries-section reveal-group" style={{ marginTop: '100px', textAlign: 'center' }}>
                    <h3 className="reveal-text" style={{ color: '#fff', fontSize: '2rem', marginBottom: '40px' }}>Industries We Serve</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                        {industries.map((ind, i) => (
                            <span key={i} className="reveal-item" style={{
                                padding: '10px 25px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '100px',
                                color: '#fff',
                                fontSize: '0.9rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {ind}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
