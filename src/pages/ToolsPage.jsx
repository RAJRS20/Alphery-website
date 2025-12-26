import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ToolsPage.css';

const ToolsPage = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');

    // Featured Active Tools
    const featuredTools = [
        {
            id: 1,
            name: 'Q-Sleep',
            icon: '😴',
            description: 'A system utility designed to keep your computer or server awake, preventing it from entering sleep mode or locking during critical tasks.',
            link: 'https://q-sleep.vercel.app/',
            category: 'utility',
            status: 'live',
            features: ['Prevent sleep mode', 'Server uptime', 'Task monitoring', 'Auto-wake']
        },
        {
            id: 2,
            name: 'Q-Downloader',
            icon: '⬇️',
            description: 'A powerful media downloader that supports fetching videos and content from over 1,000 websites, including popular platforms like YouTube, Instagram, and TikTok.',
            link: 'https://q-downloader.vercel.app/',
            category: 'media',
            status: 'live',
            features: ['1000+ websites', 'HD downloads', 'Fast processing', 'Multiple formats']
        },
        {
            id: 3,
            name: 'Q-Transfer',
            icon: '📤',
            description: 'A secure, peer-to-peer file-sharing tool (based on PairDrop) that allows users to transfer files between devices on the same network instantly without cables or cloud uploads.',
            link: 'https://q-transfer-production.up.railway.app/',
            category: 'transfer',
            status: 'live',
            features: ['P2P transfer', 'No cloud needed', 'Secure sharing', 'Cross-platform']
        }
    ];

    // All Tools Categories
    const allTools = [
        // Core Development
        { id: 11, name: 'Automation', icon: '⚙️', category: 'development', status: 'coming-soon', description: 'Automated workflow and task management' },
        { id: 12, name: 'API Tools', icon: '🔌', category: 'development', status: 'coming-soon', description: 'API testing and development tools' },
        { id: 13, name: 'Database', icon: '🗄️', category: 'development', status: 'coming-soon', description: 'Database management and visualization' },
        { id: 14, name: 'Testing', icon: '🧪', category: 'development', status: 'coming-soon', description: 'Automated testing and QA tools' },
        { id: 15, name: 'Deployment', icon: '🚀', category: 'development', status: 'coming-soon', description: 'CI/CD and deployment automation' },
        { id: 16, name: 'Webhooks', icon: '🔗', category: 'development', status: 'coming-soon', description: 'Webhook testing and management' },
        { id: 17, name: 'Extensions', icon: '🧩', category: 'development', status: 'coming-soon', description: 'Browser and IDE extensions' },

        // Infrastructure & Data
        { id: 21, name: 'Storage', icon: '💾', category: 'infrastructure', status: 'coming-soon', description: 'Cloud storage solutions' },
        { id: 22, name: 'Hosting', icon: '🌐', category: 'infrastructure', status: 'coming-soon', description: 'Web hosting and server management' },
        { id: 23, name: 'Analytics', icon: '📊', category: 'infrastructure', status: 'coming-soon', description: 'Data analytics and insights' },
        { id: 24, name: 'Performance', icon: '⚡', category: 'infrastructure', status: 'coming-soon', description: 'Performance monitoring and optimization' },
        { id: 25, name: 'Monitoring', icon: '📈', category: 'infrastructure', status: 'coming-soon', description: 'System and application monitoring' },
        { id: 26, name: 'Reports', icon: '📄', category: 'infrastructure', status: 'coming-soon', description: 'Automated reporting and dashboards' },

        // Communication & Collaboration
        { id: 31, name: 'Team Hub', icon: '👥', category: 'collaboration', status: 'coming-soon', description: 'Team collaboration platform' },
        { id: 32, name: 'Messaging', icon: '💬', category: 'collaboration', status: 'coming-soon', description: 'Real-time messaging system' },
        { id: 33, name: 'Notifications', icon: '🔔', category: 'collaboration', status: 'coming-soon', description: 'Multi-channel notifications' },
        { id: 34, name: 'AI Assistant', icon: '🤖', category: 'collaboration', status: 'coming-soon', description: 'AI-powered virtual assistant' },

        // Utilities & UI
        { id: 41, name: 'Scheduler', icon: '📅', category: 'utility', status: 'coming-soon', description: 'Task scheduling and calendar' },
        { id: 42, name: 'Templates', icon: '📋', category: 'utility', status: 'coming-soon', description: 'Pre-built templates library' },
        { id: 43, name: 'Forms', icon: '📝', category: 'utility', status: 'coming-soon', description: 'Form builder and management' },
        { id: 44, name: 'Charts', icon: '📈', category: 'utility', status: 'coming-soon', description: 'Data visualization tools' },
        { id: 45, name: 'Files', icon: '📁', category: 'utility', status: 'coming-soon', description: 'File management system' },
        { id: 46, name: 'Search', icon: '🔍', category: 'utility', status: 'coming-soon', description: 'Advanced search functionality' },
        { id: 47, name: 'Settings', icon: '⚙️', category: 'utility', status: 'coming-soon', description: 'Configuration management' },
        { id: 48, name: 'Security', icon: '🔒', category: 'utility', status: 'coming-soon', description: 'Security and encryption tools' },
        { id: 49, name: 'Mobile Apps', icon: '📱', category: 'utility', status: 'coming-soon', description: 'Mobile application suite' }
    ];

    const categories = [
        { id: 'all', name: 'All Tools', icon: '🎯' },
        { id: 'development', name: 'Development', icon: '💻' },
        { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️' },
        { id: 'collaboration', name: 'Collaboration', icon: '👥' },
        { id: 'utility', name: 'Utilities', icon: '🛠️' },
        { id: 'media', name: 'Media', icon: '🎬' },
        { id: 'transfer', name: 'Transfer', icon: '📤' }
    ];

    const filteredTools = activeCategory === 'all'
        ? allTools
        : allTools.filter(tool => tool.category === activeCategory);

    return (
        <div className="tools-page">
            {/* Hero Section */}
            <section className="tools-hero">
                <div className="container">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        ← Back to Home
                    </button>
                    <h1 className="fade-in">
                        Tool <span className="gradient-text">Space</span>
                    </h1>
                    <p className="tools-hero-desc fade-in">
                        Discover our comprehensive suite of development tools, utilities, and applications
                        designed to streamline your workflow and boost productivity.
                    </p>
                </div>
            </section>

            {/* Featured Active Tools */}
            <section className="featured-tools">
                <div className="container">
                    <h2 className="section-title">
                        <span className="gradient-text">Live</span> Tools
                    </h2>
                    <div className="featured-grid">
                        {featuredTools.map((tool, index) => (
                            <div
                                key={tool.id}
                                className="featured-tool-card fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="featured-tool-header">
                                    <div className="featured-tool-icon">{tool.icon}</div>
                                    <div className="live-badge">🟢 Live</div>
                                </div>
                                <h3>{tool.name}</h3>
                                <p className="featured-tool-desc">{tool.description}</p>
                                <div className="featured-tool-features">
                                    {tool.features.map((feature, idx) => (
                                        <span key={idx} className="feature-badge">{feature}</span>
                                    ))}
                                </div>
                                <a
                                    href={tool.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary tool-link-btn"
                                >
                                    Launch Tool →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Tools Section */}
            <section className="all-tools-section">
                <div className="container">
                    <h2 className="section-title">
                        Complete <span className="gradient-text">Toolset</span>
                    </h2>

                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Tools Grid */}
                    <div className="tools-grid">
                        {filteredTools.map((tool, index) => (
                            <div
                                key={tool.id}
                                className="tool-card fade-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="tool-card-icon">{tool.icon}</div>
                                <h4>{tool.name}</h4>
                                <p className="tool-card-desc">{tool.description}</p>
                                <div className="coming-soon-badge">Coming Soon</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="tools-cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Need a Custom Tool?</h2>
                        <p>Let us build a specialized tool tailored to your specific needs.</p>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => {
                                navigate('/');
                                setTimeout(() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                        >
                            Request Custom Tool
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToolsPage;
