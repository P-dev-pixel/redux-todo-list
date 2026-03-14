import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../feature/task/createSlice";

export default function AddTask() {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {

    if(input.trim() === "") return;

    dispatch(addTask({
      id: Date.now(),
      text: input,
      completed: false
    }));

    setInput("");
  };

  return (
    <div className="addTask">

      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

    </div>
  );
}