import { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { AmazonLogo , List } from "@phosphor-icons/react";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <Link to="/" className="name-logo">
        <AmazonLogo size={34} />
        <p className='name'>Aline's Store</p>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <List size={32} weight="bold" className="icon-menu"/>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to={'/'} className='link'>Home</Link>
        </li>
        <li>
          <Link to={'/favoritos'} className='link'>Favoritos</Link>
        </li>
        <li>
          <Link to={'/login'} className='link'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}