import React from 'react';
import { Button } from '@mui/material';

function Header(props) {

  return (
    <div>
        <img src='marymarthalogo.png'/>
        <Button onClick={() => props.handleMenu('home')}>Home</Button>
        <Button onClick={() => props.handleMenu('about')}>About</Button>

        <Button onClick={() => props.handleLogin()}>Sign in</Button>
    </div>
  );
}

export default Header;
