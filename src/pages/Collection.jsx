import React from 'react';

const Collection = () => {
  return (
    <div>
      <section className="collection-hero">
        <img src="/hero-image.png" alt="Hero Collection" />
      </section>

      <section className="intro">
        <div className="intro-text">
          <h1>Autumn/Winter 26/27</h1>
          <p>
            This collection is inspired by the legend of Nyi Roro Kidul, the Queen of the South Sea and guardian of the southern coast of Java. She is known as a powerful spirit of the ocean, often associated with beauty, mystery, and the color green.
            We celebrate this story through the use of traditional fabrics sourced from across Java Island — each look blending heritage textiles with modern silhouettes.
          </p>
        </div>
        <div className="intro-image">
           <video width="100%" height="auto" controls autoPlay muted loop>
              <source src="/watu-maladong.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
      </section>

      <section className="gallery">
        <img src="/gallery1.jpg" alt="Gallery 1" />
        <img src="/gallery2.jpg" alt="Gallery 2" />
        <img src="/gallery3.jpg" alt="Gallery 3" />
      </section>
    </div>
  );
};
export default Collection;