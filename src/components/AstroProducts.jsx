import React, { useState } from "react";
import "./Products.css";
import rudraksh1 from "../assets/rudraksh1.jpeg";
import rudraksh2 from "../assets/rudraksh2.jpeg";
import rudraksh3 from "../assets/rudraksh3.jpeg";
import gemstone1 from "../assets/gemstones1.jpeg";
import yantra1 from "../assets/yantra1.jpeg";
import healing1 from "../assets/healing1.jpeg";
import oil1 from "../assets/oil1.jpeg";
import pooja1 from "../assets/pooja1.jpeg";
import dosha1 from "../assets/dosha1.jpeg";
import Footer from "./Footer";
import FAQ from "./FAQ";

const products = [
  {
    name: "Black Tourmaline Bracelet",
    price: 695,
    image: rudraksh1,
    category: "Rudraksh",
  },
  {
    name: "Smokey Quartz Bracelet",
    price: 260,
    image: rudraksh2,
    category: "Rudraksh",
  },
  {
    name: "Unakite Bracelet",
    price: 395,
    image: rudraksh3,
    category: "Rudraksh",
  },
  {
    name: "Amethyst Gemstone",
    price: 999,
    image: gemstone1,
    category: "Gemstones",
  },
  { name: "Shree Yantra", price: 1200, image: yantra1, category: "Yantra" },
  {
    name: "Rose Quartz Healing Crystal",
    price: 450,
    image: healing1,
    category: "Healing Crystals",
  },
  {
    name: "Lavender Essential Oil",
    price: 300,
    image: oil1,
    category: "Essential Oils",
  },
  {
    name: "Vedic Graha Shanti Pooja",
    price: 1500,
    image: pooja1,
    category: "Vedic astrology poojas",
  },
  {
    name: "Mangal Dosha Remedy Kit",
    price: 850,
    image: dosha1,
    category: "Horoscope doshas",
  },
];

const AstroProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = [
    "All",
    "Vedic astrology poojas",
    "Horoscope doshas",
    "For health",
    "For wealth",
    "For success in job",
    "For child birth",
    "For court cases litigation",
    "For love and marriage problems",
    "Black magic removal",
    "Navgraha poojas",
  ];

  return (
    <>
      <div className="astro-container">
        <aside className="sidebar">
          <div className="sidebar-section">
            <h3>TOP CATEGORIES</h3>
            <ul>
              {categories.map((cat) => (
                <li
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="products-section">
          <div className="products-header">
            <h2>
              {selectedCategory === "All"
                ? "70+ ASTRO PRODUCTS"
                : selectedCategory}
            </h2>
            <div className="filters">
              <span>Price - High to Low</span>
              <span>Date by - Newest First</span>
              <select>
                <option>INR</option>
                <option>USD</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((p, i) => (
              <div className="product-card" key={i}>
                <img src={p.image} alt={p.name} />
                <h4>{p.name}</h4>
                <p>INR {p.price.toFixed(2)}</p>
                <a href="#">More Details</a>
              </div>
            ))}
          </div>
        </main>

        <a
          className="whatsapp-button"
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Astro Consultation
        </a>
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default AstroProducts;
