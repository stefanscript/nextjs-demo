import React from "react";
import {render, screen} from "@testing-library/react";
import TodoListPage from "../../pages/todo-list";

describe("Todo list Page", () => {
    it("renders the item name input", () => {
        render(<TodoListPage />)

        expect(screen.getByTestId("item-name-input")).toBeInTheDocument();
    });

    it("renders the item button", () => {
        render(<TodoListPage />)

        expect(screen.getByTestId("add-item-button")).toBeInTheDocument();
    });

    it("renders a list item", () => {
        render(<TodoListPage />)

        expect(screen.getByTestId("list-item-1")).toBeInTheDocument();
    });

    it("the list item should item 1 text", () => {
        render(<TodoListPage />);

        expect(screen.getByText("item 1")).toBeInTheDocument();
    });
})
