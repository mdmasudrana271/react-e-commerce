import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let Total = 0;
    let Shipping = 0;
    for(const product of cart){
        Total = Total + product.price;
        Shipping = Shipping + product.shipping;
    }
    const tax = parseFloat((Total * 0.1).toFixed(2));
    const grandTotal = Total + Shipping + tax;
    // const Tax = tax.toFixed(2)
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected item: {cart.length}</p>
            <p>Total Price: ${Total}</p>
            <p>Total Shipping: ${Shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;