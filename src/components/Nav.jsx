import React, { useState } from 'react';
import './Nav.css';

const Nav = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="navbar">
      <div className="logo">windbnb</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Helsinki, Finland"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img
            src="https://img.icons8.com/?size=100&id=59878&format=png&color=EB5757"
            alt="Search Icon"
            className="loop"
          />
        </button>
      </div>
    </div>
  );
};

export default Nav;
