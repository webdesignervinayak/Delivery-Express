//customhook
import { useEffect, useState } from "react";
import { MENU_URL, generateProxyUrl } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null);

    useEffect( () => {
        fetchData();
    },[ ])

    const fetchData = async() => {
        const resourse = generateProxyUrl(MENU_URL + resId.resId)
        const data = await fetch(resourse);
        const json = await data.json();
        setResInfo(json.data);
        console.log(resInfo);
    };

    return resInfo;
}

export default useRestaurantMenu;
