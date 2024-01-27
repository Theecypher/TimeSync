import CustomerFeedback from "./HowitWorks/CustomerFeedback";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowitWorks/HowitWorks";
import Features from "../features/Features";
import About from "../about/About";
import Why from "../why/Why";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <section className="overflow-hidden">
      <Hero />
      <About />
      <Why />
      <Features />
      <CustomerFeedback />
      <HowItWorks />
      <Footer />
    </section>
  );
};

export default LandingPage;
