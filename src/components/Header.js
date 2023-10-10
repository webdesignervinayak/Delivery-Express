import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

    const [logInOut,setLogInOut] = useState("Login")

    const btnChange = (val) => {
       return (val == "Login" ? val = "Logout" : val = "Login");
    }

    const onlineStatus = useOnlineStatus();
    
    return (
        <div className="header">
            <div className="logo-container">
            <img alt="logo" className="logo" src ={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online/offline:{onlineStatus ?"🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="log-btn" onClick={() => setLogInOut(btnChange(logInOut))}> {logInOut} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;