import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ProductList, ProductDetails, SearchBar } from '../components';

import './App.scss';

const App = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mercado Libre</title>
    </Helmet>
    <SearchBar />
    <Switch>
      <Route exact path="/items" component={ProductList} />
      <Route exact path="/items/:id" component={ProductDetails} />
    </Switch>
  </Fragment>
);

export default App;
