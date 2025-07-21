// import './Navbar.css';

// export function Navbar() {
//     return (
//       <nav className="navbar">
//         <div className="logo">
//           <img src="#" alt="RCSL Logo" />
//         </div>
//         <div class="list">
//         <ul>
//             <li><a href="/">About Us</a></li>
//             <li><a href="/get-involved">Get Involved</a></li>
//         </ul>
//         <div className="button">
//           <a href="/events">Explore Events</a>
//         </div>
//       </div>
//       </nav>
//     );
//   }

// Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo from '../../imgs/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/"><img src={logo} alt="RCSL Logo" /></a>
      </div>
      <div className="list">
        <ul className="links">
          <li><a href="/about">About us</a></li>
          <li><a href="/get-involved">Get involved</a></li>
        </ul>
        <div className="button">
          <a href="/events" className="btn">Explore events</a>
        </div>
      </div>
    </nav>
  );
}