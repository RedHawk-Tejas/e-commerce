import React from 'react';
import '../styles/Wishlist.css';
import WishlistProduct from './WishlistProduct';
import { useStateValue } from '../data/StateProvider';


function Wishlist() {
    const [{cart, wishlist}, dispatch] = useStateValue();
  return <div className='wishlist'>
      <div>
          <h2 className="checkout_title">
              Your Wishlists
          </h2>

          <div className="wishlist_items">

            {wishlist.map(item => (
                <WishlistProduct
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                />
            ))}

          </div>
      </div>
  </div>;
}

export default Wishlist;
