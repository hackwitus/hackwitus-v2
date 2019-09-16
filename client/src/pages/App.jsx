import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as _ from 'lodash';

import Navbar from '../components/NewNavbar';
import Landing from './Landing/Landing';

export default () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef();
  navRef.current = Navbar;

  useEffect(() => {
    window.addEventListener(
      'scroll',
      _.throttle(() => {
        onScroll();
      }),
      { passive: true }
    );
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = () => {
    if (window.scrollY > 685) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <Router basename="hackwitus-v2">
      <div>
        <Navbar scrolled={scrolled} />
        <Route exact path="/" component={Landing} />
        <Route path="/api" component={() => <h1>Hello API!</h1>} />
        <Route path="/about" component={() => <h1>Hello About!</h1>} />
      </div>
    </Router>
  );
};
