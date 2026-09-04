import { Routes, Route } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PublicationsPage from './pages/PublicationsPage';
import SoftwarePage from './pages/SoftwarePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-text-primary">
      {/* Particle background */}
      <ParticleBackground />

      {/* Ambient gradient background */}
      <div className="fixed inset-0 animated-gradient-bg pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Main content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
