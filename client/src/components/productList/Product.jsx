import React from 'react';
import freeShipping from '../../assets/ic_shipping.png';
import { Link } from 'react-router-dom';

import './Product.scss';
const Product = ({ item }) => {
  const { id, title, picture, price, free_shipping, localidad } = item;
  return (
    <Link className="product-container" to={`/items/${id}`}>
      <div className="product-main">
        <img className="img-container" src={picture} alt={id} />
        <div className="price-container">
          <span className="price-font-size">
            ${price.amount}
            {free_shipping && (
              <img
                src={freeShipping}
                alt="Free shipping"
                className="img-free-shipping"
              />
            )}
          </span>
          <span className="format-title">{title}</span>
        </div>
        <div className="localidad-container">{localidad}</div>
      </div>
    </Link>
  );
};

export default Product;
