import React, { useState } from "react";
import './App.css';

const initialState = [
  { id: 1, name: "Play Game", completed: true },
  { id: 2, name: "Watch Movie", completed: true },
  { id: 3, name: "Walk", completed: true },
];

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialState);

  const addItem = () => {
    setList([
      ...list,
      {
        id: Math.random(),
        name: newItem,
        completed: false
      }
    ])
    setNewItem("");
  };

  const completed = id => {
    setList(list.map(liEl => liEl.id === id ? { ...liEl, completed : !liEl.completed } : liEl))
  }

  const clearItems = () => {
    setList(list.filter(item => !item.completed));
  };

  return (
    <div className="App font-roboto text-white">
      <div className="container w-96 h-96 mt-6">
        <h1 className='text-4xl tracking-widest'>My Todo List</h1>
          <input 
          type="text" 
          value={newItem}
          placeholder="Add something to do"
          onChange={e => setNewItem(e.target.value)}
          className='w-72 p-[0.62rem] border-0 rounded-lg mt-5 focus:outline-none placeholder:text-xl focus:text-black focus:font-bold focus:text-md tracking-wide' 
          />
          <button className='w-20 bg-purple-700 mx-1 text-xl rounded-md p-[0.5rem]' onClick={() => addItem(newItem)}>Add</button>
      </div>
      <div className="list-container">
        {
          list.map(item => {
            return (
              <li 
              key={item.id} 
              onClick={() => completed(item.id)}
              className={item.completed ? "checked" : ""} 
              >
                {item.name}
             </li>
            )
          })
        }
      </div>
      <button className='w-20 bg-purple-700 mx-1 text-xl rounded-md p-[0.5rem]' onClick={() => clearItems()}>Clear</button>
    </div>
  );
}

export default App;
