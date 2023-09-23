import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo,sla} = resData.info ;
    return(
        <div className="res-card">

            <img alt ="card-logo" className="card-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join()}</h4>
            <span>{avgRating} Stars</span>
            <span>{sla.deliveryTime} min</span>
            <span>{costForTwo}</span>
        </div>

    )
}

export default RestaurantCard;