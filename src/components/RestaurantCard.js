import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    //console.log(resData);
    const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo,sla} = resData.info ;
    return(
        <div data-testid="resCard" className="m-4 w-[270px] h-fit object-cover rounded-md hover:scale-95">

            <img alt ="card-logo" className="w-[270px] h-[170px] rounded-lg" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="mx- 4 p-1 font-bold truncate">{name}</h3>
            <h4 className="p-1 truncate text-gray-500">{cuisines.join()}</h4>
            <span className="p-1 text-gray-500 font-semibold">{avgRating} ⭐</span>
            <span className="p-1 text-gray-500 font-semibold">{sla.deliveryTime} min</span>
            <span className="p-1 text-gray-500 font-semibold">{costForTwo}</span>
        </div>

    )
}

//if promoted is present in API then use this
/**export const withPromotedLabel = (RestaurantCard) => {
    return () => {
        <div>
            <label>Promoted</label>
            <RestaurantCard/>
        </div>
    }
}**/

export default RestaurantCard;