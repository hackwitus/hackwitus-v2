import React from 'react';

import Hero from './Hero';
import About from './About';
import AffiliateOrganizations from './AffiliateOrganizations';
import FAQ from './FAQ';
import DiscordWidget from '../../components/DiscordWidget';
import EventSchedule from './EventSchedule';

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <AffiliateOrganizations />
      <FAQ />
      <EventSchedule />
      <DiscordWidget />
    </>
  )
}

export default Landing;