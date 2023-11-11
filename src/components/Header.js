import { LOGO_URL } from "../utils/constants"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext"
import { useSelector } from "react-redux"

const Header = () => {

    const [logInOut,setLogInOut] = useState("Login")

    const btnChange = (val) => {
       return (val == "Login" ? val = "Logout" : val = "Login");
    }

    const {loggedInUser} = useContext(userContext);

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    
    return (
        <div className="m-2 p-2 flex justify-between shadow-lg rounded-lg">
            <Link to="/"><div>
            <img alt="logo" className="w-48 px-10" src ={LOGO_URL}></img>
            </div></Link>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="p-2 font-bold">Online/offline:{onlineStatus ?"🟢":"🔴"}</li>
                    <li className="p-2 font-bold"><Link to="/">Home</Link></li>
                    <li className="p-2 font-bold"><Link to="/about">About Us</Link></li>
                    <li className="p-2 font-bold"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2 font-bold"><Link to="/cart">Cart({cartItems.length})</Link></li>
                    <li className="p-2 font-bold"><button className="log-btn" onClick={() => setLogInOut(btnChange(logInOut))}> {logInOut} </button></li>
                    <li className="p-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;