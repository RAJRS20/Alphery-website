import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Blog from '../components/Blog';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <div className="home-page">
            <Hero />
            <Services />
            <About />
            <Blog />
            <WhyChooseUs />
            <Contact />
        </div>
    );
};

export default HomePage;
