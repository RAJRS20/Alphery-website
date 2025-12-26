import { useNavigate } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            icon: '💻',
            title: 'Custom Software Development',
            shortDesc: 'Tailored software solutions designed to meet your unique business requirements.',
            fullDesc: 'Transform your business vision into reality with our custom software development services. We specialize in building scalable, robust, and user-friendly applications that align perfectly with your business objectives. Our experienced team follows agile methodologies to ensure rapid delivery without compromising quality.',
            features: [
                'Full-cycle development from concept to deployment',
                'Scalable architecture design',
                'Modern technology stack (React, Node.js, Python)',
                'API development and integration',
                'Database design and optimization',
                'Quality assurance and testing',
                'Ongoing maintenance and support',
                'Legacy system modernization'
            ],
            technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'PHP', 'MongoDB', 'PostgreSQL'],
            benefits: [
                'Increased operational efficiency',
                'Reduced manual processes',
                'Improved data accuracy',
                'Better customer experience',
                'Competitive advantage'
            ]
        },
        {
            id: 2,
            icon: '☁️',
            title: 'Cloud Solutions & Migration',
            shortDesc: 'Seamless cloud migration and infrastructure management for optimal performance.',
            fullDesc: 'Unlock the power of cloud computing with our comprehensive cloud solutions. Whether you\'re looking to migrate existing systems or build cloud-native applications, we provide end-to-end services across AWS, Azure, and Google Cloud Platform. Our certified cloud architects ensure your infrastructure is secure, scalable, and cost-effective.',
            features: [
                'Cloud strategy and consulting',
                'Infrastructure as Code (IaC)',
                'Multi-cloud and hybrid cloud solutions',
                'Cloud migration and modernization',
                'Serverless architecture',
                'Container orchestration (Kubernetes)',
                'Cloud security and compliance',
                'Cost optimization and monitoring'
            ],
            technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation'],
            benefits: [
                'Reduced infrastructure costs',
                'Improved scalability and flexibility',
                'Enhanced disaster recovery',
                'Global availability',
                'Pay-as-you-go pricing'
            ]
        },
        {
            id: 3,
            icon: '🤖',
            title: 'AI & Machine Learning',
            shortDesc: 'Harness the power of artificial intelligence to automate and optimize your business.',
            fullDesc: 'Stay ahead of the competition with cutting-edge AI and machine learning solutions. Our data scientists and ML engineers build intelligent systems that learn from data, make predictions, and automate complex decision-making processes. From natural language processing to computer vision, we deliver AI solutions that drive real business value.',
            features: [
                'Machine learning model development',
                'Natural Language Processing (NLP)',
                'Computer vision and image recognition',
                'Predictive analytics and forecasting',
                'Recommendation systems',
                'Chatbots and virtual assistants',
                'Anomaly detection',
                'AI model deployment and monitoring'
            ],
            technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Hugging Face', 'AWS SageMaker'],
            benefits: [
                'Automated decision making',
                'Improved accuracy and efficiency',
                'Deeper insights from data',
                'Reduced operational costs',
                'Enhanced customer experiences'
            ]
        },
        {
            id: 4,
            icon: '🔒',
            title: 'Cybersecurity Services',
            shortDesc: 'Comprehensive security solutions to protect your digital assets 24/7.',
            fullDesc: 'In today\'s digital landscape, security is paramount. Our cybersecurity experts provide comprehensive protection for your systems, data, and applications. We conduct thorough security assessments, implement robust security measures, and provide ongoing monitoring to keep your business safe from evolving cyber threats.',
            features: [
                'Security audits and assessments',
                'Penetration testing',
                'Vulnerability scanning',
                'Security incident response',
                'Compliance management (GDPR, HIPAA, ISO)',
                'Identity and access management',
                'Network security',
                'Security awareness training'
            ],
            technologies: ['Firewall', 'IDS/IPS', 'SIEM', 'Encryption', 'VPN', 'Multi-factor Authentication'],
            benefits: [
                'Protected sensitive data',
                'Regulatory compliance',
                'Reduced security risks',
                'Business continuity',
                'Customer trust and confidence'
            ]
        },
        {
            id: 5,
            icon: '📱',
            title: 'Mobile App Development',
            shortDesc: 'Native and cross-platform mobile applications for iOS and Android.',
            fullDesc: 'Reach your customers wherever they are with beautiful, high-performance mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. Our mobile apps are designed for optimal user experience, performance, and engagement.',
            features: [
                'iOS and Android development',
                'Cross-platform development (React Native, Flutter)',
                'UI/UX design for mobile',
                'App store optimization',
                'Push notifications',
                'In-app purchases',
                'Offline functionality',
                'App maintenance and updates'
            ],
            technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'Redux'],
            benefits: [
                'Increased customer reach',
                'Better customer engagement',
                'Improved brand visibility',
                'Additional revenue streams',
                'Enhanced customer loyalty'
            ]
        },
        {
            id: 6,
            icon: '⚙️',
            title: 'DevOps & Automation',
            shortDesc: 'Streamline development with CI/CD pipelines and infrastructure automation.',
            fullDesc: 'Accelerate your software delivery with our DevOps and automation services. We implement continuous integration and continuous deployment (CI/CD) pipelines, automate infrastructure provisioning, and establish monitoring and logging systems. Our DevOps practices reduce time-to-market while improving reliability and quality.',
            features: [
                'CI/CD pipeline setup',
                'Infrastructure automation',
                'Configuration management',
                'Monitoring and logging',
                'Automated testing',
                'Release management',
                'Infrastructure as Code',
                'Performance optimization'
            ],
            technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Prometheus', 'Grafana'],
            benefits: [
                'Faster deployment cycles',
                'Reduced manual errors',
                'Improved collaboration',
                'Better system reliability',
                'Lower operational costs'
            ]
        },
        {
            id: 7,
            icon: '🎨',
            title: 'UI/UX Design',
            shortDesc: 'Beautiful, intuitive interfaces that delight users and drive conversions.',
            fullDesc: 'Create exceptional user experiences with our UI/UX design services. Our designers combine creativity with data-driven insights to craft interfaces that are not only beautiful but also highly functional. We follow user-centered design principles to ensure your products are intuitive, accessible, and engaging.',
            features: [
                'User research and personas',
                'Wireframing and prototyping',
                'Visual design and branding',
                'Usability testing',
                'Design systems',
                'Responsive design',
                'Accessibility compliance',
                'Design handoff and implementation'
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Zeplin'],
            benefits: [
                'Increased user satisfaction',
                'Higher conversion rates',
                'Reduced development costs',
                'Stronger brand identity',
                'Competitive differentiation'
            ]
        },
        {
            id: 8,
            icon: '📊',
            title: 'Data Analytics & Business Intelligence',
            shortDesc: 'Transform raw data into actionable insights for data-driven decisions.',
            fullDesc: 'Make informed business decisions with our data analytics and business intelligence solutions. We help you collect, process, and visualize data to uncover valuable insights. Our BI solutions include custom dashboards, reports, and predictive analytics that empower your team to make data-driven decisions.',
            features: [
                'Data warehousing',
                'ETL processes',
                'Interactive dashboards',
                'Custom reporting',
                'Predictive analytics',
                'Data visualization',
                'Real-time analytics',
                'Big data processing'
            ],
            technologies: ['Power BI', 'Tableau', 'Apache Spark', 'Hadoop', 'Snowflake', 'SQL', 'Python', 'R'],
            benefits: [
                'Better decision making',
                'Improved operational efficiency',
                'Identified growth opportunities',
                'Reduced costs',
                'Competitive insights'
            ]
        }
    ];

    return (
        <div className="services-page">
            <div className="container">
                {/* Hero Section */}
                <section className="services-hero">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        ← Back
                    </button>
                    <h1 className="fade-in">Our <span className="gradient-text">Services</span></h1>
                    <p className="services-hero-desc fade-in">
                        Scale your business with our tailored digital solutions.
                    </p>
                </section>

                {/* Services Grid */}
                <div className="services-grid-container">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="service-detail-card fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-detail-header">
                                <div className="service-detail-icon">{service.icon}</div>
                                <div>
                                    <h2>{service.title}</h2>
                                    <p className="service-short-desc">{service.shortDesc}</p>
                                </div>
                            </div>

                            <div className="service-description">
                                <p>{service.fullDesc}</p>
                            </div>

                            <ul className="service-features-list">
                                {service.features.slice(0, 4).map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="checkmark">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="tech-tags">
                                {service.technologies.slice(0, 4).map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
