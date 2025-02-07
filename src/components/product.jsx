import './product.css'
import QuantityPicker from './quantityPicker';

function Product(props){

    function add(){
        console.log("An item has been added");
    }
    
    return(
        <div className="product">

            <img src={props.data.image} alt=""></img>

            <h4>{props.data.title}</h4>

            <label>{props.data.price}</label>

            <div className='picker-btns'>
                <QuantityPicker></QuantityPicker>
                <button className='btn btn-success btn-sm' onClick={add}>Add</button>
            </div>
        </div>
    )
}


export default Product;