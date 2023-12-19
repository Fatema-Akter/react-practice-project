import React from 'react';
import Header from './components/Header';
import './styles/main.css';
import Footer from './components/Footer';
import Maincontent from './components/Maincontent';
function App() {
  return (
    <div className="App">
      <Header />
        <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
