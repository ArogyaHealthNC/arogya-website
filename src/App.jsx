import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Join from './pages/Join';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { submitNewsletterForm } from './services/forms';

// Import global styles
import './styles/tokens.css';
import './styles/global.css';
import './styles/components.css';
import './App.css';

// Navigation configuration
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/arogya',
    icon: <Facebook size={20} />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/arogya',
    icon: <Instagram size={20} />,
  },
];

function AppContent() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    // Scroll to join section on home page or navigate to join page
    if (window.location.pathname === '/') {
      const joinSection = document.getElementById('join-program');
      if (joinSection) {
        joinSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/join');
    }
  };

  const handleNewsletterSubmit = async (email) => {
    try {
      await submitNewsletterForm(email);
    } catch (error) {
      console.error('Newsletter submission error:', error);
      throw error;
    }
  };

  return (
    <div className="App">
      <Header
        logoAlt="Arogya"
        navLinks={navLinks}
        ctaText="Join Now"
        onCtaClick={handleJoinClick}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer
        logoAlt="Arogya"
        tagline="Move better. Feel better. Live better."
        contactEmail="hello@arogya.com"
        navLinks={navLinks}
        legalLinks={legalLinks}
        socialLinks={socialLinks}
        onNewsletterSubmit={handleNewsletterSubmit}
      />
      <ExitIntentPopup />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
