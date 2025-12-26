import './Technologies.css';

const Technologies = () => {
    const techStack = [
        { name: 'React', icon: '⚛️', category: 'Frontend' },
        { name: 'Node.js', icon: '🟢', category: 'Backend' },
        { name: 'Python', icon: '🐍', category: 'Backend' },
        { name: 'AWS', icon: '☁️', category: 'Cloud' },
        { name: 'Docker', icon: '🐳', category: 'DevOps' },
        { name: 'Kubernetes', icon: '☸️', category: 'DevOps' },
        { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
        { name: 'MongoDB', icon: '🍃', category: 'Database' },
        { name: 'TensorFlow', icon: '🤖', category: 'AI/ML' },
        { name: 'TypeScript', icon: '📘', category: 'Language' },
        { name: 'GraphQL', icon: '🔷', category: 'API' },
        { name: 'Next.js', icon: '▲', category: 'Framework' },
    ];

    return (
        <section id="technologies" className="section technologies">
            <div className="container">
                <div className="section-title">
                    <h2>Our <span className="gradient-text">Tech Stack</span></h2>
                    <p className="section-subtitle">
                        Leveraging the latest and most powerful technologies to build exceptional solutions
                    </p>
                </div>

                <div className="tech-grid">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="tech-item fade-in"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="tech-icon">{tech.icon}</div>
                            <div className="tech-name">{tech.name}</div>
                            <div className="tech-category">{tech.category}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
