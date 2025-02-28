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

    function getTotal(){
        let total = 0;

        for(let i=0; i<cart.length; i++){
            const prod = cart[i];
            total += (prod.quantity * prod.price);
        }

        return total.toFixed(2);
    }


    return(
        <div className='cart page'>
            <h1>Ready to check out?</h1>
            <br />
            <h4>There are {calcProds()} items in your cart.</h4>

            <div className='parent'>
                <div className="prods">
                    <div className='cart-headers'>
                        <div className='product-header'>Product</div>
                        <div className='price-header'>Price</div>
                        <div className='quantity-header'>Quantity</div>
                        <div className='total-header'>Total</div>
                    </div>
                    
                    {cart.map(prod => <div className='prod-in-cart'>
                        <img src={prod.image} alt='' />
                        <h5>{prod.title}</h5>

                        <label>${prod.price.toFixed(2)}</label>
                        <label>{prod.quantity}</label>
                        <label>${prod.price * prod.quantity}</label>
                    </div>)}
                </div>

                <div className="side-menu">
                    <h3>Order Total</h3>
                    <h5>${getTotal()}</h5>

                    <button className='btn btn-primary'>Proceed to Checkout</button>
                    <br />
                    <button className='btn btn-outline-danger'>Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;