import React from 'react';
import '../styles/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../data/StateProvider';
import { getCartTotal } from '../data/Reducer';
import  { useNavigate } from 'react-router-dom';


function Subtotal() {

  const [{cart, wishlist}, dispatch] = useStateValue();
  
  const navigate = useNavigate();


  return <div className='subtotal'>
      <CurrencyFormat
        renderText = {(value) => (
            <>
                <p>Your Cart ({cart?.length} items) : <strong>{value}</strong> </p>
            </>
            
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={" ₹ "}
      />

      <button onClick={e => navigate('/payment')} >CHECKOUT</button>
  </div>;
}

export default Subtotal;
