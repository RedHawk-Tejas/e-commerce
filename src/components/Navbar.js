import React from 'react';
import '../styles/Navbar.css';
import logo from '../photos/Red Hawk New.png';
import {FavoriteBorder, Person, Search, ShoppingCart} from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useStateValue } from '../data/StateProvider';
import { getAuth } from 'firebase/auth';
import { Menu } from '@material-ui/icons';

function Navbar() {

    const[{cart, wishlist, user}, dispatch] = useStateValue();
    const auth = getAuth();

    const handleSignIn = () => {
        if (user) {
            auth.signOut();
        }
    }

  return <div className='navbar'>

    <div className="topnavbar">
        <Link to="/">
            <img src={logo} alt="" className="navbar_logo" />
        </Link>

        <div className="navbar_search">
            <input type="text" className="navbar_searchInput" />
            <Search />
        </div>

           
        <div className="navbar_nav">

            <Link className='link' to='/wishlist'>
                <div className="navbar_option">
                    <FavoriteBorder />
                    <span className="navbar_optionOne">{wishlist?.length}</span>
                </div>
            </Link>

            <Link className='link' to='/checkout'>
                <div className="navbar_option">
                    <ShoppingCart />
                    <span className="navbar_optionOne">{cart?.length}</span>
                </div>
            </Link>

            <Link className='link' to="/login">
            <div className="navbar_option"  >
                <Person />
                <span className="navbar_optionOne">{!user? 'Guest' : user.email}</span>
            </div>
            </Link>



        </div>

        <Menu className='navbar_menu' />

    </div>

    <div className="bottomNav">
        <div className="navbar_categories">
            <p>Keyboards</p>
            <p>Mouse</p>
            <p>Headsets</p>
            <p>Controllers</p>
            <p>Mousepads</p>
        </div>
    </div>

        

       

  </div>;
}

export default Navbar;
