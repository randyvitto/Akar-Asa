import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = [
    { name: 'Nyai Dress', price: 'Rp 4.565.000', image: '/product1.jpg', link: '/product/nyai-dress' },
    { name: 'ILight Cropped Jacket', price: 'Rp 3.190.000', image: '/product2.jpg', link: '/product/ilight-jacket' },
    { name: 'Ketupat Tailored Top', price: 'Rp 3.820.000', image: '/product3.jpg', link: '/product/ketupat-top' },
    { name: 'Roro Skirt', price: 'Rp 3.080.000', image: '/product4.jpg', link: '/product/roro-skirt' },
    { name: 'Ombak Shirt', price: 'Rp 2.970.000', image: '/product5.jpg', link: '/product/ombak-shirt' },
    { name: 'Ombak Skirt', price: 'Rp 2.550.000', image: '/product6.jpg', link: '/product/ombak-skirt' },
  ];

  return (
    <div className="shop-container">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <Link to={product.link || '#'}>
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}></div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Shop;