import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Productivity from './components/Productivity';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Productivity/>
    </div>
  );
}

export default App;
