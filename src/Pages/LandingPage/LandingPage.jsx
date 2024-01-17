import Copyright from "./Footer/Copyright";
import CustomerFeedback from "./HowitWorks/CustomerFeedback";
import Footer from "./Footer/footer";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowitWorks/HowitWorks";
import Navbar from "./Navbar/Navbar";
import About from "../about/About";
import Why from "../why/Why";
import Features from "../features/Features";

const LandingPage = () => {
  return (
    <section className="overflow-hidden">
      <Hero />
      <About/>
      <Why/>
      <Features/>
      <HowItWorks />
      {/* <CustomerFeedback /> */}
      <Footer />
    </section>
  );
};

export default LandingPage;
