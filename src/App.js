import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "react 공부하기",
            checked: true,
        },
        {
            id: 2,
            text: "redex 공부하기",
            checked: true,
        },
        {
            id: 3,
            text: "typescript 공부하기",
            checked: false,
        },
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos]
    );

    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} />
        </TodoTemplate>
    );
}

export default App;
