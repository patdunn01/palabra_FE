import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Change here
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Spanish from './components/spanish';
import French from './components/french';
import Italian from './components/italian';
import German from './components/german';
import About from './components/about';
import Privacy from './components/privacy';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch> {/* Change here */}
          <Route path="/" exact component={Home} />
          <Route path="/spanish" component={Spanish} />
          <Route path="/french" component={French} />
          <Route path="/italian" component={Italian} />
          <Route path="/german" component={German} />
          <Route path="/about" component={About} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/contact" component={Contact} />
        </Switch> {/* Change here */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
