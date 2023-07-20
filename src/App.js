import './App.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Spanish from './components/spanish';
import French from './components/french';
import About from './components/about';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/spanish" element={<Spanish />} />
          <Route path="/french" element={<French />} />
          <Route path="/about" element={<About />} />
        </Router>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
