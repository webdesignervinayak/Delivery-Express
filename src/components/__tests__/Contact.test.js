import Contact from "../Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {

    test("Should load button", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });

    test("Should load Input Boxes", () => {
        render(<Contact />);

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(3);
    });

    it("Should load Heading", () => {
        render(<Contact />);

        const heading = screen.getAllByRole("heading");

        expect(heading[0]).toBeInTheDocument();
        expect(heading[1]).toBeInTheDocument();
    });

});
