import React from "react";
import {render, screen} from "@testing-library/react";
import TodoListPage from "../../pages/todo-list";
import userEvent from "@testing-library/user-event";

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

    it("by default the list is empty", () => {
        render(<TodoListPage />);

        expect(screen.getByTestId("list-item-1")).toBeEmptyDOMElement();
    });

    it("clicking the add button updates item 1", () => {
        render(<TodoListPage />);
        const addItemButton = screen.getByTestId('add-item-button');

        userEvent.click(addItemButton);

        expect(screen.getByTestId("list-item-1")).toHaveTextContent('item 1');
    });
})
