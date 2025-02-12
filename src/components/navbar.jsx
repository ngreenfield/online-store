import './navbar.css';

import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <div className="App">
            <nav>
                <div className='navbar-menu'>
                    <span className='title'>Nature's Pantry</span>
                    <Link to="/home">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About</Link>
                    <Link to="/admin">Admin</Link>
                    <Link className="end" to="/cart">View Cart</Link>
                </div>
            </nav>
        </div>
    );
}
                    
                    

export default Navbar;