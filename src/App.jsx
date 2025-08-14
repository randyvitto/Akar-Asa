import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Your CSS is now imported here
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Shop from './pages/Shop';
import NyaiDress from './pages/NyaiDress';
import IlightJacket from './pages/ILightJacket';
import OmbakShirt from './pages/OmbakShirt';
import OmbakSkirt from './pages/OmbakSkirt';
import KetupatTop from './pages/KetupatTop';
import RoroSkirt from './pages/RoroSkirt';


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