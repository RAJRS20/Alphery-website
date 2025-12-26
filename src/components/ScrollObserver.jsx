import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollObserver = () => {
    const location = useLocation();

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Small delay to ensure DOM is ready
        setTimeout(() => {
            const elements = document.querySelectorAll('.reveal-text, .reveal-group, .img-reveal');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, [location]);

    return null;
};

export default ScrollObserver;
