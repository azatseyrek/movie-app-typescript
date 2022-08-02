import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="navbar__logo">Moviepedia</span>
      </Link>

      <div className="navbar__search">
        <form>
          <input
            placeholder="Search..."
            className="navbar__search__input"
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
