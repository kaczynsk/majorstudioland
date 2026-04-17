import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--bg-white)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Cursor />
      <Navbar />
      <main>
        <Hero key="hero-v2" />
        <Marquee key="marquee-v2" />
        <Work key="work-v2" />
        <Services key="services-v2" />
        <CTABanner key="cta-v2" />
        <Contact key="contact-v2" />
        <About key="about-v2" />
      </main>
      <Footer />
    </div>
  );
}
