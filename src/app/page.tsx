import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Manifesto from '../components/Manifesto';
import Features from '../components/Features';
import ProcessFlow from '../components/ProcessFlow';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';
import Integrations from '../components/Integrations';
import WhyChoose from '../components/WhyChoose';
import Portals from '../components/Portals';
import Testimonials from '../components/Testimonials';

export default function Home() {  
  return (
    <div className="bg-background overflow-x-clip">
      <Hero />
      <Manifesto />
      <Features />
      <WhyChoose />
      <ProcessFlow />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Portals />
      <Contact />
      <Footer />
    </div>
  );
} 
