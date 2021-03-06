import {render, screen, within} from "@testing-library/react";
import React from "react";
import TodoListPage from "../../pages/todo-list";
import userEvent from "@testing-library/user-event";

describe('Given I am on the todo-list', () => {
  describe('When I add an item called item 1 and then item 2 to the list', () => {
    it('Then it should display second item below first item', () => {
      render(<TodoListPage />);
      const itemNameInput1 = 'item-name-input';
      const item1Text = 'item 1';
      const item2Text = 'item 2 latest';
      const item2Id = 'list-item-2';

      const itemNameInput = screen.getByTestId(itemNameInput1);
      const addItemButton = screen.getByRole('button', { name: "Add" });

      userEvent.type(itemNameInput, item1Text);
      userEvent.click(addItemButton);
      userEvent.type(itemNameInput, item2Text);
      userEvent.click(addItemButton);

      const secondItem = screen.getByTestId(item2Id);

      expect(secondItem).toHaveTextContent(item2Text);
    });

    describe("And I click delete next to item 1", () => {
      it("Then only item 2 should be in the list", () => {
        render(<TodoListPage />);
        const itemNameInput1 = 'item-name-input';
        const item1Text = 'item 1';
        const item2Text = 'item 2 latest';

        const itemNameInput = screen.getByTestId(itemNameInput1);
        const addItemButton = screen.getByRole('button', { name: "Add" });

        userEvent.type(itemNameInput, item1Text);
        userEvent.click(addItemButton);
        userEvent.type(itemNameInput, item2Text);
        userEvent.click(addItemButton);

        let item1 = screen.getByTestId("list-item-1");
        const removeItemButton = within(item1).getByRole('button', { name: "Remove" });

        userEvent.click(removeItemButton);

        item1 = screen.getByTestId("list-item-1");
        expect(item1).toHaveTextContent(item2Text);
      });
    });
  });
});
