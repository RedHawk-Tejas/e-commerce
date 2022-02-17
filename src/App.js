import Navbar from './components/Navbar';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Payment from './components/Payment';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth} from 'firebase/auth';
import { useEffect } from 'react';
import { useStateValue } from './data/StateProvider';
// import {loadStripe} from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';

// const promise = loadStripe('pk_test_51KT9jTSCdeFWO9sTr0JhiltJSYbW7tXCqaqqQBDLgbaygMKsMhXgfHHw67HxfwS6wsjQSKvWsXGRHWzIsuli6C6n00bScAouPN');


function App() {


    const [{}, dispatch] = useStateValue();
    const auth = getAuth();

    useEffect( () => {
      auth.onAuthStateChanged( authUser => {

        console.log(authUser)

        if (authUser){
          //user logged out
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
        } else {
          // user loged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
    }, [])

  return (

    <Router>
      <div className="App">

      <Routes>

        <Route path="/" element={ <> <Navbar/> <Home/> </> } />
        <Route path="/checkout" element={ <> <Navbar/> <Checkout/> </> } />
        <Route path="/wishlist" element={ <> <Navbar/> <Wishlist/> </> } />
        <Route path="/login" element={<> <Login/> </>} />
        <Route path="/payment" element={<> <Payment/> </> } />

      </Routes>

      </div>
    </Router>
    
  );
}

export default App;
