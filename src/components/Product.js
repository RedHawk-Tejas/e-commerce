import React from 'react';
import '../styles/Product.css';
import { FavoriteBorder } from '@material-ui/icons';
import { useStateValue } from '../data/StateProvider';

function Product( {id, image, title, price} ) {

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
    };

    const addToWishList = () => {
        dispatch({
            type: 'ADD_TO_WISHLIST',
            item: {
                id: id,
                title: title,
                image: image,
                price: price
            },
        });
    };
  return <div className='product'>

        <FavoriteBorder  onClick={addToWishList} />

        <img src={image} alt="#" />    
          
        <div className="product_info">
            <p>{title}</p>
            <p className='product_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>                                        
        </div>

    
        <div className="product_button">
            <button className='product_buttonBuy'>BUY NOW</button>
            <button  onClick={addToCart} >ADD TO CART</button>
        </div>

  </div>;
}

export default Product;
