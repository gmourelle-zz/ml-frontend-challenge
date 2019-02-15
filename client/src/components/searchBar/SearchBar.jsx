import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import logoML from '../../assets/Logo_ML.png';
import logoSearch from '../../assets/ic_Search.png';
import './SearchBar.scss';

const SearchBar = ({ history }) => {
  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/items?q=${e.target.query.value}`);
  };

  return (
    <div className="search-bar-container">
      <Link to="/">
        <img src={logoML} alt="Mercado Libre" className="logo-ml" />
      </Link>
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Nunca dejes de buscar"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <img src={logoSearch} alt="buscar" />
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchBar);
