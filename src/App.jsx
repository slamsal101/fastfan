import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import CommitmentSection from './Components/CommitmentSection';
import NewsSection from './Components/NewsSection';
import EventsSection from './Components/EventsSection';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <NewsSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default App;