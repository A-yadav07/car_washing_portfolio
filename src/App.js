import './App.css';

import Navbar from './pages/Navbar';
import { FaBeer, FaHamburger } from "react-icons/fa";
import Landingpages from './pages/Landingpages';
import Aboutus from './pages/Aboutus';
import Overservice from './pages/Overservice';
import Footer from './pages/Footer';
import Loginpage from './pages/Loginpage';

function App() {
  return (
    <div>
      <Navbar/>
      <Landingpages/>
      <Loginpage/>
      <Aboutus/>
      <Overservice/>
      <Footer/>
    </div>
  );
}

export default App;
