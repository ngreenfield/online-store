import "./catalog.css";
import Product from "../components/product";

function Catalog(){
    return(
        <div className="catalog page">
            <h1>Check our fresh produce!</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;