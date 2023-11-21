import RestaurantCard from "../RestaurantCard";
import {render, screen} from "@testing-library/react";
import MOCK_DATA from "../mockData/resCardMock.json"
import "@testing-library/jest-dom";

test("Should test restaurant Card Component", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();

});