import { useState } from "react";
import ItemLists from "./ItemLists";

const MenuCategory = ({data , showItems, setShowIndex, toggleCategory}) => {

    const handleClick = () => {
        showItems ? toggleCategory() : setShowIndex() ;
    };

    return(
        <div className="my-4 p-4 w-6/12 mx-auto border-b-8 border-gray-200">
            <div className="flex  justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg cursor-pointer"> {data.title}({data.itemCards.length}) </span>
                <span className="font-bold text-lg"> {showItems ? "˅" : "˄"} </span>
            </div>
            <div>
                { showItems && <ItemLists items={data.itemCards}/>}
            </div>  
        </div>
    )
}

export default MenuCategory;