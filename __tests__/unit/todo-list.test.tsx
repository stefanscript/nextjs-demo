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

        expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
    });

    it("by default the list is empty", () => {
        render(<TodoListPage />);

        expect(screen.queryByTestId("list-item-1")).not.toBeInTheDocument();
    });

    it("clicking the add button updates item 1", () => {
        render(<TodoListPage />);
        const itemNameInput = screen.getByTestId('item-name-input');
        const addItemButton = screen.getByRole("button", { name: "Add" });

        userEvent.type(itemNameInput, "item 1");
        userEvent.click(addItemButton);

        expect(screen.getByTestId("list-item-1")).toHaveTextContent('item 1');
    });

    it("should add two items if two items are entered", () => {
        render(<TodoListPage />);
        const itemNameInput = screen.getByTestId('item-name-input');
        const addButton = screen.getByRole("button", { name: "Add" });

        userEvent.type(itemNameInput, "item 1");
        userEvent.click(addButton);
        userEvent.type(itemNameInput, "item 2");
        userEvent.click(addButton);

        const item1 = screen.getByTestId("list-item-1");
        const item2 = screen.getByTestId("list-item-2");
        expect(item1).toHaveTextContent('item 1');
        expect(item2).toHaveTextContent('item 2');
    });

    it("clicking the button should update the item with the text from the input", () => {
        render(<TodoListPage />);
        const itemNameInput = screen.getByTestId('item-name-input');
        const addButton = screen.getByRole("button", { name: "Add" });

        let text = "item 3";
        userEvent.type(itemNameInput, text);
        userEvent.click(addButton);

        const item1 = screen.getByTestId("list-item-1");
        expect(item1).toHaveTextContent(text);
    });
})
