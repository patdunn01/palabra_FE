import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/header';
import Home from './components/home';
import Spanish from './components/spanish';


function App() {

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spanish" element={<Spanish />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
