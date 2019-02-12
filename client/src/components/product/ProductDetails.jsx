import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getItem } from '../../services';
import Home from '../home';
import { BreadCrumb } from '../breadCrumb';

import qs from 'qs';

const ProductDetails = ({ location, history, match }) => {
  const [status, setStatus] = useState('pending');
  const [results, setResults] = useState([]);
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { id } = match.params;

  const handleFetch = newResults => {
    setResults(newResults);
    setStatus('resolved');
  };

  useEffect(() => {
    setStatus('pending');
    getItem(id).then(response => handleFetch(response));
  }, []);

  if (status === 'pending') return <div>Cargando...</div>;

  return (
    <Home>
      <div>
        <Helmet>
          <title>{results.item.title}</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Detalle del producto" />
          <meta name="og:title" content={results.item.title} />
          <meta name="og:type" ccontent="Detalle del producto" />
          <meta
            name="og:image"
            content="https://http2.mlstatic.com/ui/navigation/4.0.8/mercadolibre/logo__large_plus@2x.png"
          />
          <meta name="og:url" content="http://mercadolibre.com.ar" />
        </Helmet>
        <BreadCrumb items={results.categories} />
        <div>
          <div>
            <img src={results.item.picture} alt={results.item.title} />
          </div>
          <div>
            <div>
              <p>Nuevo - 234 vendidos</p>
            </div>
            <div>
              <p>{results.item.title}</p>
              <p>
                ${results.item.price.amount}
                <sup>{results.item.price.decimals}</sup>
              </p>
            </div>
            <div>
              <button type="button">Comprar</button>
            </div>
          </div>
        </div>
        <div>
          <p>Descripción del producto</p>
          <p>{results.item.description}</p>
        </div>
      </div>
    </Home>
  );
};

export default ProductDetails;
