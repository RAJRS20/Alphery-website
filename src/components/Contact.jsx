import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info reveal-text">
                        <span className="section-label">Get in Touch</span>
                        <h2 className="contact-title">Let's Build Something<br />Great Together.</h2>
                        <p className="contact-description">
                            Have a project in mind? We'd love to hear from you.
                            Send us a message and we'll get back to you shortly.
                        </p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <span className="detail-label">Email</span>
                                <a href="mailto:contact@alphery.com" className="detail-value">contact@alphery.com</a>
                            </div>

                            <div className="detail-item">
                                <span className="detail-label">Location</span>
                                <p className="detail-value">India</p>
                            </div>

                            <div className="detail-item">
                                <span className="detail-label">Socials</span>
                                <div className="social-row">
                                    <a href="#">LinkedIn</a>
                                    <a href="#">Twitter</a>
                                    <a href="#">Instagram</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company (Optional)</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="form-input"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Company name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-input"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Tell us about your project"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={submitted}>
                                {submitted ? 'Message Sent' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
