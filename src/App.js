import './App.css';

import Navbar from './pages/Navbar';
import { FaBeer, FaHamburger } from "react-icons/fa";
import Landingpages from './pages/Landingpages';
import Aboutus from './pages/Aboutus';
import Overservice from './pages/Overservice';
import Footer from './pages/Footer';
import Loginpage from './pages/Loginpage';
import Copyrightfooter from './pages/Copyrightfooter';

function App() {
  return (
    <div>
      <Navbar/>
      <Landingpages/>
      <Loginpage/>
      <Aboutus/>
      <Overservice/>
      <Footer/>
      <Copyrightfooter/>
    </div>
  );
}

export default App;
