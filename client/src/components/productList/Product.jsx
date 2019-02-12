import React from 'react';
import freeShipping from '../../assets/ic_shipping@2x.png';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  const { id, title, picture, price, free_shipping } = item;
  return (
    <Link to={`/items/${id}`}>
      <div key={id}>
        <div>
          <div>
            <img src={picture} alt={id} />
          </div>
          <div>
            <div>
              <span>
                ${price.amount}
                <sup>{price.decimals}</sup>
                {free_shipping ? (
                  <img src={freeShipping} alt="Free shipping" />
                ) : null}
              </span>
              {/*<span className="ResultBoxLocation">{product.localidad}</span>*/}
            </div>
            <div>
              <p>
                <Link to={`/items/${id}`}>{title}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
