import React, { useState } from 'react';
import CustomSelect from './CustomSelect';

const IlightJacket = () => {
    const [activeTab, setActiveTab] = useState('desc');
    const [selectedSize, setSelectedSize] = useState(null);

    const sizeOptions = ['Small', 'Medium', 'Large', 'XL'];

  return (
    <div className="page-container">
      <div className="product-container">
        <div className="product-image-detail">
          <img src="/product2.jpg" alt="Ilight Cropped Jacket" />
        </div>
        <div className="product-info">
          <h1>Ilight Cropped Jacket</h1>
          <p className="price">Rp 3.190.000</p>

          <label htmlFor="size">Select Size</label>
          <CustomSelect 
            options={sizeOptions}
            placeholder="Select"
            onSelect={setSelectedSize}
          />

          <button>Add to Bag</button>

          <div className="tabs">
              <span className={activeTab === 'desc' ? 'tab-label active' : 'tab-label'} onClick={() => setActiveTab('desc')}>Description</span>
              <span className={activeTab === 'size' ? 'tab-label active' : 'tab-label'} onClick={() => setActiveTab('size')}>Size & Fit</span>
              <span className={activeTab === 'store' ? 'tab-label active' : 'tab-label'} onClick={() => setActiveTab('store')}>In-Store Availability</span>
              <span className={activeTab === 'delivery' ? 'tab-label active' : 'tab-label'} onClick={() => setActiveTab('delivery')}>Delivery & Returns</span>

              <div className={`tab-content ${activeTab === 'desc' ? 'active' : ''}`}>
                  <strong>Description:</strong> BEADED CROPPED JACKET
                  <br /><br />
                  <strong>Fabric:</strong> DUCHESS SATIN
                  <br /><br />
                  <strong>Composition:</strong> 100% POLYESTER
                  <br /><br />
                  <strong>Colorway:</strong> Cream.
              </div>
              <div className={`tab-content ${activeTab === 'size' ? 'active' : ''}`}>
                  This item fits true to size. Model wears size Medium.
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
    </div>
  );
};
export default IlightJacket;