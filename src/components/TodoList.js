import React from "react";

import { useSelector, useDispatch } from "react-redux";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const handleUpdate = (id, completed) => {
      dispatch({
          type: "UPDATE_TODO",
          payload: {
              id,
              completed
          }
      })
  }

  return !todos ? (
    <p>NO TODOS</p>
  ) : (
    <ul className="mt-5">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleUpdate(todo.id, !todo.completed)}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label className={todo.completed ? "font-medium text-green-400 line-through":"font-medium text-gray-700"}>
                {todo.title}
              </label>
            </div>
            <button className="ml-3 text-sm" onClick={() => handleDelete(todo.id)}>
                <span className="font-light text-red-700 underline">
                Delete
                </span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
