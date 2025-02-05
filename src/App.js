import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='content'>
        <h1>
          Hello World from React!
        </h1>
      </div>
      <Footer></Footer>
    </div>
  );
}


export default App;
