import React, {useState} from 'react';

const TodoListPage = () => {
    const [item1, setItem1] = useState("");
    const [item2, setItem2] = useState("");

  function onClickHandler() {
      setItem1("item 1");
      setItem2("item 2");
  }

    return (
        <div>
            <div data-testid={"item-name-input"}/>
            <div data-testid={"add-item-button"} onClick={onClickHandler}/>
            <div data-testid={"list-item-1"}>{item1}</div>
            <div data-testid={"list-item-2"}>{item2}</div>
        </div>
    )
};
export default TodoListPage;
