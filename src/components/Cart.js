import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const [itemTotal,setItemTotal] = useState(0);
    const dispatch = useDispatch();

    const handleClearCart = ( ) => {
        dispatch(clearCart());
    }

    useEffect( () => {
        let tot = 0;
        for(let i = 0; i<cartItems.length ; i++){
            tot += cartItems[i].card.info.price;
        }
        setItemTotal(tot);
    },[cartItems])

    //console.log(cartItems[0].card.info.price);

    return (
        <div className="p-4 m-4">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Cart</h1>
                <button className="p-2 m-2 bg-green-800 text-white text-xs rounded-md hover:scale-110"
                onClick={handleClearCart}> 
                ClearCart </button>
            </div>
        <div className="w-6/12 m-auto">
            { cartItems.length == 0 ? <h1 className="p-2 m- 2 font-bold font-serif text-lg">Your Cart is Empty. Add your favourite food to the cart 😋</h1> : (
                <div>
                    <ItemLists items={cartItems}/>
                    <div className="w-96 m-2">
                        <h2>Bill Details</h2>
                        <div className="flex justify-between m-2">
                            <span>Item Total</span>
                            <span>₹ {itemTotal/100}</span>
                        </div>
                        <div className="flex justify-between m-2">
                            <span>GST</span>
                            <span>₹ {(itemTotal/100)*0.05}</span>
                        </div>
                        <div className="flex justify-between m-2">
                            <span>Amount Payable</span>
                            <span>₹ {itemTotal/100+(itemTotal/100)*0.05}</span>
                        </div>
                        <button className="p-2 mx-8 bg-blue-500 rounded-md">Pay Now</button>
                    </div>
                </div>
            )
            } 
        </div>
        </div>
    )
};

export default Cart;