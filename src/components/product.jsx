import { useState } from 'react';
import './product.css'
import QuantityPicker from './quantityPicker';

function Product(props){
    const [quantity, setQuantity] = useState(1);

    function add(){
        console.log("An item has been added");
    }

    function handleQuantity(qty){
        console.log("quantity changed", qty);
        setQuantity(qty);
    }
    
    return(
        <div className="product">

            <img src={props.data.image} alt=""></img>

            <h4>{props.data.title}</h4>

            <div className='prices'>
                <label className='total'>Total: ${props.data.price * quantity}</label>
                <label className='price'>Price: ${props.data.price}</label>
            </div>

            <div className='picker-btns'>
                <QuantityPicker onChange={handleQuantity}></QuantityPicker>

                <button onClick={add} className='btn btn-success btn-sm'><i class="fa-solid fa-cart-plus"></i>  Add to cart</button>
            </div>
        </div>
    )
}


export default Product;