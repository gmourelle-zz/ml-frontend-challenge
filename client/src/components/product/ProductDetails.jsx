import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getItem } from '../../services';
import { BreadCrumb, Spinner } from '../../components';

import './ProductDetails.scss';

const ProductDetails = ({ location, history, match }) => {
  const [status, setStatus] = useState('pending');
  const [results, setResults] = useState([]);
  const { id } = match.params;

  const handleFetch = newResults => {
    setResults(newResults);
    setStatus('resolved');
  };

  useEffect(() => {
    setStatus('pending');
    getItem(id).then(response => handleFetch(response));
  }, []);

  if (status === 'pending') return <Spinner />;

  const { item, categories } = results;

  return (
    <div className="product-details-main">
      <BreadCrumb items={categories} />
      <div className="product-details-container">
        <Helmet>
          <title>{item.title}</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Detalle del producto" />
          <meta name="og:title" content={item.title} />
          <meta name="og:type" ccontent="Detalle del producto" />
          <meta
            name="og:image"
            content="https://http2.mlstatic.com/ui/navigation/4.0.8/mercadolibre/logo__large_plus@2x.png"
          />
          <meta name="og:url" content="http://mercadolibre.com.ar" />
        </Helmet>
        <div className="product-header">
          <div className="product-image">
            <img
              src={item.picture}
              alt={item.title}
              className="img-container"
            />
          </div>
          <div className="product-price-section">
            <div className="section">
              <span className="product-condition">{`${
                item.condition === 'new' ? 'Nuevo' : 'Usado'
              } - ${item.sold_quantity} vendidos`}</span>
              <span className="product-title">{item.title}</span>
              <span className="product-price">
                ${item.price.amount}
                <span className="format-decimal">{item.price.decimals}</span>
              </span>
            </div>
            <button className="btn-buy-product" type="button">
              Comprar
            </button>
          </div>
        </div>
        <div className="description-container">
          <span className="description-title">Descripción del producto</span>
          <p className="description-section">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
