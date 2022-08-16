import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([
    {
      text: "React",
      done: true,
    },
    {
      text: "Js",
      done: true,
    },
    {
      text: "HTML",
      done: false,
    },
  ]);

  function handleAdd() {
    setTodos([
      {
        text: text,
      },
      ...todos,
    ]);
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <div>
        <div>
          <input type="text" value={text} onChange={handleChange} />
          <button onClick={handleAdd}>add</button>
        </div>
      </div>

      <ul>
        {todos.map((item) => {
          return (
            <li>
              <input type="checkbox" checked={item.done} />
              {item.text}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
