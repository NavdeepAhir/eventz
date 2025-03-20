import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="bg-neutral">
      <Header />
      <HeroSection />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
