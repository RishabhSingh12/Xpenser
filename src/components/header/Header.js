import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpenser <i className="fi fi-rr-credit-card" />
        </div>

        <div className="header-button">
          <a
            href="https://github.com/rishabhsingh12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original colored" />
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
