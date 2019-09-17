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
      <Footer />
      <DiscordWidget />
    </>
  )
}

export default Landing;