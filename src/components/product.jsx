import './product.css'
import QuantityPicker from './quantityPicker';

function Product(){
    return(
        <div className="product">
            <h4>Product title</h4>
            <img src="https://picsum.photos/260/180" alt=""></img>

            <QuantityPicker></QuantityPicker>
        </div>
    )
}

export default Product;