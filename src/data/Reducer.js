export const initialState = {
    cart: [],
    wishlist: [],
    user: null
};

export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishlist: [...state.wishlist, action.item]
            }

        case 'REMOVE_FROM_CART':
            const indexOfCart = state.cart.findIndex(
                (cartIem) => cartIem.id === action.item.id
            );
            let newCart = [...state.cart];

            if (indexOfCart >= 0) {
                newCart.splice(indexOfCart, 1);

            } else {
                console.warn('hii')
            }
            return{
                ...state,
                cart: newCart
            }

            case 'REMOVE_FROM_WISHLIST':
                const indexOffWishlist = state.wishlist.findIndex(
                    (wishlistItem) => wishlistItem.id === action.item.id
                );
                let newwishlist = [...state.wishlist];
                if (indexOffWishlist >= 0) {
                    newwishlist.splice(indexOffWishlist, 1);
    
                } else {
                    console.warn(`Cant remove product ${action.id} from cart`)
                }
                return{
                    ...state,
                    wishlist: newwishlist
                }

            case 'SET_USER':
                return{
                    ...state,
                    user: action.user
                }
                
        default:
            return state;
    }
};

export default reducer;