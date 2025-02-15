import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Admin from './pages/admin';
import Home from './pages/home';
import Cart from './pages/cart';
import GlobalProvider from './state/globalProvider';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/home" element={ <Home /> }></Route>
            <Route path="/catalog" element={ <Catalog /> }></Route>
            <Route path="/admin" element={ <Admin /> }></Route>
            <Route path="/about" element={ <About /> }></Route>
            <Route path="/cart" element={<Cart/> }></Route>
          </Routes>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalProvider>
);
}

export default App;



