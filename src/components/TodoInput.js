import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoInput() {
  const dispatch = useDispatch();
  const [newTodo, setnewTodo] = useState("");
  const handleChange = (event) => setnewTodo(event.target.value);
  const handleClick = () => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        title: newTodo,
        completed: false,
      },
    });
  };
  return (
    <>
      <input
        className="p-2 bg-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        placeholder="Type todo"
        type="text"
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        ADD TODO
      </button>
    </>
  );
}
