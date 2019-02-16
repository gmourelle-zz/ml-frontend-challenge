import React from 'react';
import Crumb from './Crumb';
import './BreadCrumb.scss';

const Breadcrumb = ({ items }) => (
  <div className="bread-crumb-container">
    {items ? (
      items.map(c => <Crumb key={c} crumb={c} />)
    ) : (
      <span className="no-category">No existe categoria para resultado</span>
    )}
  </div>
);

export default Breadcrumb;
