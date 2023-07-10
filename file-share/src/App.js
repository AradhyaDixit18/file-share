import Home from './Components/Home/home';
import './App.css';
import { Route , Routes } from 'react-router-dom'; 
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
    </>
  );
}

export default App;
