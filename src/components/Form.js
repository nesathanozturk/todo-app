import { useState } from "react";
import useFormContext from "../hooks/use-form-context";
import List from "./List";

function Form() {
  const { newItem, setNewItem, addItem, clearItems } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Form m-0 p-0 h-screen list-none font-poppins">
      <div className="container bg-white w-2/4 mt-6 m-auto p-5 flex justify-center items-center flex-col rounded-lg">
        <h1 className="text-4xl text-purple-500 font-bold tracking-widest">
          My Todo List
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newItem}
            placeholder="Add something to do..."
            onChange={(e) => setNewItem(e.target.value)}
            className="w-72 p-[0.4rem] mr-2 mt-5 border-2 border-gray-200 rounded-lg placeholder:tracking-widest placeholder:text-sm focus:outline-none focus:text-gray-800 focus:text-md"
          />
          <button
            className="w-20 bg-purple-700 text-white mr-2 p-[0.45rem] text-base rounded-md hover:bg-purple-900"
            onClick={() => addItem(newItem)}
          >
            Add
          </button>
          <button
            className="w-20 bg-purple-700 text-white p-[0.45rem] text-base rounded-md hover:bg-purple-900 transition-colors"
            onClick={() => clearItems()}
          >
            Clear
          </button>
        </form>
      </div>
      <List />
    </div>
  );
}

export default Form;
