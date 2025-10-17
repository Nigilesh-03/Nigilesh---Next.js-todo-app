"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

function Todo() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  function handleSubmit() {
    if (name.trim() !== "") {
      dispatch(addTodo(name));
      setName("");
    }
  }

  return (
    <div className="todo">
      <h5>Todo List</h5>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <br /><br />
      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
      <br />
      <br />
      <ul className="ul">
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
