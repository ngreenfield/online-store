import "./catalog.css";
import Product from "../components/product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

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
    },
    {
        "title": "Sourdough",
        "image": "/images/sourdough.jpg",
        "price": 15.39,
        "category": "Bread",
        "_id": "22234"
    },
    {
        "title": "Orange Juice",
        "image": "/images/orangejuice.jpg",
        "price": 11.29,
        "category": "Beverages",
        "_id": "45534"
    },
    {
        "title": "Broccoli",
        "image": "/images/broccoli-bg.jpg",
        "price": 10.99,
        "category": "vegetable",
        "_id": "25134" 
    },
    {
        "title": "Vegetable Juice",
        "image": "/images/green-juice.jpg",
        "price": 16.99,
        "category": "Beverages",
        "_id": "42562" 
    },
    {
        "title": "Whole Wheat Bread",
        "image": "/images/wheatbread.jpg",
        "price": 12.59,
        "category": "Bread",
        "_id": "452162" 
    }
];

const categories = ["Fruits", "Vegetables", "Beverages", "Bread"]

function Catalog(){
    const [allProducts, setAllProducts] = useState([])

    async function loadProducts(){
        const data = await DataService.getProducts();
        setAllProducts(data);
    }

    useEffect(function(){
        loadProducts();
    }, []);

    return(
        <div className="catalog page">
            <h1>Check out our fresh produce!</h1>

            <div className="filters">
            { categories.map(cat => <button key={cat} className="btn btn-sm btn-danger">{cat}</button>)}
            </div>

            {allProducts.map(prod => <Product key={prod.id} data={prod}/>)}
        </div>
    );
}

export default Catalog;