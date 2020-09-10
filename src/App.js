import React, { useState } from "react";
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
    return (
        <TodoTemplate>
            <TodoInsert />
            <TodoList todos={todos} />
        </TodoTemplate>
    );
}

export default App;
