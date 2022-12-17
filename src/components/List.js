import { AiFillDelete } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

function List({ list, isCompleted, removeItem }) {
  return (
    <div className="list-container">
      {list.map((item) => {
        return (
          <li key={item.id} className={item.completed ? "done" : ""}>
            {item.name}
            <button
              className="ml-auto text-purple-600 mr-1 text-xl"
              onClick={() => isCompleted(item.id)}
            >
              <AiFillCheckCircle />
            </button>
            <button
              className="mr-1 text-red-600 text-xl"
              onClick={() => removeItem(item.id)}
            >
              <AiFillDelete />
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default List;
