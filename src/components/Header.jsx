import React from 'react';
import { Button } from '@mui/material';
import { auth } from '../firebase';
import './Header.css';

function Header(props) {

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
  });

      return unsubscribe;
  }, [user]);

  return (
    <div className='sticky header'>
        <img className='header-img' src='marymarthalogo2.png'/>
        <div className='menu-items'>
          <p className='header-p' onClick={() => props.handleMenu('home')}><a className='header-a' href='#'>Home</a></p>
          <p className='header-p' onClick={() => props.handleMenu('about')}><a className='header-a' href='#'>About</a></p>
          {user ? (
            <p className='header-p' onClick={() => props.logout()}><a className='header-a' href='#'>Log Out</a></p>
          ) : (
            <p className='header-p' onClick={() => props.handleOpen()}><a className='header-a' href='#'>Sign In</a></p>
          )}
        </div>
    </div>
  );
}

export default Header;
