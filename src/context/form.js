import { createContext, useState } from "react";

const FormContext = createContext();

function Provider({ children }) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Add something to do!");
    }
    setList([
      ...list,
      {
        id: Math.floor(Math.random() * 1000),
        name: newItem,
        completed: false,
      },
    ]);
    setNewItem("");
  };

  const clearItems = () => {
    setList(list.filter((item) => item.completed && !item.completed));
  };

  const isCompleted = (id) => {
    setList(
      list.map((liEl) =>
        liEl.id === id ? { ...liEl, completed: !liEl.completed } : liEl
      )
    );
  };

  const removeItem = (id) => {
    const newItems = list.filter((item) => item.id !== id);
    setList(newItems);
  };

  const valueToShare = {
    newItem,
    setNewItem,
    list,
    addItem,
    clearItems,
    isCompleted,
    removeItem,
  };

  return (
    <FormContext.Provider value={valueToShare}>{children}</FormContext.Provider>
  );
}

export { Provider };
export default FormContext;
