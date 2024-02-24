import { API_KEY, LOGO_URL, defaultLocation } from "../utils/constants"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext"
import { useDispatch, useSelector } from "react-redux"
import { getUpdatedLocation } from "../utils/locationSlice"

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const [logInOut,setLogInOut] = useState("Login")
    const [searchText,setSearchText] = useState("")
    const [locationData,setLocationData] = useState(defaultLocation)

    const btnChange = (val) => {
       return (val == "Login" ? val = "Logout" : val = "Login");
    }

    const {loggedInUser} = useContext(userContext);

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        getLocationDetails();
    },[searchText])

    const getLocationDetails = async() => {
        const data = await fetch("https://api.openweathermap.org/geo/1.0/direct?q="+searchText+"&limit=5&appid="+API_KEY)
        const json = await data.json();
        setLocationData(json[0]);
    } 

    const handleLocationChange = () => {
        dispatch(getUpdatedLocation(locationData))
    }
    
    return (
        <div className="m-2 p-2 flex justify-between shadow-lg rounded-lg">
            <div className="flex items-center">
            <Link to="/"><img alt="logo" className="w-48 px-10" src ={LOGO_URL}></img></Link>
            <form className="items-center border border-gray-200" onSubmit={(e) => { e.preventDefault();}}>
                <input type="text" placeholder="Find food in your location here" className="p-2 outline-none"  value ={searchText} onChange={e=> setSearchText(e.target.value)}/>
                <button className="p-2 bg-gray-200" onClick={handleLocationChange}>Search</button>
            </form>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="p-2 font-bold">Online/offline:{onlineStatus ?"🟢":"🔴"}</li>
                    <li className="p-2 font-bold"><Link to="/">Home</Link></li>
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