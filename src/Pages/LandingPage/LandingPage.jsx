import Copyright from "./Footer/Copyright";
import CustomerFeedback from "./HowitWorks/CustomerFeedback";
import Footer from "./Footer/footer";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowitWorks/HowitWorks";
import Navbar from "./Navbar/Navbar";

const LandingPage = () => {
  return (
    <section className="overflow-hidden">
      <Hero />
      <HowItWorks />
      {/* <CustomerFeedback /> */}
      <Footer />
    </section>
  );
};

export default LandingPage;
