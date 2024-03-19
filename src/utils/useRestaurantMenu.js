//customhook
import { useEffect, useState } from "react";
import { MENU_URL, generateProxyUrl } from "./constants";
import { useSelector } from "react-redux";

const useRestaurantMenu = (resId) => {

    const updateLocation = useSelector((store) => store.location.updateLocation)

    const [resInfo,setResInfo] = useState(null);

    useEffect( () => {
        fetchData();
    },[ ])

    const fetchData = async() => {
        //const resourse = generateProxyUrl(MENU_URL + resId.resId)
        const data = await fetch(`https://deliveryexpress-server.onrender.com/api/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${updateLocation.lat}&lng=${updateLocation.lon}&restaurantId=${resId.resId}`);
        const json = await data.json();
        setResInfo(json.data);
        console.log(resInfo);
    };

    return resInfo;
}

export default useRestaurantMenu;
