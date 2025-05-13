import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Burner from "./components/Burner";
import Cards from "./components/cards";
import ServisesCard from "./components/ServisesCard";
import ServisesText from "./components/ServisesText";
import Conclution from "./components/Conclution";
import Expert from "./components/Expert";

function App() {
  return (
    <div>
      <Header />
      <Burner />
      <Cards />
      <ServisesText />
      <ServisesCard />
      <Conclution />
      <Expert />
      <Footer />
    </div>
  );
}

export default App;
