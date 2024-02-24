import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

function AppLayout() {
    const [userName,setUserName] = useState(" ")

    useEffect( () =>{
        const data = {
            name:"Vinayak"
        };
        setUserName(data.name);
    },[])
    
    return (
        <Provider store = {appStore}>
        <userContext.Provider value={ {loggedInUser: userName} }>
        <div className="app">
        <Header />
        <Outlet />
        </div>
        </userContext.Provider>
        </Provider>   
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body/>,

            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurantMenu/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            }
            ]
    }
     
])



    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter}/>);
