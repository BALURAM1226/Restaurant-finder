import React from 'react';
import './homepage.css';
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
              <li>Home</li>
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
