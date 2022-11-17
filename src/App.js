import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Todo App</h1>
        <form>
          <input 
          type="text" 
          className='' 
          onChange=""
          />
          <button>Add</button>
          <button>Clear All</button>
        </form>
      </div>
    </div>
  );
}

export default App;
