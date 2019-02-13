import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import qs from 'qs';
import { getItems } from '../../services';
import { Layout, BreadCrumb } from '../../components';
import Product from './Product';

const ProductList = ({ location, history }) => {
  ProductList.defaultProps = {
    results: []
  };
  const [status, setStatus] = useState('pending');
  const [results, setResults] = useState([]);
  const params = qs.parse(location.search, { ignoreQueryPrefix: true });

  const handleFetch = newResults => {
    setResults(newResults);
    setStatus('resolved');
  };

  useEffect(() => {
    setStatus('pending');
    getItems(params.q).then(response => handleFetch(response));
  }, [params.q]);

  if (status === 'pending')
    return (
      <Layout>
        <div>Cargando...</div>
      </Layout>
    );

  return (
    <div>
      <Layout history={history}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{params.q}</title>
          <meta name="description" content={params.q} />
          <meta name="og:title" content={params.q} />
          <meta name="og:type" content="Product search" />
          <meta
            name="og:image"
            content="https://http2.mlstatic.com/ui/navigation/4.0.8/mercadolibre/logo__large_plus@2x.png"
          />
          <meta name="og:url" content="http://mercadolibre.com.ar" />
        </Helmet>
        <BreadCrumb items={results.categories} />
        {results.items.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </Layout>
    </div>
  );
};

export default ProductList;
