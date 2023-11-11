import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemLists = ({items}) => {
    //console.log(items);
    const handleError = () => {
        return <img className="w-[150px] h-[120px] rounded-lg" src="https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg"></img>    
    };

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return ( 
            <div className="text-left m-2 p-2 ">
               { items.map( (item) =>
               <div className=" m-2 p-2 border-b-2 border-gray-300 flex justify-between"key={item.card.info.id}>
                <div className="w-9/12">
                    <p className="font-semibold">{item.card.info.name}</p>
                    <p className="font-semibold">₹ { item.card.info.defaultPrice != undefined ? item.card.info.defaultPrice/100 : item.card.info.price/100}</p>
                    <p className="text-gray-500">{item.card.info.description}</p>
                </div>

                <div className="p-4 w-3/12" >
                    <button className="p-2 mx-14 my-16 bg-green-800 text-white absolute text-xs rounded-md hover:scale-110"
                    onClick = { () => handleAddItem(item)}>
                         ADD+ 
                    </button>
                    {
                    item.card.info.imageId ? 
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ item.card.info.imageId}
                      className="w-[150px] h-[120px] rounded-lg" onError={handleError}></img> :
                      handleError()
                    }
                </div> 
                </div>
                )} 
            </div>
    )
}

export default ItemLists;