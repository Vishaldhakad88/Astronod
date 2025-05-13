import React, { useState } from "react";
import "./ServisesCard.css";

const services = [
  {
    category: "paid",
    title: "LEARN VEDIC ASTROLOGY",
    subtitle: "Learn Astrology",
    linkText: "Check Vedic Astrology",
    icon: "books",
  },
  {
    category: "paid",
    title: "ADVANCED ASTROLOGY PREDICTIONS",
    subtitle: "Get detailed predictions based on your kundali",
    linkText: "Check Free Life Predictions",
    icon: "book-open",
  },
  {
    category: "free",
    title: "FUTURE HOROSCOPE PREDICTION BY DATE OF BIRTH",
    subtitle: "Free Astrological Predictions And Horoscope",
    linkText: "Check Free Astrology Predictions",
    icon: "crystal-ball",
  },
  {
    category: "free",
    title: "ASHTAKAVARGA CHART PREDICTION - ASTRO GRAPH PREDICTIONS",
    subtitle: "Free Detailed Ashtakavarga",
    linkText: "Check Ashtakavarga Chart Predictions",
    icon: "graph",
  },
  {
    category: "free",
    title: "KAAL SARP DOSH CHECK",
    subtitle: "Check your Kalsarpa Dosha and its type in detail for free.",
    linkText: "Kaal Sarp Dosh ideas & analysis",
    icon: "snake",
  },
  {
    category: "free",
    title: "KAAL SARP DOSH CHECK",
    subtitle: "Check your Kalsarpa Dosha and its type in detail for free.",
    linkText: "Kaal Sarp Dosh ideas & analysis",
    icon: "snake",
  },
];

const ServiceCards = () => {
  const [filter, setFilter] = useState("all");

  const filteredServices =
    filter === "all" ? services : services.filter((s) => s.category === filter);

  return (
    <div className="services-wrapper">
      {" "}
      <div className="filter-tabs">
        {" "}
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          {" "}
          ALL{" "}
        </button>{" "}
        <button
          className={filter === "paid" ? "active" : ""}
          onClick={() => setFilter("paid")}
        >
          {" "}
          PAID SERVICES{" "}
        </button>{" "}
        <button
          className={filter === "free" ? "active" : ""}
          onClick={() => setFilter("free")}
        >
          {" "}
          FREE SERVICES{" "}
        </button>{" "}
      </div>
      <div className="cards-container">
        {filteredServices.map((service, index) => (
          <div key={index} className="card">
            <div className="icon-placeholder">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
            <a href="#">{service.linkText} →</a>
          </div>
        ))}
      </div>
      <div className="whatsapp-button">
        
        Astro Consultation</div>
    </div>
  );
};

export default ServiceCards;
