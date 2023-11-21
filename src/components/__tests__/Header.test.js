import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";


test("Should check if it changes login to logout after clicking", () => {
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>    
    );

    const logInButton = screen.getByRole("button", { name : "Login"});

    fireEvent.click(logInButton);

    const logOutButton = screen.getByRole("button", { name : "Logout"});

    expect(logOutButton).toBeInTheDocument();

});