import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Nav from "./components/Nav"
import Dropdown from "./components/Dropdown"
import ScrollToTop from './components/ScrollToTop'
import Hero from "./components/Hero"
import Impact from "./components/Impact"
import Process from './components/Process';
import Understanding from './components/Understanding';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu);
    }
  })

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact>
          <Hero />
          <Impact />
          <Process />
          <Understanding />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

// use for main page scroll to top onClick={() => scroll.scrollToTop}