import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import {useSelector, useDispatch} from 'react-redux'
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./Components/Modal";

function App() {
  const {cartItems, isLoading}=useSelector((store)=>store.cart)
  const {isOpen}=useSelector((store)=>store.modal);
  const dispatch=useDispatch();
  

  useEffect(()=>{
    dispatch(calculateTotals());
        //eslint-disable-next-line
  },[cartItems])


  useEffect(()=>{
    dispatch(getCartItems())
    //eslint-disable-next-line
  }, [])

if(isLoading){
  return<div>
    <h1>Loading...</h1>
  </div>
};

return <main>

   {isOpen && <Modal/>} 

   <Navbar/>
    <CartContainer/>
  </main>;
}
export default App;
