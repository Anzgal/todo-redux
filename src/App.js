import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import logo from './logo.png';

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img className="w-full" src={logo} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"> Todo redux </div>
        <p className="text-gray-700 text-base">
          A React Starter with Tailwind CSS
        </p>
      </div>
      <div className="px-6 py-4">
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
  </div>
  );
}

export default App;
