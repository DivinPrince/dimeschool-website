import Hero from '../components/Hero';
import DiagonalStripes from '../components/DiagonalStripes';
import Footer from '../components/Footer';
import Manifesto from '../components/Manifesto';
import CoreProducts from '../components/CoreProducts';
import TeamCards from '../components/TeamCards';
import ProcessFlow from '../components/ProcessFlow';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BlogInsights from '../components/BlogInsights';
import Careers from '../components/Careers';
import Contact from '../components/Contact';
import Pricing from '../components/Pricing';

export default function Home() {  
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <Hero />
      
      <DiagonalStripes />

      {/* Products/Services */}
      <CoreProducts />
      
      <DiagonalStripes />
      
      {/* Team */}
      <TeamCards />
      
      <DiagonalStripes />

      {/* About Us - Manifesto */}
      <Manifesto />
      
      <DiagonalStripes />
      
      {/* How It Works Process */}
      <ProcessFlow />
      
      <DiagonalStripes />

      {/* Pricing */}
      <Pricing />
      
      <DiagonalStripes />
      
      {/* Testimonials */}
      <Testimonials />
      
      <DiagonalStripes />
      
      {/* Blog/Insights */}
      <BlogInsights />
      
      <DiagonalStripes />
      
      {/* Careers */}
      <Careers />
      
      <DiagonalStripes />
      
      {/* FAQ */}
      <FAQ />
      
      <DiagonalStripes />
      
      {/* Contact */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
} 