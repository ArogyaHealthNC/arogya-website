import React from 'react';
import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import WhatYouGet from '../sections/WhatYouGet';
import HowItWorks from '../sections/HowItWorks';
import SampleWeek from '../sections/SampleWeek';
import MeetYourGuide from '../sections/MeetYourGuide';
import PhysicianSupport from '../sections/PhysicianSupport';
import Community from '../sections/Community';
import LifestyleTopics from '../sections/LifestyleTopics';
import FAQ from '../sections/FAQ';
import EmailCapture from '../sections/EmailCapture';
import JoinProgram from '../sections/JoinProgram';

const Home = () => {
  return (
    <main className="home-page">
      <SEO />
      <Hero />
      <WhatYouGet />
      <HowItWorks />
      <SampleWeek />
      <MeetYourGuide />
      <PhysicianSupport />
      <Community />
      <LifestyleTopics />
      <FAQ />
      <EmailCapture />
      <JoinProgram />
    </main>
  );
};

export default Home;
