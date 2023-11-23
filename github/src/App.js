import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Productivity from './components/Productivity';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Productivity/>
     <Footer/>
    </div>
  );
}

export default App;
