import RestaurantMenu from "../RestaurantMenu";
import {fireEvent, render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mockData/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});

test("should load Restaurant Menu Component", async () => {
    await act(async() => render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
        <RestaurantMenu/>
        <Cart/>
    </Provider>
    </BrowserRouter>
    ));

    const accordianHeading = screen.getByText("Premium Family Tubs(4)");

    fireEvent.click(accordianHeading);

    expect(screen.getAllByTestId("foodItems").length).toBe(4);

    const addBtn = screen.getAllByRole("button", { name : "ADD+"});

    fireEvent.click(addBtn[0]);

    expect(screen.getByText("Cart(1)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    const clearBtn = screen.getByRole("button", { name : "ClearCart"});

    fireEvent.click(clearBtn);

    expect(screen.getAllByTestId("foodItems").length).toBe(4);

});
