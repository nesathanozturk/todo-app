import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const addItem = () => {
    if (!newItem) {
      alert("Add something to do!")
    } else {
    setList([
      ...list,
      {
        id: Math.random(),
        name: newItem,
        completed: false,
      }
    ])
    setNewItem("");
  }
  };

  const clearItems = () => {
    setList(list.filter(item => item.completed && !item.completed));
  };

  const isCompleted = (id) => {
    setList(list.map
      (liEl => liEl.id === id ? { ...liEl, completed : !liEl.completed } : liEl)
      )
  };

  const removeItem = (id) => {
    const newItems = list.filter((item) => item.id !== id)
    setList(newItems)
  };

  return (
    <div className="App m-0 p-0 h-screen list-none font-poppins">
      <div className="container bg-white w-2/4 mt-6 m-auto p-5 flex justify-center items-center flex-col rounded-lg">
        <h1 className='text-4xl text-purple-500 font-bold tracking-widest'>My Todo List</h1>
        <form onSubmit={onFormSubmit}>
          <input 
          type="text" 
          value={newItem}
          placeholder="Add something to do..."
          onChange={e => setNewItem(e.target.value)}
          className='w-72 p-[0.4rem] mr-2 mt-5 border-2 border-gray-200 rounded-lg placeholder:tracking-widest placeholder:text-sm focus:outline-none focus:text-gray-800 focus:text-md' 
          />
          <button className='w-20 bg-purple-700 text-white mr-2 p-[0.45rem] text-base rounded-md hover:bg-purple-900' onClick={() => addItem(newItem)}>Add</button>
          <button className='w-20 bg-purple-700 text-white p-[0.45rem] text-base rounded-md hover:bg-purple-900 transition-color' onClick={() => clearItems()}>Clear</button>
          </form>
      </div>
      <div className="list-container">
        {
          list.map(item => {
            return (
              <li 
              key={item.id} 
              className={item.completed ? "done" : ""} 
              >
                {item.name}
                <button className="mr-1 text-red-600" onClick={() => removeItem(item.id)}><AiFillDelete /></button>
                <button className="mr-1 text-green-500" onClick={() => isCompleted(item.id)}><AiFillCheckCircle /></button>
             </li>
            )
          })
        }
      </div>
    </div>
  );
};

export default App;
