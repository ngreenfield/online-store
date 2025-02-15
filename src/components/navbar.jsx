import { useContext } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/dataContext';


function Navbar(){

    const user = useContext(DataContext).user;

    return (
        <div className="App">
            <nav>
                <div className='navbar-menu'>
                    <span className='title'>Nature's Pantry</span>
                    <Link to="/home">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About</Link>
                    <Link to="/admin">Admin</Link>

                    <Link className="end" to="/cart">View Cart <i class="fa-solid fa-cart-shopping"></i></Link>
                    <a href="#" className='nav-user'>Hello, {user.name} <i class="fa-solid fa-circle-user"></i></a>
                </div>
            </nav>
        </div>
    );
}
                    
                    

export default Navbar;