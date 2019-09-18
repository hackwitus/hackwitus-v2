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
import Countdown from '../../components/Countdown';

const Landing = () => {
  return (
    <>
      <Hero key={0} />
      <About key={1} />
      <AffiliateOrganizations key={2} />
      <FAQ key={3} />
      <EventSchedule key={4} />
      <WhatToExpect key={5} />
      <Sponsors key={6} />
      <BecomeAnOrganizer key={7} />
      <Footer key={8} />
      <DiscordWidget key={9} />
      <Countdown date={new Date(process.env.REACT_APP_EVENT_DATE)}/>
    </>
  )
}

export default Landing;