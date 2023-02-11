import React from 'react';
import { Button } from '@mui/material';
import { auth } from '../firebase';

function Header(props) {

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
  });

      return unsubscribe;
  }, [user]);

  return (
    <div>
        <img src='marymarthalogo.png'/>

        <Button onClick={() => props.handleMenu('home')}>Home</Button>
        <Button onClick={() => props.handleMenu('about')}>About</Button>
        {user ? (
          <Button onClick={() => props.logout()}>Log Out</Button>
        ) : (
          <Button onClick={() => props.handleOpen()}>Sign In</Button>
        )}
    </div>
  );
}

export default Header;
