import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import About from '@/components/About';
import Factions from '@/components/Factions';
import Features from '@/components/Features';
import Explore from '@/components/Explore';
import Philosophy from '@/components/Philosophy';
import Footer from '@/components/Footer';
import JourneyBackground from '@/components/JourneyBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated Background - Journey Theme */}
      <JourneyBackground themeColor="#2ec7b5" />

      {/* Navigation */}
      <Navbar themeColor="#2ec7b5" />

      {/* Hero Section */}
      <Hero />

      {/* The Four Pillars */}
      <Pillars />

      {/* The World - The Gulag */}
      <About />

      {/* Factions */}
      <Factions />

      {/* Gameplay */}
      <Features />

      {/* Explore - SEO Pages Navigation */}
      <Explore />

      {/* Lore */}
      <Philosophy />

      {/* Footer */}
      <Footer />
    </main>
  );
}
