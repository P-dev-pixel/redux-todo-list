import AddTask from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./style.css";

function App(){

  return(
    <div className="container">

      <h1>Redux Todo App</h1>

      <AddTask/>
      <TaskList/>

    </div>
  );
}

export default App;