import React from 'react';
import { useStateValue } from '../data/StateProvider';
import '../styles/Payment.css';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../data/Reducer';
import {useNavigate} from 'react-router-dom';


function Payment() {
    const [{cart}, dispatch] = useStateValue();
    const navigate = useNavigate();

  return (
    <div className="payment">

        <div className="payment-container-left">
            <h1>Shipping Details</h1>
            
            <div className="payment-section">
                <div className="name-details">

                        <h5>First Name</h5>
                        <input type="text" placeholder='First Name'/>
                    
                        <h5>Surname</h5>
                        <input type="text" placeholder='Surname'/>
                    
                </div>

                <div className="contact-details">
                    <h5>Mobile No.</h5>
                    <input type="text" placeholder='Mobile No'/>
                </div>

                <div className="address-details">
                    <h5>Address</h5>
                    <input type="text" placeholder='Shipping Address'/>
                </div>

                <button>Save</button>
            </div>

            <div className="payment-section">
                <div className="payment-title">
                    <div className="payment-items">

                        {cart.map(item => {
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                            />
                        })}

                    </div>
                </div>
            </div>

            <div className="payment-section">
                <div className="payment-method">
                    Payment Method
                </div>

                <div className="payment-meth-details">
                    
                </div>
            </div>
        </div>

        <div className="payment-container-right">
            <div className="right-conatiner">
                <h1>Subtotal</h1>
                <CurrencyFormat
                    renderText = {(value) => (
                        <>
                            <p>({cart?.length} items) : <strong>{value}</strong> </p>
                        </>
                        
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={" ₹ "}
                />

                <button onClick={e => navigate('/payment')} >PROCEED</button>
            </div>
        </div>
    </div>
  )
}

export default Payment