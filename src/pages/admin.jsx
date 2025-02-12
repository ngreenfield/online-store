import './admin.css';

function Admin(){
    return(
        <div className='admin page'>
            <h1>Store Administration</h1>
            
            <div className='parent'>
                <div className='prods'>
                    <h5>Manage Products</h5>

                    <div>
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Image</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className='controls'>
                        <button className='btn btn-sm btn-success'>Save Product</button>
                    </div>
                </div>

                <div className="coupons">
                    <h5>Manage Coupons</h5>

                    <div>
                        <label className='form-label'>Code</label>
                        <input type="text" className='form-control' />
                    </div>

                    <div>
                        <label className='form-label'>Discount</label>
                        <input type="number" className='form-control' />
                    </div>
                    
                    <div className='controls'>
                        <button className='btn btn-sm btn-success'>Save Coupon</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;