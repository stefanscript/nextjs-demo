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
})
