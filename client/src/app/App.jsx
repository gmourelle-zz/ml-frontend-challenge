import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, ProductList, ProductDetails } from '../components';

import './App.scss';

const App = () => (
  <Switch>
    <Route exact path="/" component={Layout} />
    <Route exact path="/items" component={ProductList} />
    <Route exact path="/items/:id" component={ProductDetails} />
  </Switch>
);

export default App;
