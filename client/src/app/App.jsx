import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, ProductList, ProductDetails } from '../components';

import './App.scss';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/items" component={ProductList} />
    <Route exact path="/items/:id" component={ProductDetails} />
  </Switch>
);

export default App;
