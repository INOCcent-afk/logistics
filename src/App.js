import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import Reseller from "./components/pages/Reseller";
import Solutions from "./components/pages/Solutions";
import Services from "./components/pages/Services";

import WhitePapers from "./components/pages/WhitePapers";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reseller" exact component={Reseller} />
            <Route path="/services" exact component={Services} />
            <Route path="/solutions" exact component={Solutions} />

            <Route path="/whitepapers" exact component={WhitePapers} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
