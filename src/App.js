import React, { Component } from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatKHANVAS,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg__gradient">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatKHANVAS />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
