import './App.css';
import Navigation from './components/Navigation';
import Player from './components/Players'
import Footer from './components/Footer';
import Players from './components/Players';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main></Main>
      <Footer/>
    </div>
  );
}

export default App;
