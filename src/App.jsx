import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Home from './components/Home';
import React from 'react';

function App() {
  const [page, setPage] = React.useState("");

  function choosePage(page) {
    switch (page) {
      case "calendar":
        return <Calendar />
        break;
      case "about":
        return <About />
        break;
      case "contact":
        return <Contact />
        break;
      default:
        return <Home />
    }
  }

  return (
    <div className="App">
      <Header />
      {choosePage(page)}

    </div>
  );
}

export default App;
