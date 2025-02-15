import { useState } from "react";
import "./quantityPicker.css";

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);

    function increase(){
        const value = quantity + 1;
        setQuantity(value);
        props.onChange(value);
    }

    function decrease(){
        const value = quantity - 1;
        if (value > 0){
            setQuantity(value);
        }
        props.onChange(value);
    }


    return(
        <div className="qt-picker picker-btns">

            <button className="btn btn-sm btn-outline-primary" disabled={quantity == 1} onClick={decrease}> - </button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-primary" onClick={increase}> + </button>
        </div>
    );
}

export default QuantityPicker;