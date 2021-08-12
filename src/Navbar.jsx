import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div className="main-container">
        <nav>
          <div className="logo">
            <img
              src="https://i.ibb.co/w75tghJ/good-food-logo-template-79169-17.jpg"
              alt="logo"
            />
          </div>
          <div className="info">
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                  Home
                </Link>
              </li>
              <li>Menu</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
