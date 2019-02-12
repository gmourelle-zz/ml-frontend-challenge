import React from 'react';
import './BreadCrumb.scss';

const Crumb = ({ crumb, isLast }) => {
  return (
    <span className={isLast ? 'crumb last' : 'crumb'}>
      {isLast ? crumb : `${crumb} > `}
    </span>
  );
};

export default Crumb;
