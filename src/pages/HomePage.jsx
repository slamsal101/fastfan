import React, { useEffect, useState } from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import CommitmentSection from '../Components/CommitmentSection'
import NewsSection from '../Components/NewsSection'
import EventsSection from '../Components/EventsSection'
import { getSiteSettings } from '../../apis/publicApi'

function HomePage() {


  return (
    <>
    <HeroSection />
    <AboutSection/>
    <CommitmentSection/>
    <NewsSection/>
    <EventsSection/>
    </>
  )
}

export default HomePage
