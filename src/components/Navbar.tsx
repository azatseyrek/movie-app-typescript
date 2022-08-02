import React from 'react';
import {Link} from 'react-router-dom';
import {useCtx} from '../context/MovieContext';

const Navbar = () => {
  const {setSearchQuery, searchQuery} = useCtx();
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <span className="navbar__logo">Moviepedia</span>
        </Link>
      </div>

      <div className="navbar__search">
        <input
          placeholder="Search..."
          className="navbar__search__input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
