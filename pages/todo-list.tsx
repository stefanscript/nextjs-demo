import React, {useState} from 'react';

const TodoListPage = () => {
    const [itemName, setItemName] = useState<string>("");
    const [items, setItems] = useState<string[]>([]);

    function onClickHandler() {
        setItems([...items, itemName])
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setItemName(e.target.value)
    }

    return (
        <div>
            <input name={"item-name-input"} type="text" data-testid={"item-name-input"} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Add</button>
            {items.map((item, i) => (
                <div key={item} data-testid={`list-item-${i + 1}`}>{item}</div>
            ))}
        </div>
    )
};
export default TodoListPage;
