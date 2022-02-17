import React from 'react';
import '../styles/WishlistProduct.css';
import { useStateValue } from '../data/StateProvider';

function WishlistProduct({id, image, title, price}) {

    const [{cart, wishlist}, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price
            },
        });

        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            item: {
                id: id
            }
        })
    };

    const removeFromWishlist = () => {
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            item: {
                id: id
            }
        })
    }

  return <div className='wishlistproduct'>
      <img src={image}/>

      <div className="wishlistproduct_info">
          <p className="wishlistproduct_tittle">{title}</p>
          <p className="wishlistproduct_price">
              <small>₹ </small>
              <strong>{price}</strong>
          </p>   
      </div>

      <div className="wishlists_buttons">
          <button className='wishlist_AddBtn' onClick={addToCart} >ADD TO CART</button>
          <button className='wishlist_DelBtn' onClick={removeFromWishlist}>DELETE</button>
      </div>


      
  </div>;
}

export default WishlistProduct;
