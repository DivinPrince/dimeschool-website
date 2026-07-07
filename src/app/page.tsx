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
    <main id="top" className="bg-background overflow-x-clip lg:pl-44">
      <Hero />
      <Manifesto />
      <Features />
      <Integrations />
      <WhyChoose />
      <ProcessFlow />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Portals />
      <Contact />
      <Footer />
    </main>
  );
} 
