import React, {useState} from 'react';

const TodoListPage = () => {
    const [item, setItem] = useState("");

    function onClickHandler() {
      setItem("item 1")
    }

    return (
        <div>
            <div data-testid={"item-name-input"}/>
            <div data-testid={"add-item-button"} onClick={onClickHandler}/>
            <div data-testid={"list-item-1"}>{item}</div>
        </div>
    )
};
export default TodoListPage;
