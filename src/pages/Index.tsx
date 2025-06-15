import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WorkProcessSection from '../components/WorkProcessSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import ServicesSection from '../components/ServicesSection';
import TrustedClientsSection from '../components/TrustedClientsSection';
import OurWorkSection from '../components/OurWorkSection';
import FooterSection from '../components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-brandwave-black">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="process">
        <WorkProcessSection />
      </div>
      <div id="about">
        <WhoWeAreSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <TrustedClientsSection />
      <div id="work">
        <OurWorkSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;