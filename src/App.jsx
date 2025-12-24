import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import CommitmentSection from './Components/CommitmentSection';
import NewsSection from './Components/NewsSection';
import EventsSection from './Components/EventsSection';
import Footer from './Components/Footer';

// About Us Pages
import AssociationOverview from './pages/AssociationOverview';
import OurVision from './pages/OurVision';
import FromChairman from './pages/FromChairman';

const App = () => {
  // Simple routing based on URL path
  const path = window.location.pathname;

  // Render different pages based on path
  const renderPage = () => {
    switch(path) {
      case '/about/overview':
        return (
          <>
            <Header />
            <AssociationOverview />
            <Footer />
          </>
        );
      case '/about/vision':
        return (
          <>
            <Header />
            <OurVision />
            <Footer />
          </>
        );
      case '/about/chairman':
        return (
          <>
            <Header />
            <FromChairman />
            <Footer />
          </>
        );
      default:
        // Home page
        return (
          <>
            <Header />
            <HeroSection />
            <AboutSection />
            <CommitmentSection />
            <NewsSection />
            <EventsSection />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
};

export default App;