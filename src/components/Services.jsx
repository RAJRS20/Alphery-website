import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    // SVG Icons
    const icons = {
        software: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        ),
        app: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
        ),
        pc: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        ),
        hardware: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
        ),
        arrow: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
        )
    };

    const services = [
        {
            icon: icons.software,
            title: 'Software Development',
            description: 'Website Development (Static/Dynamic), Web Apps, Business Management Systems, Admin Dashboards, API & Backend.'
        },
        {
            icon: icons.app,
            title: 'Mobile App Development',
            description: 'Android & iOS App Development, Cross-Platform Solutions, and UI/UX Focused App Solutions.'
        },
        {
            icon: icons.pc,
            title: 'Custom PC Building',
            description: 'Gaming PCs, Office/Business PCs, Workstations, Editing PCs, Performance Testing & Optimization.'
        },
        {
            icon: icons.hardware,
            title: 'Hardware & IT Solutions',
            description: 'Computer Hardware Sales, System Setup & Configuration, IT Consultation, Upgrade Services.'
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="services-header reveal-text">
                    <h2>Our Services</h2>
                    <span className="service-count">04 Core Areas</span>
                </div>

                <div className="services-grid reveal-group">
                    {services.map((service, index) => (
                        <div key={index} className="service-card reveal-item">
                            <div className="card-top">
                                <span className="service-icon">{service.icon}</span>
                                <span className="service-arrow">{icons.arrow}</span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{service.title}</h3>
                                <p className="card-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="see-more-btn">
                    <button className="btn" onClick={() => navigate('/services')}>
                        View Detailed Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
