import React, { useState } from 'react';

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState('desc');

  return (
    <div className="product-container">
      <div className="product-image-detail">
        <img src="/ikat-bustier.jpg" alt="Ikat Bustier" />
      </div>
      <div className="product-info">
        <h1>Ikat Bustier</h1>
        <p>Bustier with Ikat fabric</p>
        <p className="price">Rp 3.000.000</p>

          <label htmlFor="size">Select Size</label>
          <div className="select-wrapper">
          <select id="size" name="size">
              <option disabled selected hidden>Select</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XL</option>
          </select>
          </div>


        <label htmlFor="color">Select Colour</label>
        <select id="color" name="color">
          <option value="">Select</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Black</option>
        </select>

        <button>Add to Bag</button>

        <div className="tabs">
            <span className={activeTab === 'desc' ? 'tab-label active' : 'tab-label'} onClick={() => setActiveTab('desc')}>Description</span>
            <span className={activeTab === 'size' ? 'tab-label active' : 'tab-label'} onClick={() => setActiveTab('size')}>Size & Fit</span>
            <span className={activeTab === 'store' ? 'tab-label active' : 'tab-label'} onClick={() => setActiveTab('store')}>In-Store Availability</span>
            <span className={activeTab === 'delivery' ? 'tab-label active' : 'tab-label'} onClick={() => setActiveTab('delivery')}>Delivery & Returns</span>

            <div className={`tab-content ${activeTab === 'desc' ? 'active' : ''}`}>
                A bustier featuring a corset style paneling. Designed to be worn on its own or layered over blouses or dresses.
            </div>
            <div className={`tab-content ${activeTab === 'size' ? 'active' : ''}`}>
                This bustier fits true to size. Model wears size Medium.
            </div>
            <div className={`tab-content ${activeTab === 'store' ? 'active' : ''}`}>
                Available at Jakarta, Surabaya, Bali boutiques.
            </div>
            <div className={`tab-content ${activeTab === 'delivery' ? 'active' : ''}`}>
                Free shipping within Indonesia. 14-day return policy.
            </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;