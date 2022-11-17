import React, { useState } from "react";
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

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

  const onFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App m-0 p-0 h-screen list-none font-roboto text-white">
      <div className="container bg-white text-black p-4 flex justify-center items-center flex-col mt-6">
        <h1 className='text-4xl font-extrabold tracking-widest uppercase'>Reactjs Todo App</h1>
        <form onSubmit={onFormSubmit}>
          <input 
          type="text" 
          value={newItem}
          placeholder="Add something to do"
          onChange={e => setNewItem(e.target.value)}
          className='w-72 p-[0.62rem] border-gray-200 border-2 rounded-lg mt-5 tracking-wide focus:outline-none focus:text-black focus:text-md' 
          />
          <button className='w-20 bg-purple-700 text-white mx-1 text-xl rounded-md p-[0.5rem]' onClick={() => addItem(newItem)}>Add</button>
          <button className='w-20 bg-purple-700 text-white mx-1 text-xl rounded-md p-[0.5rem]' onClick={() => clearItems()}>Clear</button>
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
