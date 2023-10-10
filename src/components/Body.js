import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [listofRestaurant,setListofRestaurant] = useState([]);
    const [filteredListofRestaurant,setFilteredListofRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4385553&lng=79.1288412&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const JSON = await data.json();
        setListofRestaurant(JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListofRestaurant(JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    //episode 9
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>You are Offline!! , Please check your Internet Connection.</h1>
    }

    if(listofRestaurant?.length === 0){
        return <Shimmer />;
    }

    return ( 
        <div className="body">

            <div className="filter">

                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={ (e) => setSearchText(e.target.value)} />
                    <button className="search-btn" onClick= { () => {
                        const searchRestro = listofRestaurant?.filter((resto) => resto?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
                        setFilteredListofRestaurant(searchRestro);
                    }}
                    >
                        Search
                    </button>
                </div>

                <button className="filter-btn" onClick={ () => {
                    const topList = filteredListofRestaurant.filter( (res) => res.info.avgRating > 4 );
                    setFilteredListofRestaurant(topList);
                }}>
                    Top Rated Restaurant
                </button>

            </div>

            <div className="res-container">
                {
                    filteredListofRestaurant?.map( (restaurant) => 
                    <Link to={"/restaurantMenu/" + restaurant?.info?.id}  key={restaurant?.info?.id} className="link-style"><RestaurantCard  resData={restaurant}/></Link>)
                }
            </div>

        </div>
    )

}

export default Body;

















