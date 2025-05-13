import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (with Popper)
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Vedic_Pujas from './pages/Vedic_Pujas.jsx';
import Products from './pages/Products.jsx';
import Servises from './pages/Servises.jsx';
import Contact from './pages/Contact.jsx';
import App from './App.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<App />} />
        
        {/* Other routes */}
        
        <Route path="/about" element={<About />} />
        <Route path="/vedic_pujas" element={<Vedic_Pujas />} />
        <Route path="/products" element={<Products />} />
        <Route path="/service" element={<Servises />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
