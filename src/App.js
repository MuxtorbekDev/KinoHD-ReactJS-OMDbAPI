import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TopMovies from "./components/TopMovies";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
          <TopMovies />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
