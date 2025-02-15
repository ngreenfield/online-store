import { useState } from 'react';
import './admin.css';

function Admin(){
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    });
    
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        category: ""
    })

    function handleCoupon(e){
        const text = e.target.value;
        const name = e.target.name;

        /**
     * 3 steps to modify Obj or Arrays in State vars:
     * - Create a copy
     * - Modify the copy
     * - Set the copy back
     */

        let copy = {...coupon};
        copy[name] = text;

        setCoupon(copy);
    }

    function saveCoupon(){
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function handleProduct(e){
        const text = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        copy[name] = text;

        setProduct(copy);
    }

    function saveProduct(){
        console.log(product)

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return(
        <div className='admin page'>
            <h1>Store Administration</h1>
            
            <div className='parent'>
                <div className='prods'>
                    <h5>Manage Products</h5>

                    <div>
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="title"/>
                    </div>

                    <div>
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" onBlur={handleProduct} name="price"/>
                    </div>

                    <div>
                        <label className="form-label">Image</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="image"/>
                    </div>

                    <div>
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="category"/>
                    </div>

                    <div className='controls'>
                        <button className='btn btn-sm btn-success' onClick={saveProduct}>Save Product</button>
                    </div>

                    {allProducts.map(ap => <li>{ap.title} - {ap.category} - ${ap.price}</li>)}
                </div>

                <div className="coupons">
                    <h5>Manage Coupons</h5>

                    <div>
                        <label className='form-label'>Code</label>
                        <input type="text" className='form-control' onBlur={handleCoupon} name="code" />
                    </div>

                    <div>
                        <label className='form-label'>Discount</label>
                        <input type="number" className='form-control' onBlur={handleCoupon} name="discount" />
                    </div>
                    
                    <div className='controls'>
                        <button onClick={saveCoupon} className='btn btn-sm btn-success'>Save Coupon</button>
                    </div>

                    {allCoupons.map(cp => <li>{cp.code} - {cp.discount}%</li>)}
                </div>
            </div>
        </div>
    )
}

export default Admin;