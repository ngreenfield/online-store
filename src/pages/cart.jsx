import './cart.css'
import { useContext} from 'react';
import DataContext from '../state/dataContext.js';

function Cart(){
    const cart = useContext(DataContext).cart;

    function calcProds(){
        let sum = 0;

        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }


    return(
        <div className='cart page'>
            <h1>Ready to check out?</h1>
            <br />
            <h4>There are {calcProds()} items in your cart.</h4>
        </div>
    )
}

export default Cart;