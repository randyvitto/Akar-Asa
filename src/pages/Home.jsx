import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleSlideChange = (slide) => {
        setCurrentSlide(slide);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentSlide]);

  // The outer <div className="content"> has been removed.
  // The <section> is now the top-level element.
  return (
    <section className="hero">
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
          <div className="slide">
            <Link to="/collection">
              <img src="/slide1.jpg" alt="Slide 1" />
            </Link>
          </div>
          <div className="slide">
            <Link to="/collection">
               <img src="/slide2.jpg" alt="Slide 2" />
            </Link>
          </div>
          <div className="slide">
            <Link to="/collection">
              <img src="/slide3.jpg" alt="Slide 3" />
            </Link>
          </div>
        </div>

        <div className="hero-text">
          <h1>Autumn/Winter 26/27</h1>
          <p>Explore the Collection</p>
        </div>

        <div className="navigation">
          <label onClick={() => handleSlideChange(1)} className={currentSlide === 1 ? 'active' : ''}></label>
          <label onClick={() => handleSlideChange(2)} className={currentSlide === 2 ? 'active' : ''}></label>
          <label onClick={() => handleSlideChange(3)} className={currentSlide === 3 ? 'active' : ''}></label>
        </div>
      </div>
    </section>
  );
};
export default Home;