import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Corrected imports with proper casing and file extensions
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Collection from './pages/Collection.jsx';
import Shop from './pages/Shop.jsx';

// Also correct the product pages if they exist
import NyaiDress from './pages/NyaiDress.jsx';
import IlightJacket from './pages/ILightJacket.jsx';
import OmbakShirt from './pages/OmbakShirt.jsx';
import OmbakSkirt from './pages/OmbakSkirt.jsx';
import KetupatTop from './pages/KetupatTop.jsx';
import RoroSkirt from './pages/RoroSkirt.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/nyai-dress" element={<NyaiDress />} />
            <Route path="/product/ilight-jacket" element={<IlightJacket />} />
            <Route path="/product/ombak-shirt" element={<OmbakShirt />} />
            <Route path="/product/ombak-skirt" element={<OmbakSkirt />} />
            <Route path="/product/ketupat-top" element={<KetupatTop />} />
            <Route path="/product/roro-skirt" element={<RoroSkirt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;