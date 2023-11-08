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

            <div className="flex mx-24 justify-between">

                <div className="m-4">
                    <input type="text" className="m-2 p-2 border border-gray-400 rounded-md" value={searchText} onChange={ (e) => setSearchText(e.target.value)} />
                    <button className="m-2 p-2 bg-orange-400 rounded-md text-white font-semibold hover:scale-95" onClick= { () => {
                        const searchRestro = listofRestaurant?.filter((resto) => resto?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
                        setFilteredListofRestaurant(searchRestro);
                    }}
                    >
                        Search
                    </button>
                </div>

                <div className="m-4">
                    <div className="m-2 p-2 bg-orange-500 rounded-md text-white font-semibold hover:scale-95">
                        <button onClick={ () => {
                        const topList = filteredListofRestaurant.filter( (res) => res.info.avgRating > 4 );
                        setFilteredListofRestaurant(topList);
                        }}>
                        Top Rated Restaurant
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap items-center justify-center">
                {
                    filteredListofRestaurant?.map( (restaurant) => 
                    <Link to={"/restaurantMenu/" + restaurant?.info?.id}  key={restaurant?.info?.id} className="link-style"><RestaurantCard  resData={restaurant}/></Link>)
                }
            </div>

        </div>
    )

}

export default Body;

















