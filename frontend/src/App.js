import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Works } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Works />
    <Skills />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
