import React, { useState } from "react";
import {FaFire, FaBomb, FaExplosion, FaCheck} from 'react-icons/fa6';

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

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const completedTodo = (id) => {
    setTodos(todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo));
  }

  return (
    <div className="bg-zinc-900/60 text-white place-self-center w-11/12 max-w-md flex flex-col p-3 md:p-7 rounded-xl backdrop-blur-sm border border-zinc-900/20 shadow-lg shadow-gray">
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
          <button className="bg-red-700/80 hover:bg-rose-900/80 px-4 py-3 backdrop-blur-md transition flex items-center justify-center" onClick={addTodo}>
            <FaFire />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {
          todos.map((todo) => (
            <div key={todo.id} className="p-4 rounded-xl bg-neutral-100/80 backdrop-blur-xl border border-black/30">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <button className={`${todo.completed ? 'bg-red-700' : 'bg-zinc-900'} mt-1 p-2 rounded-md backdrop-blur-sm border border-black/30 transition`} onClick={() => completedTodo(todo.id)}>
                    {todo.completed && <FaCheck size={12} />}
                  </button>
                  <div>
                    <p className={`font-medium ${todo.completed ? 'line-through text-red-700' : 'text-zinc-900'} font-chicle text-2xl transition`}>
                      {todo.text}
                    </p>
                    <p className="text-xs text-red-700/80 mt-1">{todo.time} | {todo.date}</p>
                  </div>
                </div>
                <button className="bg-red-700 backdrop-blur-sm border-rose-900/30 transition p-2 rounded-lg" onClick={() => deleteTodo(todo.id)}>
                  <FaBomb />
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}