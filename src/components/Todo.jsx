import React, { useState } from "react";
import {FaFire, FaTrash, FaCheck} from 'react-icons/fa';

export default function Todo() {
  const [todos, setTodos] = useState([
    {id: '1', text: 'Learning Todo App V3', time: '08:00', date: '18/10/2025', completed: false}
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if(newTodo.trim() == '')
    return;
    const currentDate = new Date
    const timeString = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    const dateString = currentDate.toLocaleDateString();

    setTodos ([
      {
        text: newTodo,
        id: Date.now(),
        time: timeString,
        date: dateString,
        completed: false
      },
      ...todos
    ])
    setNewTodo('')
  }

  return (
    <div className="bg-zinc-800/60 text-white place-self-center w-11/12 max-w-md flex flex-col p-3 md:p-7 rounded-xl backdrop-blur-sm border border-zinc-900/20 shadow-lg shadow-gray">
      <div className="bg-gradient-to-r from-red-700/80 to-zinc-900/80 p-4 rounded-xl backdrop-blur-sm mb-6">
        <h1 className="font-saira-condensed text-3xl font-bold">Todo List V3</h1>
      </div>
      <div className="mb-6">
        <h1 className="font-nunito-sans text-lg font-semibold mb-6">Add Task</h1>
        <div className="flex rounded-lg overflow-hidden">
          <input value={newTodo} className="bg-neutral-100/50 text-zinc-900 flex-1 p-4 py-3 backdrop-blur-sm focus:outline-none border-r border-neutral-100/30" 
            placeholder="Enter new task..." type="text"
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button className="bg-red-700/80 hover:bg-rose-900/80 px-4 py-3 backdrop-blur-md transition flex items-center justify-center">
            <FaFire />
          </button>
        </div>
      </div>
    </div>
  )
}