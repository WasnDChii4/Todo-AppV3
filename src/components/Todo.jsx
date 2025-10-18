import React, { useState } from "react";
import {FaPlus, FaTrash, FaCheck} from 'react-icons/fa';

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
    <div className="bg-zinc-900/60 text-white place-self-center w-11/12 max-w-md flex flex-col p-3 md:p-7 rounded-xl backdrop-blur-sm border border-zinc-900/20 shadow-lg shadow-gray">
      <div className="bg-gradient-to-r from-red-700/80 to-zinc-900/80 p-4 rounded-xl backdrop-blur-lg mb-6">
        <h1 className="font-saira-condensed text-3xl font-bold">Todo List V3</h1>
      </div>
      <div className="mb-6">
        <h1 className="font-nunito-sans text-lg font-semibold mb-6">Add Task</h1>
      </div>
    </div>
  )
}