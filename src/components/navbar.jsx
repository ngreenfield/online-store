import { useContext } from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';
import DataContext from '../state/dataContext';


function Navbar(){

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function getProdsInCart(){
        let sum = 0;

        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }

    return (
        <div className="App">
            <nav>
                <div className='navbar-menu'>
                    <span className='title'>Nature's Pantry</span>
                    <Link to="/home">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About</Link>
                    <Link to="/admin">Admin</Link>

                    <Link className="end" to="/cart"> View Cart <span class="badge rounded-pill text-bg-light">{getProdsInCart()}</span><i class="fa-solid fa-cart-shopping"></i></Link>
                    <a href="#" className='nav-user'>Hello, {user.name} <i class="fa-solid fa-circle-user"></i></a>
                </div>
            </nav>
        </div>
    );
}
                    
                    

export default Navbar;