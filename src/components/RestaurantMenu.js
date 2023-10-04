import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {

    const resId = useParams();
    
    //used useRestaurantMenu as customhook
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
       return <Shimmer />
    }

    //console.log(resInfo);

    const {name, cuisines, locality} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards);

    return(
        <div>
            <div className="menu-list">
                <h1>{name}</h1>
                <p>{cuisines.join(",")}</p>
                <p>{locality}</p>
            </div>
            <div className="menu-list">
                {itemCards?.map( (item) => <div key={item?.card?.info?.id} className="items-box">{item?.card?.info?.name} - Rs {item?.card?.info?.price/100}</div>)}   
            </div>
        </div>

    )
}

export default RestaurantMenu;