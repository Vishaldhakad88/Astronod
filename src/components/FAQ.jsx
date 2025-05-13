import React, { useState } from "react";
// import './FAQ.css';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="faq-container">
      <h2>QUESTIONS (FAQ'S)</h2>
      <div className="faq-item">
        <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
          <span>What is dosha ?</span>
          <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
          <div className="faq-answer">
            An astrological Dosha is the defect in the birth chart of a person
            which creates serious afflictions in that person’s life related to
            the type of dosha that is formed. For eg Mangal Dosha can create
            serious troubles relating the married life of the person.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
