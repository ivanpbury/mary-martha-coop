import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import React from 'react';
import Footer from './components/Footer';
import Modal from '@mui/material/Modal';
import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function App() {
  const [page, setPage] = React.useState("");
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleMenu(page) {
    setPage(page);
  }

  function choosePage(page) {
    switch (page) {
      case "about":
        return <About />
      default:
        return <Home />
    }
  }

  const handleOpen = () => {
    setLoginOpen(true);
}

  const login = event => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .catch((e) => {
      alert(e);
    }).then(() => {
      setLoginOpen(false);
    });
  }

  const logout = () => signOut(auth);

  return (
    <div className="App">

      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
          <form className="modal">
            <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email'/>
            <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/>
            <button onClick={login}>Sign In</button>
          </form>
      </Modal>

      <Header handleMenu={handleMenu} handleOpen={handleOpen} logout={logout}/>
      {choosePage(page)}
      <Footer />
    </div>
  );
}

export default App;
