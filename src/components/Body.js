import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CDN_URL} from "../utils/constants";
import { useSelector } from "react-redux";

const Body = () => {
    const updateLocation = useSelector((store) => store.location.updateLocation);
    const [listofRestaurant,setListofRestaurant] = useState([]);
    const [filteredListofRestaurant,setFilteredListofRestaurant] = useState([]);
    const [foodBanners,setFoodBanners] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect( () => {
        fetchData(updateLocation);
    },[updateLocation]);

    const fetchData = async (updateLocation) => {
        const data = await fetch(
            "https://corsproxy.org/?https://www.swiggy.com/dapi/restaurants/list/v5?lat="+updateLocation?.lat+"&lng="+updateLocation?.lon+"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const JSON = await data.json();
        setListofRestaurant(JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListofRestaurant(JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFoodBanners(JSON?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    }
    //episode 9
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>You are Offline!! , Please check your Internet Connection.</h1>
    }

    if(listofRestaurant?.length == 0){
        return <Shimmer/>;
    }

    return ( 
        <div className="body">
                <div>
                <p className="font-bold mx-14 text-xl">Vinayak what's on your Mind?</p>
                </div>

                <div className="my-2 mx-16 flex overflow-x-scroll no-scrollbar">
                {foodBanners?.map((f) =>  <img key={f.id} src={CDN_URL+f?.imageId} alt="foodBanners" className="w-32 mx-4" onClick={ () => {
                    const foodType = listofRestaurant?.filter( (ft) => ft?.info?.cuisines.toString()?.includes(f?.action?.text));
                    setFilteredListofRestaurant(foodType);
                } }>
                </img>
               )}
                </div>

            <div className="flex mx-24 justify-between">

                <div className="m-4">
                    <input type="text" placeholder="search your restro here" className="m-2 p-2 w-72 border border-gray-400 outline-none" data-testid="SearchInput" value={searchText} onChange={ (e) => setSearchText(e.target.value)} />
                    <button className="m-2 p-2 bg-orange-400 text-white font-semibold hover:scale-95" onClick= { () => {
                        const searchRestro = listofRestaurant?.filter((resto) => resto?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
                        setFilteredListofRestaurant(searchRestro);
                    }}
                    >
                        Search
                    </button>
                </div>

                <div className="m-4">
                    <div className="m-2 p-2 bg-orange-500 text-white font-semibold hover:scale-95">
                        <button onClick={ () => {
                        const topList = filteredListofRestaurant.filter( (res) => res.info.avgRating > 4 );
                        setFilteredListofRestaurant(topList);
                        }}>
                        Top Rated Restaurant
                        </button>
                    </div>
                </div>

            </div>

            <p className="mx-14 my-4 font-bold text-xl">Top Rated Restaurant's in {updateLocation?.name}</p>

            <div className="mx-12 flex flex-wrap items-center justify-center">
                {
                    filteredListofRestaurant?.map( (restaurant) => 
                    <Link to={"/restaurantMenu/" + restaurant?.info?.id}  key={restaurant?.info?.id} className="link-style"><RestaurantCard resData={restaurant}/></Link>)
                }
            </div>
        </div>
    )

}

export default Body;

















