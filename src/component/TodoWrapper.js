import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos); // Log the new array of todos
    };

    return (
        <div className="TodoWrapper">
            <TodoForm addTodo={addTodo} />
            <Todo/>
        </div>
    );
};

export default TodoWrapper;
