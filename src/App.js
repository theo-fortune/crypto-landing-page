import React from "react";
import {
  Navbar,
  Hero,
  Brand,
  Features,
  Howitworks,
  Download,
  Support,
  Footer
} from './components';
import './App.css';
import './fonts/Gilroy-Regular.ttf';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
      <Features />
      <Howitworks />
      <Download />
      <Support />
      <Footer />
    </div>
  );
};

export default App;
