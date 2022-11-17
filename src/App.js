import React, { useState } from "react";
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

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
    setList(list.map
      (liEl => liEl.id === id ? { ...liEl, completed : !liEl.completed } : liEl)
      )
  };

  const clearItems = () => {
    setList(list.filter(item => !item.completed));
  };

  return (
    <div className="App m-0 p-0 h-screen list-none">
      <div className="container bg-white w-2/4 mt-6 m-auto p-4 flex justify-center items-center flex-col rounded-lg">
        <h1 className='text-4xl text-purple-500 font-bold tracking-widest'>Reactjs Todo App</h1>
        <form onSubmit={onFormSubmit}>
          <input 
          type="text" 
          value={newItem}
          placeholder="Add something to do..."
          onChange={e => setNewItem(e.target.value)}
          className='w-72 p-[0.5rem] mr-2 mt-5 border-2 border-gray-200 rounded-lg placeholder:tracking-widest placeholder:text-lg focus:outline-none focus:text-gray-800 focus:text-md' 
          />
          <button className='w-20 bg-purple-700 text-white mr-2 p-[0.45rem] text-xl rounded-md hover:bg-purple-900' onClick={() => addItem(newItem)}>Add</button>
          <button className='w-20 bg-purple-700 text-white p-[0.45rem] text-xl rounded-md hover:bg-purple-900 transition:color' onClick={() => clearItems()}>Clear</button>
          </form>
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
    </div>
  );
}

export default App;
