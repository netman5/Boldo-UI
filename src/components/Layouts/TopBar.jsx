import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.png';
import styles from './Layout.module.css';

function TopBar() {
  const links = [
    { to: '/', text: 'Product' },
    { to: '/service', text: 'Service' },
    { to: '/about', text: 'About' },
    { to: '/login', text: 'Log In' },
  ];

  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <img src={Logo} alt="company logo" />
        <h1><Link to="/">Boldo</Link></h1>
      </div>

      <ul>
        { links.map((link) => (
          <li key={link.to}>
            {link.to === '/login' ? (
              <button type="button" className={styles.navbtn}>
                <Link to={link.to}>{link.text}</Link>
              </button>
            ) : (
              <Link to={link.to}>{link.text}</Link>
            )}
          </li>
        )) }
      </ul>
    </div>
  );
}

export default TopBar;