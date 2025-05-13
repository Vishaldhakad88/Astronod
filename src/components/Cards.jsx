import React from 'react';
import chandigara from '../assets/chandigara.jpeg';
import generalPrediction from '../assets/generalPrediction.jpeg';
import panchang from '../assets/panchang.jpeg';
import './cards.css';

const cardsData = [
  { image: chandigara, title: 'Chandigara', description: 'Chandigara card description.' },
  { image: generalPrediction, title: 'General Prediction', description: 'General prediction card content.' },
  { image: panchang, title: 'Panchang', description: 'Panchang related information.' }
];

function Cards() {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index} style={{ width: '18rem' }}>
          <img src={card.image} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
