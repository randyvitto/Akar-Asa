import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About The Brand</h1>
        <p>
          Akar dan Asa was born from a deep love for Indonesian heritage and a vision to bring it into the future. “Akar” means roots — a symbol of our connection to tradition, craftsmanship, and culture. “Asa” means hope — representing our dream to reimagine these traditions for the modern world.
          We work closely with local artisans across Indonesia to highlight the beauty of traditional textiles, weaving their stories into contemporary designs that honor the past while inspiring the future.
          Each Akar dan Asa collection carries its own storytelling — drawing from myths, landscapes, and cultural wisdom to give meaning to every piece we create.
        </p>
      </div>
      <div className="about-image">
        <img src="/about-image.jpg" alt="About fabric" />
      </div>
    </div>
  );
};
export default About;