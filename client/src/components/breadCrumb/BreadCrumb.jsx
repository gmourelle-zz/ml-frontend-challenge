import React from 'react';
import Crumb from './Crumb';
import './BreadCrumb.scss';

const Breadcrumb = ({ items }) => (
  <div className="bread-crumb-container">
    {items.map((c, index) => (
      <Crumb key={c} crumb={c} isLast={index === items.length - 1} />
    ))}
  </div>
);

export default Breadcrumb;
