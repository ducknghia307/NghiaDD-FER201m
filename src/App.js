import './App.css';
import Navigation from './components/Navigation';
import Player from './components/Players'
import Footer from './components/Footer';
import Players from './components/Players';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Players/>
      <Footer/>
    </div>
  );
}

export default App;
