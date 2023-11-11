import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = ( ) => {
        dispatch(clearCart());
    };

    return (
        <div className="text-center p-4 m-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="p-2 m-2 bg-green-800 text-white text-xs rounded-md hover:scale-110"
            onClick={handleClearCart}> 
        ClearCart </button>
        <div className="w-6/12 m-auto">
            { cartItems.length == 0 ? <h1 className="p-2 m- 2 font-bold font-serif text-lg">Your Cart is Empty. Add your favourite food to the cart 😋</h1> : 
             <ItemLists items={cartItems}/>} 
        </div>
        </div>
    )
};

export default Cart;