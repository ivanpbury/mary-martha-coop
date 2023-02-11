import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import React from 'react';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = React.useState("");

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

  return (
    <div className="App">
      <Header handleMenu={handleMenu}/>
      {choosePage(page)}
      <Footer />
    </div>
  );
}

export default App;
