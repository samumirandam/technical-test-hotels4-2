import React from 'react';

import Button from '@ui/button';

import './header.scss';

const Header = () => {
  return (
    <header className="Header">
      <nav>
        <ul>
          <li>
            <p>Español</p>
          </li>
          <li>
            <Button onClick={() => {}}>Iniciar sesión</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
