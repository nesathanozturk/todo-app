import React, { useState } from "react";
import './App.css';

function App() {
  return (
    <div className="App m-0 p-0 box-border h-screen flex justify-center font-roboto text-white">
      <div className="container w-96 h-96 mt-6">
        <h1 className='text-4xl tracking-widest'>React Todo App</h1>
          <input 
          type="text" 
          placeholder="Add something to do"
          className='w-72 p-[0.62rem] border-0 rounded-lg mt-5 focus:outline-none placeholder:text-xl focus:text-black focus:font-bold focus:text-md tracking-wide text-are' 
          onChange=""
          />
          <button className='w-20 bg-purple-700 mx-1 text-xl rounded-md p-[0.5rem]'>Add</button>
      </div>
    </div>
  );
}

export default App;
