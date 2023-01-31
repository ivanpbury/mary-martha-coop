import React from 'react';
import { Button } from '@mui/material';

function Header(props) {

  return (
    <div>
        <Button onClick={() => props.handleMenu('contact')}>Home</Button>
        <Button onClick={() => props.handleMenu('calendar')}>Calendar</Button>
        <Button onClick={() => props.handleMenu('about')}>About</Button>
        <Button onClick={() => props.handleMenu('contact')}>Contact</Button>
    </div>
  );
}

export default Header;
