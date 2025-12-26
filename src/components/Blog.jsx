import React from 'react';
import './Blog.css';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "The Evolution of AI in Modern Web Design",
            date: "Dec 20, 2025",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=75&w=800&auto=format&fit=crop",
            excerpt: "How artificial intelligence is reshaping the way we conceive, build, and interact with digital experiences."
        },
        {
            id: 2,
            title: "Minimalism: Why Less is More in 2025",
            date: "Dec 15, 2025",
            category: "Design",
            image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=75&w=800&auto=format&fit=crop",
            excerpt: "Exploring the return to strip-back aesthetics and how clean design improves user conversion rates."
        },
        {
            id: 3,
            title: "Cloud Infrastructure for Scalable Apps",
            date: "Dec 10, 2025",
            category: "Development",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=800&auto=format&fit=crop",
            excerpt: "A deep dive into serverless architectures and why your next project needs to be cloud-native from day one."
        }
    ];

    return (
        <section id="blog" className="blog">
            <div className="container">
                <div className="blog-header reveal-text">
                    <h2>Latest Insights</h2>
                    <a href="#blog" className="blog-view-all">View All Articles</a>
                </div>

                <div className="blog-grid reveal-group">
                    {posts.map((post) => (
                        <article key={post.id} className="blog-card reveal-item">
                            <div className="blog-image-container">
                                <img src={post.image} alt={post.title} loading="lazy" width="400" height="250" />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span>•</span>
                                    <span className="blog-date">{post.date}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
