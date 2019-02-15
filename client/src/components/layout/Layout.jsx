import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { SearchBar } from '../../components';

const Layout = ({ children, history }) => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mercado Libre</title>
    </Helmet>
    <SearchBar history={history} />
    <div>{children}</div>
  </Fragment>
);

export default Layout;
