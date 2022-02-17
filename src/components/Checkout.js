import React from 'react';
import '../styles/Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../data/StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{cart, wishlist}, dispatch] = useStateValue();



  return <div className='checkout'>
      <div>
          <h2 className="checkout_title">
              Your Shopping Cart
          </h2>

          <div className="checkout_items">

            {cart.map(item => (
                <CheckoutProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                />
            ))}

          </div>

      </div>

      <div className="checkout_subtotal">
          <Subtotal/>
      </div>
  </div>;
}

export default Checkout;
