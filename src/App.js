import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Change here
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
        <Switch> {/* Change here */}
          <Route path="/" exact component={Home} />
          <Route path="/spanish" component={Spanish} />
          <Route path="/french" component={French} />
          <Route path="/about" component={About} />
        </Switch> {/* Change here */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
