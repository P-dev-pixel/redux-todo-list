import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleTask, editTask } from "../feature/task/createSlice";
import { useState } from "react";

export default function TaskList(){

  const tasks = useSelector((state)=>state.taskList.task);
  const dispatch = useDispatch();

  const [editId,setEditId] = useState(null);
  const [editText,setEditText] = useState("");

  const handleEdit = (task)=>{
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleSave = (id)=>{
    dispatch(editTask({id,text:editText}));
    setEditId(null);
  };

  return(

    <ul className="taskList">

      {tasks.map((task)=>(
        <li key={task.id} className={task.completed ? "done":""}>

          {editId === task.id ? (
            <>
            <input
              value={editText}
              onChange={(e)=>setEditText(e.target.value)}
            />
            <button onClick={()=>handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span onClick={()=>dispatch(toggleTask(task.id))}>
                {task.text}
              </span>

              <div className="actions">

                <button onClick={()=>handleEdit(task)}>
                  Edit
                </button>

                <button onClick={()=>dispatch(removeTask(task.id))}>
                  Delete
                </button>

              </div>
            </>
          )}

        </li>
      ))}

    </ul>
  );
}