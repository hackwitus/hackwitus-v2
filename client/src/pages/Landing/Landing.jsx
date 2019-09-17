import React from 'react';

import Hero from './Hero';
import About from './About';
import AffiliateOrganizations from './AffiliateOrganizations';
import FAQ from './FAQ';
import EventSchedule from './EventSchedule';
import WhatToExpect from './WhatToExpect';
import Sponsors from './Sponsors';
import Footer from './Footer';
import DiscordWidget from '../../components/DiscordWidget';
import BecomeAnOrganizer from './BecomeAnOrganizer';

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <AffiliateOrganizations />
      <FAQ />
      <EventSchedule />
      <WhatToExpect />
      <Sponsors />
      <BecomeAnOrganizer />
      <Footer />
      <DiscordWidget />
    </>
  )
}

export default Landing;