import "./catalog.css";
import Product from "../components/product";

const catalog = [
    {
        "title": "Apples",
        "image": "/images/fujiapple.jpg",
        "price": 13.97,
        "category": "fruit",
        "_id": "12334"
    },
    {
        "title": "Bananas",
        "image": "/images/banana_m.jpg",
        "price": 11.99,
        "category": "fruit",
        "_id": "54213"
    },
    {
        "title": "Carrots",
        "image": "/images/carrots.png",
        "price": 9.99,
        "category": "vegetable",
        "_id": "14444"
    },
    {
        "title": "Tomatoes",
        "image": "/images/tomato.jpg",
        "price": 10.550,
        "category": "fruit",
        "_id": "25134"
    }
];

const categories = ["Fruits", "Vegetables", "Beverages", "Dairy"]

function Catalog(){
    return(
        <div className="catalog page">
            <h1>Check out our fresh produce!</h1>

            <div className="filters">
            { categories.map(cat => <button className="btn btn-sm btn-outline-primary">{cat}</button>)}
            </div>

            { catalog.map(prod => <Product data={prod}/>)}
        </div>
    );
}

export default Catalog;