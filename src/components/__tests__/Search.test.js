import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockData/resListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn( () => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test("should test the Body Component with Search",
    async () => {
        await act(async () => render(
            <BrowserRouter>
            <Body />
            </BrowserRouter>
        ));

    const searchBtn = screen.getByRole("button", { name: "Search"});

    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("SearchInput");

    fireEvent.change(searchInput,{ target : { value : "biryani"}});

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);

    });

test("Should test the Top Rated Restaurant Button", 
    async () => {
        await act(async () => render(
          <BrowserRouter>
          <Body />
          </BrowserRouter>  
        ));

    const topRatedBtn = screen.getByRole("button", { name : "Top Rated Restaurant"});

    expect(topRatedBtn).toBeInTheDocument();

    const cardsBfrClick = screen.getAllByTestId("resCard");

    expect(cardsBfrClick.length).toBe(20);

    fireEvent.click(topRatedBtn);

    const cardsAfrClick = screen.getAllByTestId("resCard");

    expect(cardsAfrClick.length).toBe(3);
    }
);