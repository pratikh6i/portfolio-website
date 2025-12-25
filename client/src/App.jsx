import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ClientCaseStudies from './components/ClientCaseStudies';
import AutomationArsenal from './components/AutomationArsenal';
import HallOfFame from './components/HallOfFame';
import TechArsenal from './components/TechArsenal';
import ProjectInventory from './components/ProjectInventory';
import AchievementsAndInterests from './components/AchievementsAndInterests';
import NewsSection from './components/NewsSection';
import BlogsSection from './components/BlogsSection';
import Footer from './components/Footer';
import GoogleTranslate from './components/GoogleTranslate';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Fixed Header with Google Translate */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-white/80 backdrop-blur-md border-b border-[var(--border-subtle)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Name */}
          <motion.a
            href="#"
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            PS
          </motion.a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#experience" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Experience
            </a>
            <a href="#automation" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Automation
            </a>
            <a href="#achievements" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Achievements
            </a>
            <a href="#skills" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Projects
            </a>
            <a href="#blogs" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
              Blog
            </a>
          </nav>

          {/* Google Translate */}
          <div className="flex items-center gap-4">
            <GoogleTranslate />
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Client Case Studies */}
        <ClientCaseStudies />

        {/* Automation Arsenal */}
        <AutomationArsenal />

        {/* Hall of Fame */}
        <HallOfFame />

        {/* Tech Arsenal */}
        <TechArsenal />

        {/* Project Inventory */}
        <ProjectInventory />

        {/* Achievements & Interests */}
        <AchievementsAndInterests />

        {/* News Section */}
        <NewsSection />

        {/* Blogs Section */}
        <BlogsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
