import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MenuCategory from "./MenuCategory";
import { useState } from "react";
//import MenuItemCards from "./MenuItemCards";

const RestaurantMenu = () => {

    const resId = useParams();
    
    //used useRestaurantMenu as customhook
    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex] = useState(0);

    if(resInfo === null){
       return <Shimmer />
    }

    const {name, cuisines, locality} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter(
        (c) => 
        c?.card?.card?.["@type"] == 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <div className="text-center">
                <h1 className=" font-bold text-2xl">{name}</h1>
                <p className=" text-gray-500 ">{cuisines.join(",")}</p>
                <p className=" text-gray-500">{locality}</p>
            <div className="menu-list">  
                { categories.map( (category , index) => <MenuCategory data={category?.card?.card} key={category?.card?.card?.title} 
                showItems={index  == showIndex}
                toggleCategory = { () => setShowIndex(null)}
                setShowIndex = {() => setShowIndex(index)}
                /> )}
            </div>
        </div>

    )
}

export default RestaurantMenu;