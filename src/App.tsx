import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--dark-gray)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
