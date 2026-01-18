import Hero from '../components/Hero';
import DiagonalStripes from '../components/DiagonalStripes';
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

export default function Home() {  
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <Hero />
      
      <DiagonalStripes />

      {/* The Problem & Solution */}
      <Manifesto />
      
      <DiagonalStripes />

      {/* Features for different users */}
      <Features />
      
      <DiagonalStripes />
      
      {/* Why Schools Choose DimeSchool */}
      <WhyChoose />
      
      <DiagonalStripes />
      
      {/* How It Works - Getting Started */}
      <ProcessFlow />
      
      <DiagonalStripes />

      {/* Pricing */}
      <Pricing />
      
      <DiagonalStripes />
      
      {/* Integrations - MarkEase */}
      <Integrations />
      
      <DiagonalStripes />
      
      {/* FAQ */}
      <FAQ />
      
      {/* Portals */}
      <Portals />

      {/* Contact */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 