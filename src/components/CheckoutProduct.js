import { DeleteOutline } from '@material-ui/icons';
import React from 'react';
import '../styles/CheckoutProduct.css';
import { useStateValue } from '../data/StateProvider';

function CheckoutProduct({id, image, title, price}) {

    const [{cart, wishlist}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            item: {
                id: id
            }
        })
    }

  return <div className='checkoutproduct'>
      <img className='checkoutproduct_image' src={image} />

      <div className="checkoutproduct_info">
          <p className="checkoutproduct_tittle">{title}</p>
          <p className="checkoutproduct_price">
              <small>₹ </small>
              <strong>{price}</strong>
          </p>   
      </div>

      <DeleteOutline onClick={removeFromCart}/>

  </div>;
}

export default CheckoutProduct;
